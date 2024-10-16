'use client';

import React, { useState } from 'react';
import MaxWidthWrapper from './MaxWidthWrapper';
import Tagline from './Tagline';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { blogs } from '@/config';

const Blogs = () => {
  const [startIndex, setStartIndex] = useState(0);
  const blogsPerPage = 3;
  const blogsPerPageMobile = 4;

  const maxStartIndex = blogs.length - blogsPerPage;

  const handleNext = () => {
    if (startIndex < maxStartIndex) {
      setStartIndex(maxStartIndex);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(0);
    }
  };

  const displayedBlogs = blogs.slice(startIndex, startIndex + blogsPerPage);
  const displayedBlogsMobile = blogs.slice(startIndex, startIndex + blogsPerPageMobile);

  const leftButtonBg = startIndex > 0 ? ' bg-gray-200 text-gray-400 hover:text-white hover:bg-primary transitions-colors duration-200 ' : 'bg-primary text-white';
  const rightButtonBg = startIndex < maxStartIndex ? 'bg-gray-200 text-gray-400 hover:bg-primary transitions-colors duration-200 hover:text-white' : ' bg-primary text-white';

  return (
    <MaxWidthWrapper classname="mt-16">
      <Tagline title="Terbaru di Pertanian" />
      <div className="flex justify-between">
        <h1 id="blogs" className="text-primary text-2xl font-semibold md:text-3xl mt-4 md:mt-6">
          Wawasan, Tren, dan Tips dari Pakar Industri
        </h1>
        <Link href="/blogs" className="flex gap-1 text-primary group items-center">
          <span className="group-hover:underline transition-all">Lihat lebih banyak</span> <ArrowRight className="w-4 h-4 group-hover:translate-x-2  transition-all" />
        </Link>
      </div>
      <div className="flex justify-between items-end">
        <p className="tracking-tight mt-4 md:mt-6 w-fit md:w-3/5 text-second">
          Jelajahi blog kami untuk tetap mendapatkan update terbaru dalam perkembangan dunia pertanian. Baik Anda mencari wawasan dari para ahli, teknik pertanian inovatif, atau tren yang membentuk masa depan pertanian berkelanjutan, kami
          siap membantu Anda.
        </p>

        <div className="flex gap-2">
          <button className={`p-3 rounded-full ${leftButtonBg}`} onClick={handlePrev} disabled={startIndex === 0}>
            <ChevronLeft className="w-3 h-3 md:w-5 md:h-5" />
          </button>
          <button className={`p-3 rounded-full ${rightButtonBg}`} onClick={handleNext} disabled={startIndex >= maxStartIndex}>
            <ChevronRight className="w-3 h-3 md:h-5 md:w-5" />
          </button>
        </div>
      </div>

      <div className="hidden mt-8 gap-y-0 md:grid grid-cols-3 gap-x-3">
        {displayedBlogs.map((blog) => (
          <div key={blog.id} className="mb-6 col-span-1 flex flex-col justify-between">
            <div className="relative h-[250px] md:h-[300px] w-full rounded-xl overflow-hidden">
              <Image src={blog.image} alt="Blog Image" fill className="w-full h-full object-cover" sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw" />
            </div>
            <h2 className="text-lg md:text-xl font-bold text-primary mt-2">{blog.title}</h2>
            <p className="text-primary mt-2 tracking-tight">{blog.description}</p>
            <p className="text-gray-400 text-sm mt-2 mb-5">{blog.date}</p>

            <Link className="w-fit rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all px-4 py-2" href={`/blogs/${blog.label}`}>
              Read More
            </Link>
          </div>
        ))}
      </div>

      <div className="md:hidden mt-8 gap-y-0 grid grid-cols-2 gap-x-3">
        {displayedBlogsMobile.map((blog) => (
          <div key={blog.id} className="mb-6 col-span-1 flex flex-col justify-between">
            <div className="relative h-[200px] w-full rounded-xl overflow-hidden">
              <Image src={blog.image} alt="Blog Image" fill className="w-full h-full object-cover" sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 50vw" />
            </div>
            <h2 className="text-base font-bold text-primary mt-2">{blog.title}</h2>
            <p className="text-gray-400 text-sm mt-2 mb-5">{blog.date}</p>

            <Link className="w-fit rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all px-4 py-2" href={`/blog/${blog.label}`}>
              Read More
            </Link>
          </div>
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default Blogs;
