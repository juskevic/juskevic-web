import React from 'react';
import BlogLanding from "@/app/blog/components/blogLanding";
import BlogMainPage from "@/app/blog/components/blog-page";

const BlogPage = () => {
    return (
        <div className="
                p-6 md:p-14 xl:p-32 2xl:p-36
                inset-0 -z-10 bg-background bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
            <BlogLanding/>
            <BlogMainPage/>
        </div>
    );
};

export default BlogPage;