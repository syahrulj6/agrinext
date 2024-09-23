import MaxWidthWrapper from './MaxWidthWrapper';
import Tagline from './Tagline';
import { Cpu, MessagesSquare, SquareActivity, HeartPulse, ChartNoAxesCombined } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'AgriNext Soil Sensor',
    subtitle: 'Mengukur kelembapan dan nutrisi tanah secara real-time untuk meningkatkan efisiensi irigasi',
    icon: <Cpu className="w-5 h-5 text-white" />,
  },

  {
    id: 2,
    title: 'AgriNext Crop Health Monitor',
    subtitle: 'Menggunakan teknologi drone untuk memantau kesehatan tanaman dan mendeteksi penyakit lebih awal',
    icon: <HeartPulse className="w-5 h-5 text-white" />,
  },
  {
    id: 3,
    title: 'Analisis Data Pertanian',
    subtitle: 'Dapatkan wawasan mendalam dari data pertanian Anda untuk meningkatkan hasil panen dan mengurangi biaya',
    icon: <ChartNoAxesCombined className="w-5 h-5 text-white" />,
  },
  {
    id: 4,
    title: 'Pelatihan dan Edukasi',
    subtitle: 'ami menyediakan pelatihan mendalam untuk membantu petani mengadopsi teknologi cerdas, dari sensor tanah hingga manajemen data berbasis cloud',
    icon: <SquareActivity className="w-5 h-5 text-white" />,
  },
  {
    id: 5,
    title: 'Konsultasi Pertanian',
    subtitle: 'Butuh solusi teknologi untuk pertanian Anda? Tim ahli kami siap memberikan konsultasi yang disesuaikan dengan kebutuhan lahan dan tanaman Anda',
    icon: <MessagesSquare className="w-5 h-5 text-white" />,
  },
];

const Services = () => {
  return (
    <MaxWidthWrapper classname="mt-14 md:mt-20 mb-12">
      <div id="layanan" />
      <Tagline title="Layanan yang kami sediakan" />
      <div className="grid grid-cols-3 gap-4 pt-12   ">
        {services.slice(0, 3).map((service) => (
          <div key={service.id} className="flex flex-col items-center bg-[#e1f7e8] py-10 px-8 rounded-xl ">
            <div className="bg-primary p-3 rounded-full">{service.icon}</div>
            <p className="text-primary font-semibold text-sm md:text-base text-center">{service.title}</p>
            <span className="text-gray-700 text-center w-5/6 hidden md:block">{service.subtitle}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-center -mt-2 pt-6  pb-12">
        <div className="grid grid-cols-2 gap-4">
          {services.slice(3).map((service) => (
            <div key={service.id} className="flex flex-col items-center bg-[#e1f7e8] py-10 px-8 rounded-xl ">
              <div className="bg-primary p-3 rounded-full">{service.icon}</div>
              <p className="text-primary font-semibold text-sm md:text-base text-center">{service.title}</p>
              <span className="text-gray-700  text-center  w-5/6 hidden md:block">{service.subtitle}</span>
            </div>
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Services;
