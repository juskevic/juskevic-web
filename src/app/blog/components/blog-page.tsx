
import Link from "next/link"
import {Card, Input} from "@nextui-org/react";
import {IconSearch} from "@tabler/icons-react";

const blogPosts = [
    { id: 1, title: "Getting Started with Next.js", excerpt: "Learn the basics of Next.js and start building awesome React applications.", date: "2023-05-15", tags: ["nextjs", "react", "webdev"] },
    { id: 2, title: "Mastering CSS Grid", excerpt: "Dive deep into CSS Grid and create complex layouts with ease.", date: "2023-05-20", tags: ["css", "webdesign", "frontend"] },
    { id: 3, title: "The Power of TypeScript", excerpt: "Discover how TypeScript can improve your JavaScript development experience.", date: "2023-05-25", tags: ["typescript", "javascript", "programming"] },
    { id: 4, title: "The Power of TypeScript", excerpt: "Discover how TypeScript can improve your JavaScript development experience.", date: "2023-05-25", tags: ["typescript", "javascript", "programming"] },
    { id: 5, title: "The Power of TypeScript", excerpt: "Discover how TypeScript can improve your JavaScript development experience.", date: "2023-05-25", tags: ["typescript", "javascript", "programming", "flex-wrap"] },
]

const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)))

export default function BlogMainPage() {
    return (
        <main className="container">
            <section className="mb-8">
                <form className="flex gap-2">
                    <Input
                        variant="underlined"
                        className="text-lg"
                        color="primary"
                        isClearable={true}
                        radius="full"
                        placeholder="Search..."
                        startContent={<IconSearch stroke="1.5"/>}
                    />
                </form>
            </section>

            <section className="mb-8">
                <div className="flex flex-wrap gap-2">
                    {allTags.map(tag => (
                        <Link
                            key={tag}
                            href={`/tag/${tag}`}
                            className="px-3 py-1 text-primary hover:text-secondary-foreground rounded-full transition-colors"
                        >
                            #{tag}
                        </Link>
                    ))}
                </div>
            </section>

            <section>
                <div className="space-y-8">
                    {blogPosts.map(post => (
                        <Card isHoverable={true} isPressable={true} key={post.id} className="!text-left justify-start w-full p-4 pb-8 rounded-xl bg-background shadow border-1 border-b-3 border-r-3 border-secondary">
                            <h3 className="text-xl font-bold mb-2">
                                <Link href={`/blog/${post.id}`}>
                                    {post.title}
                                </Link>
                            </h3>
                            <p className="text-gray-600 mb-2">{post.excerpt}</p>
                            <div className="flex flex-col sm:flex-row justify-start gap-2">
                                <div className="text-sm text-secondary">
                                    {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                </div>
                                <div className="flex gap-2 flex-wrap">
                                    {post.tags.map(tag => (
                                        <Link
                                            key={tag}
                                            href={`/tag/${tag}`}
                                            className="text-sm text-blue-600"
                                        >
                                            #{tag}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>
        </main>
    )
}