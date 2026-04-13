import Header from "@/components/Header";
import BlogCard from "@/components/BlogCard";

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Không fetch được bài viết");
  }

  const posts = await res.json();

  const categories = ["Tech", "Design", "News", "Coding", "Tutorial"];

  return posts.map((post) => ({
    ...post,
    category: categories[post.id % categories.length],
  }));
}

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <section className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-2">Latest Articles</h1>
        <p className="text-gray-500 mb-8">
          Khám phá các bài viết mới nhất từ blog của chúng tôi.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.slice(0, 12).map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </main>
  );
}