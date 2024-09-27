import { ArrowRight } from 'lucide-react';
import MaxWidthWrapper from './MaxWidthWrapper';
import Image from 'next/image';
import Link from 'next/link';
import Tagline from './Tagline';

const Hero = () => {
  return (
    <MaxWidthWrapper classname="mt-12 md:mt-24">
      <div className="flex md:flex-row flex-col w-full bg-white" id="hero">
        <div className="flex flex-col w-full">
          <Tagline title="Memberdayakan Pertanian Modern" />

          <h1 className="text-5xl lg:text-6xl font-bold text-primary mt-4 w-80 md:w-fit ">Solusi pertanian berkelanjutan untuk masa depan yang lebih baik.</h1>

          <p className="text-primary mt-6 w-3/4 tracking-tight">Menghadirkan teknologi mutakhir dan praktik inovatif ke dunia pertanian, membantu Anda memaksimalkan hasil, mengurangi limbah, dan meningkatkan keberlanjutan</p>

          <div className="flex gap-4 items-center mt-6 lg:mt-8">
            <Link href="kontak-kami" className="flex gap-3 px-4 py-2 rounded-full justify-center w-fit items-center bg-primary hover:bg-[#327726] transition-all">
              <p className="text-white text-base">Mulai</p>
              <div className="bg-white p-2 rounded-full">
                <ArrowRight className="w-4 h-4 text-primary" />
              </div>
            </Link>
            <Link href="/blogs" className="text-primary px-4 py-2 border-2 border-primary rounded-full hover:bg-primary hover:text-white transition-all">
              Baca Artikel
            </Link>
          </div>
        </div>

        <div className="grid w-full grid-cols-2 gap-4 mt-6 md:mt-0">
          <div className="col-span-2 relative w-full h-[250px] md:h-[300px] rounded-3xl overflow-hidden">
            <Image alt="image" src="/hero1.jpg" fill className="w-full h-full object-cover" sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw" />
          </div>

          <div className="relative w-full h-[150px] md:h-[200px] rounded-3xl overflow-hidden">
            <Image alt="image" src="/hero2.jpg" fill className="w-full h-full object-cover" sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw" />
          </div>
          <div className="relative w-full h-[150px] md:h-[200px] rounded-3xl overflow-hidden">
            <Image alt="image" src="/hero3.jpg" fill className="w-full h-full object-cover" sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw" />
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Hero;
