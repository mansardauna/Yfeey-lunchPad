import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Clock, User, Search, TrendingUp, Calendar, Eye, ArrowRight } from "lucide-react";
import { blogPosts, categories } from "@/data/blogPosts";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = filteredPosts.filter((post) => post.featured);
  const recentPosts = filteredPosts.filter((post) => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pb-24 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <span className="inline-block px-4 py-1 bg-[hsl(var(--dark-section))]/10 text-[hsl(var(--dark-section))] rounded-full text-sm font-medium mb-4">
              Blog & Insights
            </span>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              AI Insights & Startup Wisdom
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Stay ahead of the curve with our latest articles on AI trends, startup strategies,
              and industry news curated by our expert team.
            </p>
          </AnimatedSection>

          {/* Search Bar */}
          <AnimatedSection delay={300}>
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search articles..."
                className="pl-12 pr-4 py-3 text-base h-12"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border sticky top-16 md:top-20 bg-background/95 backdrop-blur-sm z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                className="rounded-full"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="flex items-center gap-2 mb-8">
                <TrendingUp className="h-5 w-5 text-[hsl(var(--dark-section))]" />
                <h2 className="text-2xl font-bold text-foreground">Featured Articles</h2>
              </div>
            </AnimatedSection>
            <div className="grid md:grid-cols-3 gap-6">
              {featuredPosts.map((post, index) => (
                <AnimatedSection key={post.id} delay={index * 100}>
                  <Link to={`/blog/${post.slug}`}>
                    <Card className="group bg-card border-border hover:border-[hsl(var(--dark-section))]/50 hover:shadow-xl transition-all duration-300 overflow-hidden h-full cursor-pointer">
                      <div className="h-48 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <CardContent className="p-6">
                        <Badge variant="secondary" className="mb-3">
                          {post.category}
                        </Badge>
                        <h3 className="font-semibold text-foreground mb-2 group-hover:text-[hsl(var(--dark-section))] transition-colors line-clamp-2 text-lg">
                          {post.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1">
                              <User className="h-3 w-3" />
                              {post.author}
                            </div>
                            <div className="flex items-center gap-1">
                              <Eye className="h-3 w-3" />
                              {post.views}
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {post.readTime}
                          </div>
                        </div>
                        <div className="mt-4 flex items-center text-[hsl(var(--dark-section))] text-sm font-medium group-hover:gap-2 transition-all">
                          Read More <ArrowRight className="h-4 w-4 ml-1" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Recent Posts */}
      {recentPosts.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <h2 className="text-2xl font-bold text-foreground mb-8">Recent Articles</h2>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 gap-6">
              {recentPosts.map((post, index) => (
                <AnimatedSection key={post.id} delay={index * 100}>
                  <Link to={`/blog/${post.slug}`}>
                    <Card className="group bg-card border-border hover:border-[hsl(var(--dark-section))]/50 hover:shadow-lg transition-all duration-300 cursor-pointer">
                      <CardContent className="p-6 flex gap-6">
                        <div className="w-32 h-24 rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="secondary" className="text-xs">
                              {post.category}
                            </Badge>
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {post.date}
                            </span>
                          </div>
                          <h3 className="font-semibold text-foreground mb-1 group-hover:text-[hsl(var(--dark-section))] transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-sm text-muted-foreground line-clamp-1 mb-2">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <User className="h-3 w-3" />
                              {post.author}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {post.readTime}
                            </span>
                            <span className="flex items-center gap-1">
                              <Eye className="h-3 w-3" />
                              {post.views}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* No Results */}
      {filteredPosts.length === 0 && (
        <section className="py-24">
          <div className="container mx-auto px-4 text-center">
            <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">No articles found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search or filter to find what you're looking for.
            </p>
            <Button variant="outline" onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}>
              Clear Filters
            </Button>
          </div>
        </section>
      )}

      <CTASection
        title="Stay in the Loop"
        description="Subscribe to our newsletter and never miss an insight. Get the latest AI trends and startup tips delivered to your inbox."
        buttonText="Contact Us"
        buttonLink="/contact"
      />

      <Footer />
    </div>
  );
};

export default Blog;
