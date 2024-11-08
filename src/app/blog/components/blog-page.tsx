
import Link from "next/link"
import {Button, Input} from "@nextui-org/react";

const blogPosts = [
    { id: 1, title: "Getting Started with Next.js", excerpt: "Learn the basics of Next.js and start building awesome React applications.", date: "2023-05-15", tags: ["nextjs", "react", "webdev"] },
    { id: 2, title: "Mastering CSS Grid", excerpt: "Dive deep into CSS Grid and create complex layouts with ease.", date: "2023-05-20", tags: ["css", "webdesign", "frontend"] },
    { id: 3, title: "The Power of TypeScript", excerpt: "Discover how TypeScript can improve your JavaScript development experience.", date: "2023-05-25", tags: ["typescript", "javascript", "programming"] },
]

const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)))

export default function BlogMainPage() {
    return (
        <main className="container">
            <section className="mb-8">
                <form className="flex gap-2">
                    <Input type="search" placeholder="Search blog posts..." className="flex-grow" />
                    <Button type="submit">Search</Button>
                </form>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Popular Tags</h2>
                <div className="flex flex-wrap gap-2">
                    {allTags.map(tag => (
                        <Link
                            key={tag}
                            href={`/tag/${tag}`}
                            className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 transition-colors"
                        >
                            #{tag}
                        </Link>
                    ))}
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4">Latest Blog Posts</h2>
                <div className="space-y-8">
                    {blogPosts.map(post => (
                        <article key={post.id} className="border-b border-gray-200 pb-8 last:border-b-0">
                            <h3 className="text-xl font-semibold mb-2">
                                <Link href={`/blog/${post.id}`} className="hover:underline">
                                    {post.title}
                                </Link>
                            </h3>
                            <p className="text-gray-600 mb-2">{post.excerpt}</p>
                            <div className="flex items-center justify-between">
                                <time dateTime={post.date} className="text-sm text-gray-500">
                                    {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                </time>
                                <div className="flex gap-2">
                                    {post.tags.map(tag => (
                                        <Link
                                            key={tag}
                                            href={`/tag/${tag}`}
                                            className="text-sm text-blue-600 hover:underline"
                                        >
                                            #{tag}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    )
}