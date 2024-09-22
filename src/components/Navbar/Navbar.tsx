'use client';

import Link from 'next/link';
import MaxWidthWrapper from '../MaxWidthWrapper';
import NavItems from './NavItems';

import MobileNav from './MobileNav';
import Image from 'next/image';
import { ArrowRight, Blend, Bot, Layers, UsersRound } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = async () => {
  return (
    <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="bg-dark sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-white">
        <MaxWidthWrapper>
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center justify-between w-full">
              {/* Left side - Logo */}
              <div className="flex items-center">
                <Link href="/">
                  <Image alt="logo" src="/logo.png" width={36} height={36} />
                </Link>
              </div>

              {/* Mobile Nav and AgriBot - Right side */}
              <div className="flex items-center ml-auto gap-3 mx-4">
                <div className="flex items-center lg:hidden">
                  <Link href="/bot" className="text-md font-semibold text-primary flex  gap-2 items-center ">
                    <p className="text-lg font-semibold text-primary">AgriBot</p>
                    <div className="bg-[#e5f7e1] p-2 rounded-full">
                      <Bot className="h-5 w-5 text-primary" />
                    </div>
                  </Link>
                </div>
                <MobileNav />
              </div>

              {/* Center Navigation - Desktop */}
              <div className="hidden lg:flex gap-6 ml-8">
                <div className="flex gap-2 items-center text-gray-700 hover:underline hover:text-black transition-all hover:cursor-pointer duration-150">
                  <Layers className="black h-4 w-4" />
                  <p className="font-semibold lg:text-md">Layanan</p>
                </div>
                <div className="flex gap-2 items-center text-gray-700 hover:underline hover:text-black transition-all hover:cursor-pointer duration-150">
                  <Blend className="h-4 w-4" />
                  <p className="font-semibold lg:text-md">Solusi</p>
                </div>
                <div className="flex gap-2 items-center text-gray-700 hover:underline hover:text-black transition-all hover:cursor-pointer duration-150">
                  <UsersRound className="h-4 w-4" />
                  <p className="font-semibold lg:text-md">Tentang Kami</p>
                </div>

                <NavItems />
              </div>

              {/* Right Side - Desktop */}
              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                <div className="ml-4 flex lg:ml-6">
                  <Link href="/bot" className="text-md font-semibold text-primary flex gap-2 items-center ">
                    <p className="text-lg font-semibold text-primary">AgriBot</p>
                    <div className="bg-[#e5f7e1] p-2 rounded-full">
                      <Bot className="h-5 w-5 text-primary" />
                    </div>
                  </Link>
                  <Link href="kontak-kami" className="mx-3 flex gap-3 px-3 py-2 rounded-full justify-center w-fit items-center bg-primary hover:bg-[#327726] transition-all">
                    <p className="text-white text-md text-base">Kontak Kami</p>
                    <div className="bg-white p-2 rounded-full">
                      <ArrowRight className="w-4 h-4 text-primary" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </motion.div>
  );
};

export default Navbar;
