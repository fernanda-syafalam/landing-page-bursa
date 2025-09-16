import DotText from '@/components/dot-text';
import Image from 'next/image';
import React from 'react';

const visiMisi = [
  {
    title: 'Visi',
    desc: 'Menjadi bursa aset digital terdepan yang mendorong transformasi ekonomi digital Indonesia melalui inovasi, keamanan, kepatuhan, dan inklusivitas finansial.'
  },
  {
    title: 'Misi',
    desc: 'Membangun ekosistem perdagangan aset digital yang aman, transparan, dan inklusif melalui inovasi teknologi serta kolaborasi dengan regulator dan masyarakat.'
  }
];

const HeroTentangKami = () => {
  return (
    <section className="w-full min-h-screen">
      <div className="relative container-custom mt-40 px-4 lg:px-0 flex flex-col gap-4 justify-center items-center text-center">
        <div
          className="absolute -left-40 -top-32 w-[330px] h-[330px] rounded-full z-10"
          style={{
            backgroundColor: '#B2CCFF', // biru transparan
            boxShadow: '0 0 200px 200px #B2CCFF', // glow
            opacity: 0.3
          }}
        ></div>
        <DotText text="Tentang Kami" />
        <h1 className="text-3xl lg:text-5xl font-semibold lg:font-bold ">
          Hadir untuk Regulasi, Transparansi, <br /> dan Keamanan Kripto
        </h1>
        <p className="text-muted-foreground text-lg max-w-[750px]">
          IGX adalah penyelenggara sistem perdagangan dan pelaporan aset kripto di Indonesia. Kami berperan memastikan industri kripto
          berjalan sehat dan terpercaya melalui pengawasan, standar keamanan, serta infrastruktur yang terintegrasi.
        </p>
      </div>

      {/* Versi Desktop */}
      <div className="container-custom my-24 px-4 lg:px-0 hidden sm:block">
        <div className="relative w-full h-[500px] lg:h-[700px]">
          <Image
            src="/images/about-hero.png"
            alt="hero-tentang-kami"
            fill
            priority
            className="object-cover rounded-xl"
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </div>
      </div>

      {/* Versi Mobile */}
      <div className="container-custom my-24 px-4 lg:px-0 mx-auto sm:hidden">
        <div className="relative w-full h-[450px]">
          <Image src="/images/office.png" alt="hero-tentang-kami" fill className="object-contain" sizes="100vw" />
        </div>
      </div>

      <div className="container-custom my-24 flex flex-col lg:flex-row px-4 lg:px-0 gap-20 justify-between items-center">
        {visiMisi.map((item, index) => (
          <div key={index} className="flex flex-col gap-4">
            <h2 className="text-3xl font-semibold">{item.title}</h2>
            <p className="text-muted-foreground text-lg">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroTentangKami;
