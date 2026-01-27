import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactRequest {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, company, subject, message }: ContactRequest = await req.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Save to database
    const { error: dbError } = await supabase
      .from("contact_submissions")
      .insert({
        name,
        email,
        phone: company,
        subject,
        message,
      });

    if (dbError) {
      console.error("Database error:", dbError);
      throw new Error("Failed to save submission");
    }

    console.log("Contact form submission saved to database");

    // Send emails using Resend API
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    
    if (resendApiKey) {
      // Send notification email to admin
      const adminEmailPayload = {
        from: "YGCL Contact Form <onboarding@resend.dev>",
        to: ["hello@ygcl.com"],
        subject: `New Contact Form: ${subject}`,
        html: `
          <h1>New Contact Form Submission</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
          <p><strong>Subject:</strong> ${subject}</p>
          <hr/>
          <h2>Message:</h2>
          <p>${message.replace(/\n/g, "<br/>")}</p>
          <hr/>
          <p><em>Submitted at: ${new Date().toISOString()}</em></p>
        `,
      };

      const adminResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(adminEmailPayload),
      });

      if (!adminResponse.ok) {
        console.error("Failed to send admin email:", await adminResponse.text());
      } else {
        console.log("Admin notification email sent");
      }

      // Send confirmation email to user
      const userEmailPayload = {
        from: "YGCL <onboarding@resend.dev>",
        to: [email],
        subject: "We received your message - YGCL",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #8b5cf6, #a78bfa); padding: 30px; text-align: center;">
              <h1 style="color: white; margin: 0;">Thank You, ${name}!</h1>
            </div>
            <div style="padding: 30px; background: #f9fafb;">
              <p style="color: #374151; font-size: 16px; line-height: 1.6;">
                We've received your message and will get back to you within 24 hours.
              </p>
              <p style="color: #374151; font-size: 16px; line-height: 1.6;">
                In the meantime, feel free to explore our services or check out our latest case studies 
                to see how we've helped other startups succeed.
              </p>
              <div style="margin-top: 30px; padding: 20px; background: white; border-radius: 8px;">
                <h3 style="color: #8b5cf6; margin-top: 0;">Your Message:</h3>
                <p style="color: #6b7280; font-style: italic;">"${message}"</p>
              </div>
              <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-top: 30px;">
                Best regards,<br/>
                <strong>The YGCL Team</strong>
              </p>
            </div>
            <div style="background: #1f2937; padding: 20px; text-align: center;">
              <p style="color: #9ca3af; font-size: 12px; margin: 0;">
                © ${new Date().getFullYear()} Yfeey Concept Global Limited. All rights reserved.
              </p>
            </div>
          </div>
        `,
      };

      const userResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userEmailPayload),
      });

      if (!userResponse.ok) {
        console.error("Failed to send user email:", await userResponse.text());
      } else {
        console.log("User confirmation email sent");
      }
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Contact form submitted successfully" 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
