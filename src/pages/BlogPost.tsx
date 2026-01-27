import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, User, Calendar, ArrowLeft, Eye, Share2 } from "lucide-react";
import { getBlogPostBySlug, getRelatedPosts, getRecentPosts } from "@/data/blogPosts";
import { toast } from "sonner";
import ReactMarkdown from "react-markdown";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
          <Link to="/blog">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedPosts = getRelatedPosts(post, 3);
  const recentPosts = relatedPosts.length < 3 ? getRecentPosts(post.id, 3) : relatedPosts;

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url,
        });
      } catch {
        // User cancelled or error
      }
    } else {
      await navigator.clipboard.writeText(url);
      toast.success("Link copied to clipboard!");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <Link
              to="/blog"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <Badge variant="secondary" className="mb-4">
              {post.category}
            </Badge>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 max-w-4xl">
              {post.title}
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={300}>
            <p className="text-lg text-muted-foreground max-w-3xl mb-6">
              {post.excerpt}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={400}>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="h-4 w-4" />
                <span>{post.views} views</span>
              </div>
              <Button variant="ghost" size="sm" onClick={handleShare}>
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <AnimatedSection delay={500}>
            <div className="rounded-2xl overflow-hidden max-w-4xl">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <AnimatedSection delay={600}>
                <article className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-blockquote:border-primary prose-blockquote:text-muted-foreground prose-code:text-primary prose-pre:bg-muted prose-pre:text-foreground">
                  <ReactMarkdown>{post.content}</ReactMarkdown>
                </article>
              </AnimatedSection>

              {/* Author Card */}
              <AnimatedSection delay={700}>
                <Card className="mt-12 bg-muted/50 border-border">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-primary">
                        {post.author.split(" ").map((n) => n[0]).join("")}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{post.author}</p>
                      <p className="text-sm text-muted-foreground">YGCL Team</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Expert in AI strategy and startup acceleration
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Related Articles */}
                <AnimatedSection delay={700}>
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    {relatedPosts.length > 0 ? "Related Articles" : "Recent Articles"}
                  </h3>
                  <div className="space-y-4">
                    {recentPosts.map((relatedPost) => (
                      <Link
                        key={relatedPost.id}
                        to={`/blog/${relatedPost.slug}`}
                        className="block group"
                      >
                        <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 overflow-hidden">
                          <CardContent className="p-4">
                            <div className="flex gap-3">
                              <div className="w-20 h-16 rounded-lg overflow-hidden flex-shrink-0">
                                <img
                                  src={relatedPost.image}
                                  alt={relatedPost.title}
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <Badge variant="secondary" className="text-xs mb-1">
                                  {relatedPost.category}
                                </Badge>
                                <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                                  {relatedPost.title}
                                </h4>
                                <p className="text-xs text-muted-foreground mt-1">
                                  {relatedPost.readTime}
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </AnimatedSection>

                {/* CTA Card */}
                <AnimatedSection delay={800}>
                  <Card className="bg-primary text-primary-foreground">
                    <CardContent className="p-6 text-center">
                      <h3 className="font-semibold mb-2">Need AI Support?</h3>
                      <p className="text-sm text-primary-foreground/80 mb-4">
                        Let YGCL help accelerate your startup with AI-powered solutions.
                      </p>
                      <Link to="/contact">
                        <Button variant="secondary" size="sm" className="w-full">
                          Get in Touch
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;
