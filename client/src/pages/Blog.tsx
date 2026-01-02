import { useState } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Calendar, Eye, ArrowRight } from "lucide-react";

export default function Blog() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>();

  const { data: posts, isLoading } = trpc.blog.list.useQuery({
    status: "published",
    category: selectedCategory,
    search: search || undefined,
    limit: 20,
  });

  const { data: categories } = trpc.blog.getCategories.useQuery();

  const formatDate = (date: Date | string | null) => {
    if (!date) return "";
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const parseTags = (tags: string | null): string[] => {
    if (!tags) return [];
    try {
      return JSON.parse(tags);
    } catch {
      return [];
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto flex h-16 items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-2 font-bold text-xl">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-purple-600" />
              Awareness Network
            </a>
          </Link>
          <nav className="flex gap-6">
            <Link href="/marketplace"><a className="text-sm font-medium hover:text-blue-600">Marketplace</a></Link>
            <Link href="/"><a className="text-sm font-medium hover:text-blue-600">Get Started</a></Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Awareness Network Blog</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Insights on AI capabilities, latent space vectors, and the future of AI collaboration
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 border-b bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              <Button
                variant={!selectedCategory ? "default" : "outline"}
                onClick={() => setSelectedCategory(undefined)}
                size="sm"
              >
                All
              </Button>
              {categories?.map((cat) => (
                <Button
                  key={cat}
                  variant={selectedCategory === cat ? "default" : "outline"}
                  onClick={() => setSelectedCategory(cat)}
                  size="sm"
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="container mx-auto">
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="animate-pulse">
                  <div className="h-48 bg-gray-200" />
                  <CardHeader>
                    <div className="h-6 bg-gray-200 rounded mb-2" />
                    <div className="h-4 bg-gray-200 rounded w-2/3" />
                  </CardHeader>
                </Card>
              ))}
            </div>
          ) : posts && posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow group">
                  {post.coverImage && (
                    <div className="h-48 overflow-hidden">
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4" />
                      {formatDate(post.publishedAt)}
                      <span className="mx-2">•</span>
                      <Eye className="h-4 w-4" />
                      {post.viewCount} views
                    </div>
                    <CardTitle className="line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </CardTitle>
                    {post.excerpt && (
                      <CardDescription className="line-clamp-3 mt-2">
                        {post.excerpt}
                      </CardDescription>
                    )}
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {parseTags(post.tags).slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href={`/blog/${post.slug}`}>
                      <a className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
                        Read More <ArrowRight className="h-4 w-4" />
                      </a>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No articles found</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-gray-50 py-12">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">Awareness Network</h3>
              <p className="text-sm text-muted-foreground">
                The first marketplace for AI latent space vectors, powered by LatentMAS and MCP technology.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <div className="space-y-2 text-sm">
                <Link href="/marketplace"><a className="block hover:text-blue-600">Marketplace</a></Link>
                <Link href="/pricing"><a className="block hover:text-blue-600">Pricing</a></Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Developers</h4>
              <div className="space-y-2 text-sm">
                <Link href="/docs/sdk"><a className="block hover:text-blue-600">SDK Documentation</a></Link>
                <a href="https://github.com" className="block hover:text-blue-600">GitHub</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <div className="space-y-2 text-sm">
                <Link href="/privacy"><a className="block hover:text-blue-600">Privacy Policy</a></Link>
                <Link href="/terms"><a className="block hover:text-blue-600">Terms of Service</a></Link>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            © 2025 Awareness Network. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
