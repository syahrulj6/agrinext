'use client';
import { useEffect, useState } from 'react';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { blogs } from '@/config';
import Image from 'next/image';
import Link from 'next/link';
import SkeletonLoader from '@/components/Skeleton';

interface BlogsProps {
  id: number;
  label: string;
  title: string;
  description: string;
  date: string;
  image: string;
  content: string;
}

const BlogsPage = () => {
  const [loading, setLoading] = useState(true);
  const [loadedBlogs, setLoadedBlogs] = useState<BlogsProps[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<BlogsProps[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadedBlogs(blogs);
      setFilteredBlogs(blogs);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    const filtered = loadedBlogs.filter((blog) => blog.title.toLowerCase().includes(searchQuery.toLowerCase()));

    setFilteredBlogs(filtered);
    setSearchQuery('');
  };

  return (
    <MaxWidthWrapper classname="my-8 md:my-12">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 justify-center">
        <div className="col-span-2 md:col-span-4 mx-auto">
          <h1 className="text-primary text-5xl md:text-4xl font-bold text-center">Blogs</h1>
          <form onSubmit={handleSearch} className="flex gap-2 mt-8 items-center">
            <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Cari postingan.." className="border-2 border-primary rounded-full text-primary px-4 py-2" />
            <button className="rounded-full py-2 px-4 bg-primary text-white border-2 border-primary hover:bg-second hover:border-second transition-colors" type="submit">
              Submit
            </button>
          </form>
        </div>
        {loading ? (
          Array.from({ length: 8 }).map((_, index) => <SkeletonLoader key={index} />)
        ) : filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => (
            <div key={blog.id} className="flex flex-col w-full h-auto">
              <div className="relative rounded-lg w-full h-[150px] sm:h-[180px] md:h-[200px]">
                <Image src={blog.image} alt="" fill className="w-full h-full rounded-lg object-cover" sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw" loading="lazy" />
              </div>
              <h3 className="font-semibold tracking-tight mt-2 line-clamp-2 overflow-hidden text-ellipsis">{blog.title}</h3>
              <Link href={`/blogs/${blog.label}`} className="mt-1 hover:underline text-black transition-colors">
                Read More
              </Link>
            </div>
          ))
        ) : (
          <div className="col-span-2 md:col-span-4 text-center">
            <p className="text-gray-500">No matching posts found.</p>
          </div>
        )}
      </div>
    </MaxWidthWrapper>
  );
};

export default BlogsPage;
