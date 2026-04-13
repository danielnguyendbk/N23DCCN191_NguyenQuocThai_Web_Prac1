import Link from "next/link";
import { notFound } from "next/navigation";

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
  const post = await getPost(params.id);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow p-8">
        <p className="text-sm text-indigo-600 font-semibold mb-2">
          Blog Detail
        </p>

        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

        <p className="text-gray-700 leading-7 mb-8">{post.body}</p>

        <Link
          href="/"
          className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg"
        >
          Back to Blog
        </Link>
      </div>
    </main>
  );
}