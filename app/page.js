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

      <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-wide text-gray-500">
            Fresh Stories
          </p>
          <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            Latest Articles
          </h1>
          <p className="mt-3 text-base leading-7 text-gray-600">
            Kham pha cac bai viet moi nhat tu blog cua chung toi.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {posts.slice(0, 12).map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </main>
  );
}