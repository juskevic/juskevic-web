export type BlogPostMetadata = {
    id: string;
    title: string;
    date: string;
    tags: string[];
    excerpt: string;
};

export const blogPostsMetadata: BlogPostMetadata[] = [
    {
        id: "post-1",
        title: "Hello World",
        date: "2024-12-04",
        tags: ["nextjs", "typescript", "tutorial"],
        excerpt: "How did I make this website?",
    }
];
