'use client';
import React, { useState } from "react";
import Link from "next/link";
import { Card, Input } from "@nextui-org/react";
import { IconSearch } from "@tabler/icons-react";
import {BlogPostMetadata, blogPostsMetadata} from "@/app/blog/blogMetadata";

export default function BlogMainPage() {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [filteredPosts, setFilteredPosts] = useState<BlogPostMetadata[]>(
        blogPostsMetadata
    );

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);

        setFilteredPosts(
            blogPostsMetadata.filter(
                (post) =>
                    post.title.toLowerCase().includes(query) ||
                    post.tags.some((tag) => tag.toLowerCase().includes(query))
            )
        );
    };

    const allTags = Array.from(
        new Set(blogPostsMetadata.flatMap((post) => post.tags))
    );

    return (
        <main className="container">
            {/* Search Input */}
            <section className="mb-8">
                <form className="flex gap-2">
                    <Input
                        variant="underlined"
                        className="text-lg"
                        color="primary"
                        isClearable={true}
                        radius="full"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={handleSearch}
                        startContent={<IconSearch stroke="1.5" />}
                    />
                </form>
            </section>

            {/* Tags Section */}
            <section className="mb-8">
                <div className="flex flex-wrap gap-2">
                    {allTags.map((tag) => (
                        <button
                            key={tag}
                            onClick={() =>
                                setFilteredPosts(
                                    blogPostsMetadata.filter((post) => post.tags.includes(tag))
                                )
                            }
                            className="px-3 py-1 text-primary hover:text-secondary-foreground rounded-full transition-colors"
                        >
                            #{tag}
                        </button>
                    ))}
                </div>
            </section>

            {/* Blog Posts Section */}
            <section>
                <div className="space-y-8">
                    {filteredPosts.map((post) => (
                        <Card
                            as={Link}
                            href={`/blog/${post.id}`}
                            isHoverable={true}
                            isPressable={true}
                            key={post.id}
                            className="!text-left justify-start w-full p-4 pb-8 rounded-xl bg-background shadow border-1 border-b-3 border-r-3 border-secondary"
                        >
                            <h3 className="text-xl font-bold mb-2">
                                <Link href={`/blog/${post.id}`}>{post.title}</Link>
                            </h3>
                            <p className="text-gray-600 mb-2">{post.excerpt}</p>
                            <div className="flex flex-col sm:flex-row justify-start gap-2">
                                <div className="text-sm text-secondary">
                                    {new Date(post.date).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </div>
                                <div className="flex gap-2 flex-wrap">
                                    {post.tags.map((tag) => (
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
    );
}
