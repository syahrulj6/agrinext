'use client';

import React, { useState } from 'react';
import MaxWidthWrapper from './MaxWidthWrapper';
import { MoveDownRight, MoveUpRight } from 'lucide-react';

interface SolutionInterface {
  id: number;
  title: string;
  description: string;
}

const solutions = [
  {
    id: 1,
    title: 'Menerapkan Praktik Ramah Lingkungan',
    description: 'Mengadopsi metode berkelanjutan yang hanya meningkatkan produktivitas namun juga meminimalkan dampak lingkungan, memastikan kesehatan jangka panjang lahan Anda dan ekosistem sekitarnya.',
  },
  {
    id: 2,
    title: 'Manfaatkan Teknologi Terdepan',
    description:
      'Manfaatkan teknologi terbaru untuk meningkatkan efisiensi, akurasi, dan kecepatan dalam bisnis. Teknologi canggih, termasuk alat dan sistem mutakhir, mengoptimalkan proses, mendukung keputusan berbasis data, dan meningkatkan produktivitas. Dengan teknologi terdepan, Anda tetap unggul dan adaptif terhadap perubahan industri.',
  },
  {
    id: 3,
    title: 'Optimalkan Penggunaan Air',
    description:
      'Dengan menerapkan teknologi hemat air, seperti irigasi cerdas, daur ulang, dan pemantauan otomatis, Anda dapat memaksimalkan penggunaan air tanpa mengurangi hasil. Pendekatan ini mengurangi pemborosan, menjaga keberlanjutan, dan memastikan pasokan air stabil untuk praktik pertanian atau industri ramah lingkungan.',
  },
];

const Solutions = () => {
  const [openSolutionId, setOpenSolutionId] = useState<number | null>(1);

  const toggleSolution = (id: number) => {
    if (openSolutionId === id) {
      setOpenSolutionId(null);
    } else {
      setOpenSolutionId(id);
    }
  };

  return (
    <MaxWidthWrapper>
      <div id="solusi" />
      <div className="flex flex-col space-y-4 mt-12 md:mt-20">
        {solutions.map((solution: SolutionInterface) => (
          <div key={solution.id} className={`py-4 px-3 rounded-xl transition-all duration-300 ease-in-out ${openSolutionId === solution.id ? 'bg-[#e1f7e8]' : 'bg-gray-100'}`}>
            <button className="flex items-center justify-between text-xl md:text-3xl text-primary text-left w-full focus:outline-none" onClick={() => toggleSolution(solution.id)}>
              <p>{solution.title}</p>
              {openSolutionId === solution.id ? (
                <div className="bg-primary p-2 rounded-full transition-all duration-300 ease-in-out">
                  <MoveUpRight className="text-white h-5 w-5 transition-transform transform rotate-45" />
                </div>
              ) : (
                <div className="transition-all duration-300 ease-in-out">
                  <MoveDownRight className="w-5 h-5 text-primary transition-transform transform" />
                </div>
              )}
            </button>
            {openSolutionId === solution.id && (
              <div className="py-2 border-l-4 my-3 border-primary transition-all duration-300 ease-in-out">
                <p className="ml-4 w-3/4 text-gray-500 tracking-tight">{solution.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default Solutions;
