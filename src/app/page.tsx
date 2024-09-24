import AboutUs from '@/components/AboutUs';
import Blogs from '@/components/Blogs';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Solutions from '@/components/Solutiouns';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen justify-center ">
      <Hero />
      <AboutUs />
      <Solutions />
      <Blogs />
      <Services />
    </div>
  );
}
