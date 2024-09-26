'use client';

import { BLOG_CATEGORIES } from '@/config';
import { ChevronDownIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

type Category = (typeof BLOG_CATEGORIES)[number];

interface NavItemProps {
  category: Category;
  handleOpen: () => void;
  handleClose: () => void;
  isOpen: boolean;
  isAnyOpen: boolean;
}

const NavItem = ({ category, handleOpen, handleClose, isAnyOpen, isOpen }: NavItemProps) => {
  return (
    <div className="flex ">
      <div className="lg:-ml-4 relative flex items-center text-gray-700 hover:text-black transition-all duration-150">
        <button className="gap-1.5 font-semibold flex px-4 items-center" onClick={handleOpen}>
          {category.label}
          <ChevronDownIcon
            className={cn('h-4 w-4 transition-all text-muted-foreground ', {
              '-rotate-180 text-black': isOpen,
            })}
          />
        </button>
      </div>

      {isOpen ? (
        <div
          className={cn('absolute inset-x-0 top-full text-sm text-muted-foreground', {
            'animate-in fade-in-10 slide-in-from-top-5': !isAnyOpen,
          })}
        >
          <div className="absolute inset-0 top-1/2 shadow" aria-hidden="true" />

          <div className="relative bg-white">
            <div className="mx-auto max-w-7xl px-8">
              <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-16">
                <div className="col-span-4 col-start-1 grid grid-cols-3 gap-x-8">
                  {category.featured.map((item) => (
                    <div key={item.name} className="group relative text-base sm:text-sm">
                      <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-gray-700 group-hover:opacity-75">
                        <Image src={item.imageSrc} alt="Product category image" fill className="object-cover object-center" sizes="(max-width: 640px) 50vw, (min-width: 641px) 25vw" />
                      </div>
                      <p className="mt-6 block font-medium text-black">{item.name}</p>
                      <Link
                        href={`/blog/${item.href}`}
                        className="mt-1"
                        onClick={() => {
                          handleClose();
                        }}
                      >
                        Read now
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default NavItem;
