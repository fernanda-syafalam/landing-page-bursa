import DotText from '@/components/dot-text';
import React from 'react';

const PasarHeroSection = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#F6F9FF] to-[#F6F9FF00]">
      <div
        className="absolute -left-40 -top-32 w-[330px] h-[330px] rounded-full z-10"
        style={{
          backgroundColor: '#B2CCFF', // biru transparan
          boxShadow: '0 0 200px 200px #B2CCFF', // glow
          opacity: 0.3
        }}
      ></div>
 
      <div className="container-custom flex flex-col gap-3 mt-44 justify-center items-center align-middle">
        <DotText text="Data Pasar" />
        <h1 className="text-5xl font-bold">Market & Harga Kripto Hari Ini</h1>
        <p className="text-muted-foreground text-lg">
          Perkembangan harga dan data kripto terkini yang diperbarui setiap hari secara transparan.
        </p>
      </div>
    </section>
  );
};

export default PasarHeroSection;
