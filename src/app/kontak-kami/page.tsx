"use client";

import React, { useState, ReactNode } from 'react';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { MessageCircle, Send, Twitter, PhoneOutgoing, MapPin, Smile, ChevronUp, ChevronDown, StretchHorizontal, Bot, Rocket } from 'lucide-react';

const FormInput = ({ label, type, placeholder, width, isTextArea = false }: { label: string; type: string; placeholder: string; isTextArea?: boolean; width: string }) => {
  return (
    <div className="p-4">
      <h2 className='font-semibold text-gray-800 mb-1 tracking-tight'>{label}</h2>
      {isTextArea ? (
        <textarea
          placeholder={placeholder}
          className='rounded-lg py-2 pl-3 border border-gray-500 px-4 w-full pb-16'
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className={`rounded-lg py-2 pl-3 border border-gray-500 px-4 ${width}`}
        />
      )}
    </div>
  );
};

const FaqsTemplate = ({ icon, title, answer }: { icon: ReactNode; title: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faqscontent md:px-64 w-full flex flex-col mb-10 p-4">
      <div className="flex gap-4 w-full mb-2">
        <div className="flex items-center justify-center border border-gray-400 p-2 h-12 w-12 rounded-lg">{icon}</div>
        <p className='font-bold flex text-lg items-center'>{title}</p>
        <button className='ml-auto content-center' onClick={toggleAnswer}>
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </button>
      </div>
      {isOpen && (
        <div className="text flex justify-start ml-16 transition-all">
          <p className='text-sm text-gray-800'>{answer}</p>
        </div>
      )}
    </div>
  );
};

const UnderlineTemplate = ({ icon, text }: { icon: ReactNode; text: string }) => {
  return (
    <div className="flex mb-3">
      {icon}
      <p className='ml-2 font-bold underline tracking-tight'>{text}</p>
    </div>
  );
}

const KontakKamiPage = () => {
  return (
    <MaxWidthWrapper classname='mt-28 mb-64'>
      <div className="container mb-28 flex flex-col">
        <div className="flex flex-col items-center mb-20">
          <h2 className='text-6xl mb-5 font-bold text-center'>Hubungi Kami</h2>
          <p className='text-lg tracking-tight text-center'>Ada pertanyaan tentang cara mengembangkan bisnis Anda di platform kami? Kami siap membantu Anda,</p>
          <p className='text-lg tracking-tight text-center'>Bicara dengan tim ramah kami 24/7, dan bergabunglah dalam waktu kurang dari 5 menit.</p>
        </div>
        <div className="flex flex-col lg:flex-row mx-4 lg:mx-12 justify-between">
          <div className="w-full lg:w-[37rem] py-3 px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-2">
              <FormInput label='First Name' type='text' placeholder='First Name' width='w-full lg:w-[14rem]' />
              <FormInput label='Last Name' type='text' placeholder='Last Name' width='w-full lg:w-[14.5rem]' />
            </div>
            <FormInput label='Email' type='email' placeholder='you@example.com' width='w-full' />
            <FormInput label='Phone Number' type='tel' placeholder='+1 (555) 000-0000' width='w-full' />
            <FormInput label='Message' type='text' placeholder='Message' width='w-full' isTextArea={true} />
            <div className="px-4">
              <button className='bg-gray-950 mb-8 rounded-xl border border-gray-300 mt-6 w-full py-3 text-white'>Send Message</button>
            </div>
          </div>
          <div className="side2 w-full lg:w-[25rem] py-6">
            <div className="top mb-8">
              <h2 className='font-semibold text-xl mb-2'>Chat with Us</h2>
              <p className='text-gray-700 mb-6'>Hubungi tim kami melalui live chat.</p>
              <UnderlineTemplate icon={<MessageCircle />} text='Start a live chat' />
              <UnderlineTemplate icon={<Send />} text='Shoot us an email' />
              <UnderlineTemplate icon={<Twitter />} text='Message us on Twitter' />
            </div>
            <div className="center mb-8">
              <h2 className='font-semibold text-xl mb-2'>Telepon Kami</h2>
              <p className='text-gray-700 mb-6'>Hubungi tim kami Pada pukul 08:00 - 17:00.</p>
              <UnderlineTemplate icon={<PhoneOutgoing />} text='+62 123-1234-567' />
            </div>
            <h2 className='font-semibold text-xl mb-2'>Kunjungi Kami</h2>
            <p className='text-gray-700 mb-6'>Datang langsung ke pusat kami di Melbourne.</p>
            <UnderlineTemplate icon={<MapPin />} text='100 Smith Street, Collingwood VIC 3066' />
          </div>
        </div>
      </div>

      <div className="flex items-center flex-col">
        <h2 className='text-4xl text-center font-bold tracking-tight mb-16'>Yang mungkin Anda tanyakan!</h2>
        <FaqsTemplate icon={<Smile />} title='Apa itu teknologi web pertanian?' answer='Teknologi web pertanian adalah penggunaan aplikasi dan platform berbasis web untuk meningkatkan efisiensi, produktivitas, dan keberlanjutan dalam sektor pertanian.' />
        <FaqsTemplate icon={<StretchHorizontal />} title='Siapa yang dapat menggunakan platform ini?' answer='Platform ini dirancang untuk petani, penyuluh, dan pemangku kepentingan lainnya dalam industri pertanian yang ingin memanfaatkan teknologi untuk meningkatkan hasil dan manajemen sumber daya.' />
        <FaqsTemplate icon={<Rocket />} title='Fitur apa saja yang tersedia?' answer='Fitur utama meliputi pemantauan tanaman secara real-time, analisis data cuaca, manajemen irigasi, dan akses ke informasi pasar.' />
        <FaqsTemplate icon={<Bot />} title='Bagaimana platform ini membantu petani?' answer='Dengan memberikan data dan analisis yang tepat, petani dapat membuat keputusan yang lebih baik mengenai waktu tanam, penggunaan pupuk, dan pengelolaan hama.' />
      </div>
    </MaxWidthWrapper>
  );
}

export default KontakKamiPage;
