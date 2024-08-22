'use client'

import React from 'react'

import BlogHeader from "@/components/layout/BlogHeader";
import BlogLanding from "@/components/BlogComponents/BlogLanding";
import BlogPostList from "@/components/BlogComponents/BlogPostList";

export default function Blog() {
    return (
        <>
            <BlogHeader/>
            <div className="pt-16 p-6 md:p-16 xl:p-52 space-y-64 md:space-y-[300px]">
                <BlogLanding/>
                <BlogPostList/>
            </div>
        </>
    );
}