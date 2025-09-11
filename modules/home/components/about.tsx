import { Button } from '@/components/ui/button';
import { CheckCircle2, Dot } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const list = [
  {
    desc: 'Regulasi resmi di bawah pengawasan OJK'
  },
  {
    desc: 'Sistem perdagangan yang transparan dan terintegrasi'
  },
  {
    desc: 'Perlindungan data berstandar ISO/IEC 27001:2022'
  }
];

const AboutSection = () => {
  return (
    <section className="relative w-full min-h-screen lg:py-24">
      {/* Background */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover -left-1/2 top-12 z-10"
        style={{
          backgroundImage: "url('/background/tentang.svg')",
          opacity: 0.5
        }}
      ></div>

      <div
        className="absolute -left-40 -top-32 w-[330px] h-[330px] rounded-full z-10"
        style={{
          backgroundColor: '#B2CCFF', // biru transparan
          boxShadow: '0 0 200px 200px #B2CCFF', // glow
          opacity: 0.3
        }}
      ></div>

      <div className="container-custom flex flex-col md:flex-row gap-12 items-center relative z-10 mx-4 lg:mx-0">
        <div className="flex-1 lg:hidden">
          <Image src="/images/about.png" alt="about" width={587} height={600} />
        </div>
        <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left lg:justify-start gap-6 flex-1">
          <div className="bg-white px-3 py-1 text-sm rounded-full flex items-center gap-1 w-fit shadow-sm">
            <Dot size={16} strokeWidth={6} absoluteStrokeWidth /> Tentang Kami
          </div>

          <h1 className="text-3xl font-semibold">
            Hadir untuk Regulasi, Transparansi, <br /> dan Keamanan Kripto
          </h1>

          <p className="text-lg max-w-[562px]">
            IGX adalah penyelenggara sistem perdagangan dan pelaporan aset kripto di Indonesia. Kami berperan memastikan industri kripto
            berjalan sehat dan terpercaya melalui pengawasan, standar keamanan, serta infrastruktur yang terintegrasi.
          </p>

          <div className="flex flex-col gap-2 text-left">
            <p>Kami hadir dengan:</p>
            <ul className="flex flex-col gap-2">
              {list.map((item, index) => (
                <li key={index} className="text-sm max-w-[562px] flex gap-2 items-start">
                  <CheckCircle2 size={20} className="text-green-600 mt-1" /> {item.desc}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <Button variant="outline" className="bg-white text-black border-black hover:bg-background px-5 hover:text-white">
              Selengkapnya
            </Button>
          </div>
        </div>

        <div className="hidden lg:block">
          <Image src="/images/about.png" alt="about" width={587} height={600} />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
