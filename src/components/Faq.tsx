'use client';

import React, { useState } from 'react';
import MaxWidthWrapper from './MaxWidthWrapper';
import Tagline from './Tagline';
import { Plus, Minus } from 'lucide-react';

interface FaqInterface {
  id: number;
  question: string;
  answer: string;
}

const faq = [
  {
    id: 1,
    question: 'Apakah AgriNext Weather Drone bisa digunakan di semua kondisi cuaca?',
    answer: 'Ya, drone kami dirancang untuk tahan terhadap berbagai kondisi cuaca, termasuk hujan dan angin kencang, sehingga tetap bisa memantau cuaca dan lahan dengan akurat.',
  },
  {
    id: 2,
    question: 'Apakah data dari sensor AgriNext dapat diakses secara jarak jauh?',
    answer: 'Tentu saja! Semua data yang dikumpulkan oleh sensor kami dikirim ke cloud dan dapat diakses kapan saja melalui aplikasi AgriNext, dari mana pun Anda berada.',
  },
  {
    id: 3,
    question: 'Bagaimana cara menginstal perangkat AgriNext di lahan pertanian saya?',
    answer: 'Proses instalasi sangat mudah. Kami menyediakan panduan langkah demi langkah dalam aplikasi, dan tim kami siap membantu jika diperlukan.',
  },
  {
    id: 4,
    question: 'Apakah saya perlu koneksi internet untuk menggunakan produk AgriNext?',
    answer:
      'Sebagian besar perangkat AgriNext membutuhkan koneksi internet untuk mengirim data ke cloud dan memungkinkan kontrol jarak jauh, namun beberapa perangkat dapat berfungsi secara offline dan sinkronisasi dilakukan saat terhubung kembali..',
  },
  {
    id: 5,
    question: 'Apakah saya perlu keahlian khusus untuk menggunakan teknologi AgriNext?',
    answer: 'Tidak, produk kami dirancang agar mudah digunakan. Bahkan petani yang baru mengenal teknologi dapat dengan cepat memahami cara kerjanya melalui pelatihan yang kami sediakan.',
  },
];

const Faq = () => {
  const [openFaqId, setOpenFaqId] = useState<number | null>();

  const toggleFaq = (id: number) => {
    if (openFaqId === id) {
      setOpenFaqId(null);
    } else {
      setOpenFaqId(id);
    }
  };

  return (
    <MaxWidthWrapper classname="mb-12">
      <Tagline title="Frequently Asked Questions" />
      <div className="flex flex-col space-y-4 mt-2 md:mt-8">
        {faq.map((faq: FaqInterface) => (
          <div key={faq.id} className="py-4 px-3">
            <button className="flex items-center justify-between text-xl md:text-3xl text-primary text-left w-full focus:outline-none" onClick={() => toggleFaq(faq.id)}>
              <p className="font-semibold text-lg md:text-3xl w-5/6">{faq.question}</p>
              <div className={`bg-gray-200 p-4 rounded-full transition-all duration-300 ease-in-out transform ${openFaqId === faq.id ? 'rotate-180' : ''}`}>
                {openFaqId === faq.id ? <Minus className="w-4 h-4 text-black" /> : <Plus className="w-4 h-4 text-black" />}
              </div>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaqId === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
              {openFaqId === faq.id && (
                <div className="py-2 my-3 border-primary">
                  <p className="ml-4 w-3/4 text-gray-500 tracking-tight text-base md:text-lg">{faq.answer}</p>
                </div>
              )}
            </div>
            <div className="bg-gray-300 w-full h-[1px] md:h-[2px] mt-7" aria-hidden="true" />
          </div>
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default Faq;
