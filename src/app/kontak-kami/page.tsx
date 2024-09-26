import React from 'react'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { MessageCircle, Send, Twitter, PhoneOutgoing, MapPin } from 'lucide-react';
import { ReactNode } from 'react';

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

const UnderlineTemplate = ({ icon, text }: { icon: ReactNode; text: string }) => {
  return (
    <div className="flex mb-3">
      {icon}
      <p className='ml-2 font-bold underline tracking-tight'>{text}</p>
    </div>
  )
}

const KontakKamiPage = () => {
  return (
    <MaxWidthWrapper classname='mt-28 mb-52'>
      <div className="container mb-28 flex flex-col">
        <div className="flex flex-col items-center mb-20">
          <h2 className='text-6xl mb-5 font-bold text-center'>Hubungi Kami</h2>
          <p className='text-lg tracking-tight text-center'>Ada pertanyaan tentang cara mengembangkan bisnis Anda di platform kami? Kami siap membantu Anda,</p>
          <p className='text-lg tracking-tight text-center'>Bicara dengan tim ramah kami 24/7, dan bergabunglah dalam waktu kurang dari 5 menit.</p>
        </div>
        <div className="container2 flex flex-col lg:flex-row mx-4 lg:mx-12 justify-between">
          <div className="w-full lg:w-[37rem] py-3 px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-2">
              <FormInput label='First Name' type='text' placeholder='First Name' width='w-full lg:w-[14rem]' />
              <FormInput label='Last Name' type='text' placeholder='Last Name' width='w-full lg:w-[14.5rem]' />
            </div>
            <FormInput label='Email' type='text' placeholder='you@example.com' width='w-full' />
            <FormInput label='Phone Number' type='number' placeholder='+1 (555) 000-0000' width='w-full' />
            <FormInput label='Message' type='text' placeholder='Message' width='w-full' isTextArea={true} />
            <div className="px-4">
              <button className='bg-gray-950 mb-8 rounded-xl border border-gray-300 mt-6 w-full py-3 text-white'>Send Message</button>
            </div>
          </div>
          <div className="side2 w-full lg:w-[25rem] py-6">
            <div className="top mb-8">
              <h2 className='font-semibold text-xl mb-2'>Chat with Us</h2>
              <p className='text-gray-700 mb-6'>Hubung dengan tim kami melalui live chat.</p>
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
            <p className='text-gray-700 mb-6'>Datang langsung pusat kami di Melbourne.</p>
            <UnderlineTemplate icon={<MapPin />} text='100 Smith Street, Collingwood VIC 3066' />
          </div>
        </div>
      </div>

      {/* Faqs */}
      <div className="container2 flex items-center flex-col">
        <h2 className='text-4xl text-center font-bold tracking-tight mb-5'>Frequently asked questions</h2>
        <div className="garis w-[5rem] h-px bg-black mb-16"></div>
        <div className="content flex w-[35rem] bg-yellow-600">
          <div className="relative">
            <h2>DODOL KANEBO</h2>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}

export default KontakKamiPage
