import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";


type InputProps = {
  type?: string;
  placeholder: string;
};

type FAQBoxProps = {
  title: string;
  text: string;
};

const KontakKamiPage: React.FC = () => {
  return (
    <MaxWidthWrapper classname="mt-20">
      {/* Section: Contact Us */}
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-4xl text-primary font-bold mb-3">Contact Me</h2>
        <div className="w-10 border border-primary mb-3"></div>
        <p className="w-[30rem] text-primary tracking-tight text-center mt-2">
          Untuk informasi lebih lanjut, kolaborasi, atau pertanyaan seputar inovasi pertanian kami, jangan ragu untuk menghubungi kami. Kami siap mendukung pertumbuhan bersama untuk masa depan yang lebih hijau dan berkelanjutan.
        </p>
      </div>

      {/* Form Section */}
      <div className="flex justify-center mt-12 mb-32">
        <div className="flex justify-between w-[50rem] shadow-2xl">
          {/* Left Side - Form */}
          <div className="p-8 w-[30rem]">
            <h2 className="text-2xl tracking-tight font-bold text-primary">Send Us Message</h2>
            <div className="flex flex-col mt-6 gap-4 w-auto mb-4">
              <Input placeholder="First Name" />
              <Input placeholder="Last Name" />
              <Input type="email" placeholder="Email Address" />
              <textarea
                placeholder="Message"
                className="border-2 p-1 h-20 rounded-sm shadow-xl border-primary focus:outline-none focus:border-second"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button className="rounded-full py-2 w-36 items-center border shadow-xl font-medium text-white bg-primary hover:bg-second transition-all">
                SEND MESSAGE
              </button>
            </div>
          </div>

          {/* GambarForm - Image & Text */}
          <div className="relative w-80 h-full">
            <Image alt="image" src="/Form.jpg" fill className="object-cover" />
            <div className="relative py-12 px-5 h-full bg-black bg-opacity-15">
              <h2 className="text-3xl font-bold mb-4 text-white">Formulir Kami</h2>
              <p className="text-white text-sm mb-16">
                Isi formulir di bawah ini untuk terhubung dengan kami. Kami akan segera menghubungi Anda untuk menjawab kebutuhan dan pertanyaan Anda.
              </p>
              <p className="text-white text-sm">
                Terima kasih telah mengunjungi situs kami. Kami menghargai waktu dan perhatian Anda. Silakan lengkapi formulir ini, dan tim kami akan segera menghubungi Anda dengan solusi terbaik untuk kebutuhan Anda.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="flex flex-col items-center h-[40rem]">
        <h2 className="font-bold text-4xl mb-5 text-primary">Frequently Asked Questions</h2>
        <div className="w-14 border mb-6 border-primary"></div>
        <p className="tracking-tight w-96 text-center text-primary mb-20">
          Pertanyaan seputar Tentang Agriculture yang akhir-akhir ini kami bisa membantu menjawab!
        </p>

        <div className="flex gap-14 w-full h-full p-7">
          <FAQBox title="Mengapa Memilih AgriNext?" text="Ya, AgriNext selalu berada di garis depan perkembangan teknologi dan inovasi pertanian. Kami secara konsisten mengikuti tren terbaru, riset, dan praktik terbaik di industri ini untuk memastikan solusi yang kami tawarkan selalu relevan dan efektif. Dengan pendekatan yang berorientasi masa depan, kami membantu Anda mengadopsi teknologi terkini yang mendukung pertumbuhan optimal dan keberlanjutan." />
          <FAQBox title="Apakah AgriNext membantu?" text="Tentu saja. AgriNext hadir untuk memberikan solusi praktis dan inovatif bagi setiap tantangan yang Anda hadapi dalam sektor pertanian. Kami berfokus pada teknologi, efisiensi, dan keberlanjutan untuk memastikan Anda mendapatkan hasil terbaik, baik dalam skala kecil maupun besar. Dengan dukungan tim ahli dan pendekatan yang ramah lingkungan, kami berkomitmen untuk mendampingi perjalanan pertanian Anda menuju kesuksesan." />
          <FAQBox title="AgriNext UpToDate?" text="AgriNext berdedikasi untuk menghadirkan solusi pertanian yang inovatif dan berkelanjutan. Kami memahami bahwa masa depan pertanian bergantung pada teknologi, efisiensi, dan kelestarian lingkungan. Dengan pengalaman mendalam dan pendekatan kolaboratif, kami memastikan bahwa setiap langkah yang kami ambil dirancang untuk mendukung pertumbuhan yang berkelanjutan, meningkatkan hasil, dan menjaga keseimbangan alam." />
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

const Input: React.FC<InputProps> = ({ type = "text", placeholder }) => (
  <input
    type={type}
    placeholder={placeholder}
    className="p-1 w-72 border-2 border-primary rounded-sm shadow-xl focus:outline-none focus:border-second"
  />
);

const FAQBox: React.FC<FAQBoxProps> = ({ title, text }) => (
  <div className="flex flex-col items-center w-[20rem]">
    <h2 className="font-bold text-lg mb-2">{title}</h2>
    <div className="w-8 border border-primary"></div>
    <p className="mt-2 p-3 tracking-tighter text-primary text-wrap ml-5">{text}</p>
  </div>
);

export default KontakKamiPage;
