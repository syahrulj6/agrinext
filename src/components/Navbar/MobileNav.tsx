'use client';

import { BLOG_CATEGORIES } from '@/config';
import { ArrowRight, Blend, Layers, Menu, UsersRound, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const closeOnCurrent = (href: string) => {
    if (pathname === href) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) document.body.classList.add('overflow-hidden');
    else document.body.classList.remove('overflow-hidden');
  }, [isOpen]);

  if (!isOpen)
    return (
      <button type="button" onClick={() => setIsOpen(true)} className="lg:hidden relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400">
        <Menu className="h-6 w-6" aria-hidden="true" />
      </button>
    );

  return (
    <div className="ml-auto">
      <div className="relative z-40 md:hidden">
        <div className="fixed inset-0 bg-black bg-opacity-25" />
      </div>

      <div className="fixed overflow-y-scroll overscroll-y-none inset-0 z-40 flex justify-end">
        <div className="w-4/5">
          <div className="relative flex w-full max-w-sm flex-col overflow-y-auto bg-white pb-12 shadow-xl">
            <div className="flex px-4 pb-2 pt-5">
              <button type="button" onClick={() => setIsOpen(false)} className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400">
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-5 w-full px-4 flex flex-col gap-6">
              <div className="flex gap-2 items-center text-gray-700 hover:underline hover:text-black transition-all hover:cursor-pointer duration-150">
                <Layers className="black h-4 w-4" />
                <Link href="#layanan" className="font-semibold lg:text-md" onClick={() => setIsOpen(false)}>
                  Layanan
                </Link>
              </div>
              <div className="flex gap-2 items-center text-gray-700 hover:underline hover:text-black transition-all hover:cursor-pointer duration-150">
                <Blend className="h-4 w-4" />
                <Link href="#solusi" className="font-semibold lg:text-md" onClick={() => setIsOpen(false)}>
                  Solusi
                </Link>
              </div>
              <div className="flex gap-2 items-center text-gray-700 hover:underline hover:text-black transition-all hover:cursor-pointer duration-150">
                <UsersRound className="h-4 w-4" />
                <Link href="#tentang-kami" className="font-semibold lg:text-md" onClick={() => setIsOpen(false)}>
                  Tentang Kami
                </Link>
              </div>
            </div>

            <div>
              <ul>
                {BLOG_CATEGORIES.map((category) => (
                  <li key={category.label} className="space-y-10 px-4 pb-8 pt-10">
                    <div className="border-b border-gray-200">
                      <div className="-mb-px flex">
                        <p className="border-transparent text-gray-900 flex-1 whitespace-nowrap border-b-2 py-4 text-base font-medium">{category.label}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-y-10 gap-x-4">
                      {category.featured.map((item) => (
                        <Link href={`/blog/${item.href}`} key={item.name} className="group relative text-sm" onClick={() => setIsOpen(false)}>
                          <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                            <Image fill src={item.imageSrc} alt="product category image" className="object-cover object-center" sizes="(max-width: 640px) 50vw, (min-width: 641px) 25vw" />
                          </div>
                          <p className="mt-6 block font-medium text-gray-900">{item.name}</p>
                        </Link>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <Link onClick={() => closeOnCurrent('/kontak-kami')} href="/kontak-kami" className="mx-3 flex gap-3 px-3 py-2 rounded-full justify-center w-fit items-center bg-primary hover:bg-[#327726] transition-all">
              <p className="text-white text-md text-base ">Kontak Kami</p>
              <div className="bg-white p-2 rounded-full">
                <ArrowRight className="w-4 h-4 text-primary" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
