'use client';
import Link from "next/link";

export default function Post1() {
    return (
        <main className="container mx-auto px-4 py-8">
            <article>
                <header className="mb-6">
                    <h1 className="text-4xl font-bold mb-2">My First Blog Post</h1>
                    <p className="text-gray-600">Published on: December 4, 2024</p>
                </header>
                <section className="prose prose-lg">
                    <p>
                        Welcome to my blog! This is where I will share insights, tutorials,
                        and updates about my projects.
                    </p>
                    <p>Here is an example of a blog post written as a page.tsx file.</p>
                </section>
                <footer className="mt-8">
                    <Link href="/blog" className="text-blue-500 hover:underline">
                        ← Back to Blog
                    </Link>
                </footer>
            </article>
        </main>
    );
}