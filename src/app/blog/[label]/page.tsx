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
    <MaxWidthWrapper classname="mt-8 md:-mt-12">
      <div className="flex flex-col md:flex-row gap-x-4 items-center mb-6 md:mb-0 justify-center min-h-screen">
        <div className="relative w-full h-[300px] md:h-[500px] overflow-hidden rounded-2xl">
          <Image
            src={blog.image}
            alt="Blog Image"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (min-width: 641px) 100vw" // Adjust sizes as needed
          />
        </div>
        <div className="flex flex-col w-full gap-4 mt-4 md:mt-0">
          <h2 className="text-primary text-3xl md:text-4xl font-semibold tracking-tight md:tracking-normal">{blog.title}</h2>
          <p className="text-primary tracking-tight text-base">{blog.content}</p>
          <span className="text-gray-500">{blog.date}</span>
        </div>
      </div>

      <Tagline title="Postingan Terkait" />
      <div className="grid grid-cols-3 gap-4 mt-8 mb-8 md:mb-16">
        {relatedBlogs.map((relatedBlog) => (
          <Link href={relatedBlog.label} key={relatedBlog.id} className="col-span-1 flex flex-col">
            <div className="relative w-full h-[150px] md:h-[250px] overflow-hidden rounded-xl">
              <Image src={relatedBlog.image} alt="Blog Image" fill className="object-cover" sizes="(max-width: 640px) 100vw, (min-width: 641px) 100vw" />
            </div>
            <h3 className="text-primary text-sm font-semibold md:text-base tracking-tight">{relatedBlog.title}</h3>
          </Link>
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default Page;
