'use client';

import React, { useState } from 'react';
import MaxWidthWrapper from './MaxWidthWrapper';
import { Bot } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  answer: string;
}

const questions: Question[] = [
  { id: 1, question: 'Apa itu AgriNext?', answer: 'AgriNext adalah platform teknologi pertanian yang menyediakan solusi inovatif untuk meningkatkan hasil pertanian secara berkelanjutan.' },
  { id: 2, question: 'Bagaimana cara kerja sensor tanah?', answer: 'Sensor tanah kami bekerja dengan memantau kelembapan, suhu, dan kondisi tanah secara real-time, memberikan data akurat untuk keputusan yang lebih baik.' },
  { id: 3, question: 'Apa manfaat irigasi otomatis?', answer: 'Irigasi otomatis berbasis AI dapat menghemat air hingga 30% dan memastikan tanaman mendapatkan pasokan air yang optimal.' },
  {
    id: 4,
    question: 'Bagaimana AgriNext mendukung pertanian berkelanjutan?',
    answer: 'Kami menyediakan teknologi yang membantu petani beralih ke metode organik dan ramah lingkungan, mengurangi penggunaan bahan kimia, dan melestarikan sumber daya.',
  },
  { id: 5, question: 'Apakah saya bisa mengontrol perangkat AgriNext dari jarak jauh?', answer: 'Ya, perangkat AgriNext dapat dikontrol melalui aplikasi mobile, memungkinkan Anda untuk memantau dan mengelola pertanian dari mana saja.' },
  { id: 6, question: 'Apa itu AgriNext Weather Drone?', answer: 'AgriNext Weather Drone adalah drone yang digunakan untuk memantau cuaca dan kondisi lahan secara real-time, membantu prediksi hasil panen lebih akurat.' },
  { id: 7, question: 'Apakah AgriNext menyediakan pelatihan?', answer: 'Ya, kami menawarkan pelatihan mendalam bagi petani untuk memahami dan mengadopsi teknologi pertanian cerdas.' },
  { id: 8, question: 'Apa yang dibutuhkan untuk mulai menggunakan produk AgriNext?', answer: 'Anda hanya memerlukan perangkat dasar seperti smartphone dan aplikasi AgriNext untuk mulai menggunakan solusi kami.' },
  { id: 9, question: 'Bagaimana saya bisa berkolaborasi dengan AgriNext?', answer: 'Anda bisa menghubungi kami melalui halaman kontak untuk informasi lebih lanjut tentang kemitraan dan kolaborasi.' },
  { id: 10, question: 'Apakah teknologi AgriNext mendukung pertanian organik?', answer: 'Ya, teknologi kami mendukung metode pertanian organik dengan mengurangi ketergantungan pada pestisida dan pupuk kimia.' },
  { id: 11, question: 'Apakah AgriNext menawarkan solusi pengelolaan air?', answer: 'Ya, sistem irigasi otomatis kami membantu petani mengelola air dengan lebih efisien dan mengurangi pemborosan air.' },
  { id: 12, question: 'Apakah AgriNext dapat digunakan untuk pertanian skala kecil?', answer: 'Tentu, produk kami dirancang untuk mendukung petani dari skala kecil hingga besar, tergantung kebutuhan.' },
  { id: 13, question: 'Berapa lama umur sensor tanah AgriNext?', answer: 'Sensor tanah kami dirancang untuk bertahan selama beberapa tahun dengan perawatan minimal dan kalibrasi berkala.' },
  { id: 14, question: 'Apakah saya bisa mendapatkan demo produk sebelum membeli?', answer: 'Ya, kami menawarkan demo produk agar Anda bisa memahami cara kerja teknologi kami sebelum memutuskan untuk membeli.' },
  {
    id: 15,
    question: 'Bagaimana AgriNext menangani perubahan iklim dalam pertanian?',
    answer: 'Kami menyediakan teknologi yang membantu petani beradaptasi dengan perubahan iklim melalui prediksi cuaca yang lebih akurat dan pengelolaan sumber daya yang efisien.',
  },
  { id: 16, question: 'Apakah AgriNext memiliki dukungan pelanggan?', answer: 'Ya, kami memiliki tim dukungan pelanggan yang siap membantu Anda dalam mengoperasikan perangkat dan menjawab pertanyaan Anda.' },
];

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<{ sender: 'user' | 'bot'; text: string }[]>([]);
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const handleQuestionClick = (question: string, answer: string) => {
    if (isTyping) return;
    setMessages((prev) => [...prev, { sender: 'user', text: question }]);

    setIsTyping(true);
    typeWriterEffect(answer);
  };

  const typeWriterEffect = (text: string, index = 0) => {
    if (index < text.length) {
      setTimeout(() => {
        setMessages((prev) => {
          const lastMessage = prev[prev.length - 1];
          if (lastMessage.sender === 'bot') {
            return [...prev.slice(0, -1), { ...lastMessage, text: lastMessage.text + text.charAt(index) }];
          }
          return [...prev, { sender: 'bot', text: text.charAt(index) }];
        });
        typeWriterEffect(text, index + 1);
      }, 20);
    } else {
      setIsTyping(false);
    }
  };

  return (
    <MaxWidthWrapper classname="mt-8  py-8 md:py-20 border rounded-lg md:mb-32 ">
      <div className="flex gap-2 items-center justify-center md:justify-start">
        <p className="text-2xl font-semibold text-primary">AgriBot</p>
        <div className="bg-softPrimary p-2 rounded-full">
          <Bot className="h-5 w-5 text-primary" />
        </div>
      </div>

      <div className=" space-y-4 mb-4 mt-6 md:mt-8">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`rounded-lg p-2 flex items-center max-w-xs ${msg.sender === 'user' ? 'bg-gray-300 text-black' : 'bg-[#e5f7e1] text-black'}`}>
              {msg.sender === 'bot' && (
                <span className="font-bold mr-2 self-start mt-2">
                  <Bot className="w-4 h-4" />
                </span>
              )}
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 items-center justify-center mt-6 md:mt-8">
        {questions.map(({ id, question }) => (
          <button
            key={id}
            onClick={() => handleQuestionClick(question, questions.find((q) => q.id === id)?.answer || '')}
            className={`bg-gray-300 w-fit px-4 text-black text-center md:text-left  py-2 rounded-lg   ${isTyping ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isTyping}
          >
            {question}
          </button>
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default Chatbot;
