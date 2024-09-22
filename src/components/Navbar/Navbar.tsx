import Link from 'next/link';
import NavItems from './NavItems';
import MobileNav from './MobileNav';
import MaxWidthWrapper from '../MaxWidthWrapper';
import Image from 'next/image';
import { Layers, Blend, UsersRound, Bot } from 'lucide-react';

const Navbar = async () => {
  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-white">
        <MaxWidthWrapper>
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <MobileNav />

              <div className="flex items-center">
                <Link href="/">
                  <Image alt="logo" src="/logo.png" width={36} height={36} />
                </Link>
              </div>

              <div className="hidden z-50 lg:ml-12 lg:block lg:self-stretch"></div>
              <div className="hidden lg:flex gap-6">
                <div className="flex gap-2 items-center text-gray-700 hover:underline hover:text-black transition-all hover:cursor-pointer duration-150">
                  <Layers className="black h-4 w-4" />
                  <p className="  font-semibold lg:text-md">Layanan</p>
                </div>
                <div className="flex gap-2 items-center text-gray-700 hover:underline hover:text-black transition-all hover:cursor-pointer duration-150">
                  <Blend className=" h-4 w-4" />

                  <p className=" font-semibold lg:text-md">Solusi</p>
                </div>
                <div className="flex gap-2 items-center text-gray-700 hover:underline hover:text-black transition-all hover:cursor-pointer duration-150">
                  <UsersRound className=" h-4 w-4" />

                  <p className=" font-semibold lg:text-md">Tentang Kami</p>
                </div>

                <NavItems />
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <div className="ml-4 flex items-center lg:ml-6 gap-2 ">
                    <Link href="/bot" className="text-md font-semibold text-primary">
                      AgriBot
                    </Link>
                    <div className="bg-[#e5f7e1] p-2 rounded-full">
                      <Bot className="h-5 w-5 text-primary " />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;
