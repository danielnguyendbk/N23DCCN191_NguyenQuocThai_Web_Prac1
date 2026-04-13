import Link from "next/link";
import Badge from "./Badge";

export default function BlogCard({ post }) {
    return (
        <article className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <div className="mb-3 flex items-center justify-between gap-3">
                <Badge label={post.category} />
                <span className="text-xs text-gray-500">Post #{post.id}</span>
            </div>

            <h2 className="mb-3 line-clamp-2 text-xl font-semibold leading-snug text-gray-900 capitalize">
                {post.title}
            </h2>

            <p className="mb-6 line-clamp-3 text-sm leading-6 text-gray-600">{post.body}</p>

            <div className="mt-auto flex items-center justify-between gap-4 border-t border-gray-100 pt-4">
                <span className="text-sm text-gray-500">User #{post.userId}</span>
                <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center rounded-lg bg-gray-900 px-3.5 py-2 text-sm font-medium text-white transition hover:bg-gray-700"
                >
                    Read More
                </Link>
            </div>
        </article>
    );
}