import React from 'react';
import { blogs } from '@/config';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Image from 'next/image';
import Tagline from '@/components/Tagline';
import Link from 'next/link';

interface PropsPage {
  params: {
    label: string;
  };
}

const Page = ({ params }: PropsPage) => {
  const label = decodeURIComponent(params.label);
  const blog = blogs.find((blog) => blog.label === label);

  if (!blog) {
    return <div>Blog post not found</div>;
  }

  const relatedBlogs = blogs.filter((b) => b.id !== blog.id).slice(0, 3);

  return (
    <MaxWidthWrapper classname="-mt-12">
      <div className="flex gap-x-4 items-center min-h-screen">
        <div className="relative w-full h-[500px] overflow-hidden rounded-2xl">
          <Image src={blog.image} alt="Blog Image" fill className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col w-full gap-4">
          <h2 className="text-primary text-4xl font-semibold">{blog.title}</h2>
          <p className="text-primary tracking-tight">{blog.content}</p>
          <span className="text-gray-500">{blog.date}</span>
        </div>
      </div>

      <Tagline title="Postingan Terkait" />
      <div className="grid grid-cols-3 gap-4 mt-8 mb-4">
        {relatedBlogs.map((relatedBlog) => (
          <Link href={relatedBlog.label} key={relatedBlog.id} className="col-span-1 flex flex-col">
            <div className="relative w-full h-[250px] overflow-hidden rounded-xl">
              <Image src={relatedBlog.image} alt="Blog Image" className="w-full h-full" fill />
            </div>
            <h3 className="text-primary">{relatedBlog.title}</h3>
          </Link>
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default Page;
