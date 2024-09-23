import React from 'react';
import MaxWidthWrapper from './MaxWidthWrapper';

const Footer = () => {
  return (
    <div className="flex justify-center bottom-0 py-5 bg-primary w-full">
      <MaxWidthWrapper classname=''>
        <div className="content flex flex-col">
          <div className="p-10 flex justify-center bg-white rounded-2xl mb-16">
            <div className="title text-center">
              <h2 className='text-4xl tracking-tight font-semibold mb-2'>Ready to launch your</h2>
              <h2 className='text-4xl tracking-tight font-semibold mb-6'>Digital Marketing Project?</h2>
              <p className='tracking-tighter font-normal'>Ready to launch your digital marketing project? Let us craft</p>
              <p className='tracking-tighter font-normal mb-5'>strategies that drive results ad growth.</p>
              <div className="button">
                <button className='bg-primary py-3 px-12 rounded-md text-white shadow-second shadow-2xl hover:bg-second transition-all'>Let's Talk <span></span></button>
              </div>
            </div>
          </div>
          <div className="bottomFooter flex justify-between mx-6 ">
            <div className="side1 flex flex-col w-96 ">
              <div className="logoimg text-4xl mb-6 text-white">
                <h2>LOGO</h2>
              </div>
              <div className="logotitle tracking-tighter font-normal mb-14 text-white">
                <p>At AgriNext, we specialize in innovative digital marketing</p>
                <p>strategies that drive results, Our team is dedicated to</p>
                <p>helping business grow and succeed online.</p>
              </div>
              <div className="linkimg ">
                <p className='text-white'>F IG IN X</p>
              </div>
            </div>
            <div className="side2 gap-20 flex w-[32rem]">
              <div className="home flex flex-col gap-4  text-white">
                <h2 className='text-xl font-semibold mb-4'>Home</h2>
                <a className='font-normal'>How It Works?</a>
                <a className='font-normal'>Web Design</a>
                <a className='font-normal'>All Project</a>
                <a className='font-normal'>Contact Us</a>
              </div>
              <div className="home flex flex-col gap-4  text-white">
                <h2 className='text-xl font-semibold mb-4'>Company</h2>
                <a className='font-normal'>About Us</a>
                <a className='font-normal'>Reviews</a>
                <a className='font-normal'>Our Stories</a>
                <a className='font-normal'>FAQs</a>
              </div>
              <div className="home flex flex-col gap-4  text-white">
                <h2 className='text-xl font-semibold mb-4'>Contact</h2>
                <a className='font-normal'>+99 458 555 4785</a>
                <a className='font-normal'>Info.saspik.com</a>
                <a className='font-normal'>Contact us</a>
                <a className='font-normal'>Terms of Service</a>
              </div>
            </div>
          </div>
          <div className="garis mt-10 border-[0.5px] border-[#1D4C30] mb-5"></div>
          <h2 className='text-white font-normal text-center text-sm'>Copyright © 2024 AgriNext All rights reserved</h2>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Footer;
