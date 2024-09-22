import AboutUs from '@/components/AboutUs';
import Hero from '@/components/Hero';
import Solutions from '@/components/Solutiouns';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen justify-center ">
      <Hero />
      <AboutUs />
      <Solutions />
    </div>
  );
}
