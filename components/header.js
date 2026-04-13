import Link from "next/link";

export default function Header() {
    return (
        <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/90 backdrop-blur">
            <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-xl font-bold tracking-tight text-gray-900">
                    MyBlog
                </Link>

                <nav className="hidden items-center gap-8 md:flex">
                    <Link href="/" className="text-sm font-medium text-gray-600 transition hover:text-gray-900">
                        Home
                    </Link>
                    <Link href="/" className="text-sm font-medium text-gray-600 transition hover:text-gray-900">
                        Articles
                    </Link>
                    <Link href="/" className="text-sm font-medium text-gray-600 transition hover:text-gray-900">
                        About
                    </Link>
                </nav>

                <Link
                    href="/"
                    className="inline-flex items-center rounded-lg bg-gray-900 px-3.5 py-2 text-sm font-medium text-white transition hover:bg-gray-700"
                >
                    Subscribe
                </Link>
            </div>
        </header>
    );
}