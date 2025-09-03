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
    <section className="w-full min-h-screen  py-24">
      <div className="container mx-auto flex flex-col md:flex-row gap-12 items-center">
        <div className="flex flex-col justify-start gap-6 flex-1">
          <div className="bg-white px-3 py-1 text-sm rounded-full flex items-center gap-1 w-fit">
            <Dot size={16} strokeWidth={6} absoluteStrokeWidth /> Tentang Kami
          </div>
          <h1 className="text-3xl font-semibold">
            Hadir untuk Regulasi, Transparansi, <br /> dan Keamanan Kripto
          </h1>

          <p className="text-lg max-w-[562px]">
            IGX adalah penyelenggara sistem perdagangan dan pelaporan aset kripto di Indonesia. Kami berperan memastikan industri kripto
            berjalan sehat dan terpercaya melalui pengawasan, standar keamanan, serta infrastruktur yang terintegrasi.
          </p>
          <div className="flex flex-col gap-2">
            <p>Kami hadir dengan:</p>
            <ul className="flex flex-col gap-2">
              {list.map((item, index) => (
                <li key={index} className="text-sm max-w-[562px] flex gap-2">
                  <CheckCircle2 size={20} /> {item.desc}
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

        <div className="flex-1">
          <Image src="/images/about.png" alt="about" width={587} height={600} />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
