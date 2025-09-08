import DotText from '@/components/dot-text';
import Image from 'next/image';
import React from 'react';

const visiMisi = [
  {
    title: 'Visi',
    desc: 'Lorem ipsum dolor sit amet consectetur. Duis suscipit consequat amet varius sit. Turpis arcu cras ut gravida diam ante nec. Odio sollicitudin in risus purus nulla.'
  },
  {
    title: 'Misi',
    desc: 'Lorem ipsum dolor sit amet consectetur. Duis suscipit consequat amet varius sit. Turpis arcu cras ut gravida diam ante nec. Odio sollicitudin in risus purus nulla.'
  }
];

const HeroTentangKami = () => {
  return (
    <section className="w-full min-h-screen">
      <div className="container-custom mt-40 flex flex-col gap-4 justify-center items-center text-center">
        <DotText text="Tentang Kami" />
        <h1 className="text-5xl font-bold ">
          Hadir untuk Regulasi, Transparansi, <br /> dan Keamanan Kripto
        </h1>
        <p className="text-muted-foreground text-lg max-w-[750px]">
          IGX adalah penyelenggara sistem perdagangan dan pelaporan aset kripto di Indonesia. Kami berperan memastikan industri kripto
          berjalan sehat dan terpercaya melalui pengawasan, standar keamanan, serta infrastruktur yang terintegrasi.
        </p>
      </div>
      <div className="container-custom my-24">
        <Image src="/images/about-hero.png" alt="hero-tentang-kami" width={1920} height={1080} />
      </div>

      <div className="container-custom my-24 flex gap-20 justify-between items-center">
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
