import AboutUs from '@/components/AboutUs';
import Blogs from '@/components/Blogs';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Services from '@/components/Services';
import Solutions from '@/components/Solutiouns';
import { ArrowRight, Dot } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen justify-center ">
      <Hero />
      <AboutUs />
      <Solutions />
      <Blogs />
      <Services />
      <Faq />
      <MaxWidthWrapper classname=" mb-16">
        <div className="relative w-full h-[300px] md:h-[500px] bg-[url('/blog5.jpg')] bg-cover bg-center rounded-2xl overflow-hidden">
          <div className="absolute inset-0 flex-col flex items-center justify-end pb-12 bg-black bg-opacity-50 rounded-lg">
            <div className="border-[1px] bg-gray-800/50 border-white rounded-full px-1 text-sm  py-1 w-fit flex items-center ">
              <Dot className="h-4 w-4 md:w-5 md:h-5 text-white" />
              <p className="text-white text-sm md:text-base">Ready to Grow</p>
            </div>
            <h1 className="text-xl md:text-3xl font-semibold tracking-tight text-center text-white mt-4">Langkah pertama menuju pertanian berkelanjutan</h1>
            <p className="text-base md:text-lg text-center  tracking-tighter text-white mt-2">Hubungi kami hari ini untuk mempelajari bagaimana AgriNext dapat membantu tujuan pertanian Anda.</p>
            <Link href="/kontak-kami" className="mx-3 flex gap-3 mt-4 px-3 py-2 rounded-full justify-center w-fit items-center bg-white hover:bg-white/75 transition-all">
              <p className="text-primary text-md text-sm md:text-base ">Kontak Kami</p>
              <div className="bg-primary py-1 px-2 h-6 md:h-8 flex items-center rounded-full">
                <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-white" />
              </div>
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
