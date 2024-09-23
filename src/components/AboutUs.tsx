import React from 'react';
import MaxWidthWrapper from './MaxWidthWrapper';
import Tagline from './Tagline';

const AboutUs = () => {
  return (
    <>
      <div id="tentang-kami" />
      <MaxWidthWrapper classname="mt-12 md:mt-20 tentang-kami">
        <Tagline title="Tentang Kami" />
        <div className=" grid items-center md:grid-cols-2 justify-between mt-4 gap-y-2">
          <h1 className="text-2xl md:text-4xl font-semibold text-primary col-span-1">Menuju Masa Depan yang Berkelanjutan dan Berlimpah</h1>
          <p className="text-second tracking-tight col-span-1 w-[90%] md:w-fit">
            Kami berkomitmen untuk mendukung petani dan bisnis pertanian dengan alat dan pengetahuan yang mereka butuhkan untuk berkembang dengan fokus pada praktik berkelanjutan, teknologi canggih, dan pemahaman mendalam tentang industri
            ini, kami membantu Anda tumbuh lebih besar dengan dampak yang lebih kecil terhadap lingkungan.
          </p>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default AboutUs;
