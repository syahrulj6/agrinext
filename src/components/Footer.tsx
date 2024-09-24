import React, { FC } from 'react';
import { ArrowUpRight, Facebook, Instagram, Linkedin, Twitter, Icon as LucideIcon } from 'lucide-react';
import Image from 'next/image';

// Define prop types for SocialIcon component
interface SocialIconProps {
  Icon: LucideIcon;
  className?: string;
}

// Define prop types for FooterLinks component
interface FooterLinksProps {
  title: string;
  links: string[];
}

// SocialIcon component
const SocialIcon: FC<SocialIconProps> = ({ Icon, className = "" }) => (
  <div className={`circle flex justify-center items-center w-8 h-8 border border-white rounded-full ${className}`}>
    <Icon className="w-5 text-white" />
  </div>
);

// FooterLinks component
const FooterLinks: FC<FooterLinksProps> = ({ title, links }) => (
  <div className="footer-section flex flex-col gap-4 text-white md:mr-3">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    {links.map((link, index) => (
      <a key={index} className="font-normal">{link}</a>
    ))}
  </div>
);

// Main Footer component
const Footer: FC = () => {
  return (
    <footer className="flex justify-center py-5 bg-primary w-full">
      <div className="content flex w-full px-8 flex-col">
        
        {/* Call to Action Section */}
        <div className="py-10 px-4 md:p-10 flex justify-center bg-white rounded-2xl mb-16">
          <div className="title text-center">
            <h2 className="text-2xl md:text-4xl tracking-tight font-semibold mb-2">Siap Meningkatkan proyek</h2>
            <h2 className="text-2xl md:text-4xl tracking-tight font-semibold mb-6">Digital Marketing Project Anda?</h2>
            <p className="text-xs md:text-base  md:tracking-tighter font-normal">Siap meningkatkan proyek pemasaran digital Anda? Kami siap membantu</p>
            <p className="text-xs md:text-base  md:tracking-tighter font-normal mb-5">strategi hasil dan pertumbuhan nyata.</p>
            <div className="button flex justify-center">
              <button className="bg-primary flex py-4 px-9 rounded-md text-white shadow-second shadow-2xl hover:bg-second transition-all">
              Hubungi Kami <ArrowUpRight className="ml-2 w-5" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Footer Content */}
        <div className="bottomFooter flex flex-col md:flex-row justify-between mx-6 space-y-8 md:space-y-0">
          {/* Left Side: Logo and Description */}
          <div className="side1 flex flex-col md:w-1/3">
            <div className="logoimg flex gap-2 h-14 text-4xl mb-5 text-white">
              <div className="shoes relative w-16">
                <Image alt="AgriNext Logo" src="/LogoWhite.png" fill className="object-cover" />
              </div>
              <div className="agriNext flex items-center font-bold">AgriNext</div>
            </div>
            <div className="logotitle text-white tracking-tighter font-normal mb-10">
              <p>Di AgriNext, kami mengkhususkan diri dalam strategi pemasaran digital inovatif yang mendorong hasil nyata. Tim kami berdedikasi untuk membantu bisnis pertanian tumbuh dan sukses di dunia online.</p>
            </div>
            <div className="linkimg flex gap-4 ml-1">
              <SocialIcon Icon={Facebook} />
              <SocialIcon Icon={Instagram} />
              <SocialIcon Icon={Linkedin} />
              <SocialIcon Icon={Twitter} />
            </div>
          </div>
          
          {/* Right Side: Footer Links */}
          <div className="side2 flex text-xs gap-4 md:flex-row  md:text-base md:gap-20">
            <FooterLinks title="Home" links={['Solusi Kami !', 'Web Design', 'Blog',]} />
            <FooterLinks title="Company" links={['Tentang Kami', 'Layanan','FAQs', 'AgriBot']} />
            <FooterLinks title="Contact" links={['+62 822 3368 1022', '+62 877-9276-4859', 'Kontak Kami']} />
          </div>
        </div>
        
        {/* Bottom Line and Copyright */}
        <div className="border-t-[0.5px] border-[#1D4C30] mt-10 mb-5"></div>
        <p className="text-white text-center text-sm">Copyright © 2024 AgriNext. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
