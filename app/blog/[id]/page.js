import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";

async function getPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return null;
  }

  return res.json();
}

export default async function BlogDetailPage({ params }) {
  const { id } = await params;
  const post = await getPost(id);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <section className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="border-b border-gray-100 px-6 py-6 sm:px-8 sm:py-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">
              Blog Detail
            </p>

            <h1 className="text-3xl font-bold leading-tight text-gray-900 capitalize sm:text-4xl">
              {post.title}
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-gray-500">
              <span className="rounded-full bg-gray-100 px-3 py-1">User #{post.userId}</span>
              <span className="rounded-full bg-gray-100 px-3 py-1">Post #{post.id}</span>
            </div>
          </div>

          <div className="px-6 py-8 sm:px-8 sm:py-10">
            <p className="whitespace-pre-line text-[17px] leading-8 text-gray-700">{post.body}</p>

            <div className="mt-10 border-t border-gray-100 pt-6">
              <Link
                href="/"
                className="inline-flex items-center rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-gray-700"
              >
                Back to Blog
              </Link>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}