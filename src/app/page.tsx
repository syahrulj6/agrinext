import AboutUs from '@/components/AboutUs';
import Blogs from '@/components/Blogs';
import Hero from '@/components/Hero';
import Solutions from '@/components/Solutiouns';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen justify-center ">
      <Hero />
      <AboutUs />
      <Solutions />
      <Blogs />
    </div>
  );
}
