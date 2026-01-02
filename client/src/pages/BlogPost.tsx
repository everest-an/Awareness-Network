import { Link, useParams } from "wouter";
import { trpc } from "@/lib/trpc";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Eye, ArrowLeft, User } from "lucide-react";
import { Streamdown } from "streamdown";

export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug || "";

  const { data: post, isLoading } = trpc.blog.getBySlug.useQuery({ slug });

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

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <header className="border-b bg-white/80 backdrop-blur-sm">
          <div className="container mx-auto flex h-16 items-center justify-between">
            <Link href="/">
              <a className="flex items-center gap-2 font-bold text-xl">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-purple-600" />
                Awareness Network
              </a>
            </Link>
          </div>
        </header>
        <div className="container mx-auto py-12">
          <div className="max-w-4xl mx-auto animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4" />
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-8" />
            <div className="h-64 bg-gray-200 rounded mb-8" />
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded" />
              <div className="h-4 bg-gray-200 rounded" />
              <div className="h-4 bg-gray-200 rounded w-5/6" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <header className="border-b bg-white/80 backdrop-blur-sm">
          <div className="container mx-auto flex h-16 items-center justify-between">
            <Link href="/">
              <a className="flex items-center gap-2 font-bold text-xl">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-purple-600" />
                Awareness Network
              </a>
            </Link>
          </div>
        </header>
        <div className="container mx-auto py-12 text-center">
          <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist or has been removed.</p>
          <Link href="/blog">
            <a>
              <Button>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Button>
            </a>
          </Link>
        </div>
      </div>
    );
  }

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
            <Link href="/blog"><a className="text-sm font-medium hover:text-blue-600">Blog</a></Link>
          </nav>
        </div>
      </header>

      {/* Article Header */}
      <article className="py-12">
        <div className="container mx-auto max-w-4xl">
          <Link href="/blog">
            <a className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </a>
          </Link>

          {/* Title and Meta */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {formatDate(post.publishedAt)}
            </div>
            <div className="flex items-center gap-2">
              <Eye className="h-4 w-4" />
              {post.viewCount} views
            </div>
            {post.category && (
              <Badge variant="secondary">{post.category}</Badge>
            )}
          </div>

          {/* Tags */}
          {post.tags && (
            <div className="flex flex-wrap gap-2 mb-8">
              {parseTags(post.tags).map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          {/* Cover Image */}
          {post.coverImage && (
            <div className="mb-12 rounded-lg overflow-hidden">
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-auto"
              />
            </div>
          )}

          {/* Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <Streamdown>{post.content}</Streamdown>
          </div>

          {/* Share Section */}
          <div className="border-t pt-8">
            <h3 className="text-xl font-semibold mb-4">Share this article</h3>
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  const url = window.location.href;
                  navigator.clipboard.writeText(url);
                  alert("Link copied to clipboard!");
                }}
              >
                Copy Link
              </Button>
            </div>
          </div>
        </div>
      </article>

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
