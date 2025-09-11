import { motion } from 'framer-motion';
import { Bot, ChartCandlestick, Dot, Settings, ShieldCheck, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import MemberSection from './member';
import DotText from '@/components/dot-text';

export const missionItems = [
  {
    icons: Settings,
    title: 'Mengatur Regulasi',
    description: 'Menetapkan standar dan aturan perdagangan aset kripto di Indonesia.'
  },
  {
    icons: ChartCandlestick,
    title: 'Mengawasi Pasar',
    description: 'Memastikan bursa dan aset kripto mematuhi ketentuan yang berlaku.'
  },
  {
    icons: ShieldCheck,
    title: 'Melindungi Investor',
    description: 'Menjaga keamanan transaksi pengguna dari potensi risiko.'
  },
  {
    icons: TrendingUp,
    title: 'Mendorong Inovasi',
    description: 'Mendukung perkembangan teknologi blockchain yang bertanggung jawab.'
  }
];

const logos = [
  'https://cruip-tutorials.vercel.app/logo-carousel/facebook.svg',
  'https://cruip-tutorials.vercel.app/logo-carousel/disney.svg',
  'https://cruip-tutorials.vercel.app/logo-carousel/airbnb.svg',
  'https://cruip-tutorials.vercel.app/logo-carousel/apple.svg',
  'https://cruip-tutorials.vercel.app/logo-carousel/spark.svg',
  'https://cruip-tutorials.vercel.app/logo-carousel/samsung.svg',
  'https://cruip-tutorials.vercel.app/logo-carousel/quora.svg',
  'https://cruip-tutorials.vercel.app/logo-carousel/sass.svg'
];

const MissionSection = () => {
  return (
    <section className=" w-full min-h-screen  py-24">
      <div className="relative w-full lg:h-[400px] bg-no-repeat bg-center bg-cover" style={{ backgroundImage: 'url(mission-bg.png)' }}>
        <div className=" container-custom flex justify-center items-center  flex-col  px-4 gap-6 ">
          <div className="">
            <DotText text="Tugas Utama Kami" />
          </div>
          <h1 className="text-center text-3xl">
            Kami hadir untuk membangun ekosistem aset kripto yang sehat, <br /> terpercaya, dan berpihak pada kepentingan publik.
          </h1>
          <div className="flex flex-col lg:flex-row gap-12 items-center justify-center mt-10">
            {missionItems.map((item, index) => (
              <div key={index} className=" flex flex-col items-center text-center">
                <item.icons size={36} className="mb-4 text-white px-2 py-2 bg-[#213965] rounded-full" />
                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
          <div
            className="hidden lg:absolute inset-1 bg-no-repeat bg-cover z-10"
            style={{
              backgroundImage: "url('/background/tugas.svg')",
              opacity: 0.6
            }}
          ></div>
          <div
            className="absolute -right-40 bottom-10 w-[100px] h-[100px] rounded-full z-10"
            style={{
              backgroundColor: '#B2CCFF', // biru transparan
              boxShadow: '0 0 200px 200px #B2CCFF', // glow
              opacity: 0.5
            }}
          ></div>
        </div>
      </div>

      <MemberSection />
    </section>
  );
};

export default MissionSection;
