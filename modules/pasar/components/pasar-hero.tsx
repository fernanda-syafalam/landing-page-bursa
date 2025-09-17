import DotText from '@/components/dot-text';
import React from 'react';

const PasarHeroSection = () => {
  return (
    <section className="relative w-full">
      <div
        className="absolute -left-40 -top-32 w-[330px] h-[330px] rounded-full"
        style={{
          backgroundColor: '#B2CCFF', // biru transparan
          boxShadow: '0 0 200px 200px #B2CCFF', // glow
          opacity: 0.3
        }}
      ></div>
 
      <div className="container-custom flex flex-col gap-3 pt-44 justify-center items-center align-middle text-center lg:text-left">
        <DotText text="Data Pasar" />
        <h1 className="text-5xl font-bold">Market & Harga Kripto Hari Ini</h1>
        <p className="text-muted-foreground text-lg text-center">
          Perkembangan harga dan data kripto terkini yang diperbarui setiap hari secara <br /> transparan.
        </p>
      </div>
    </section>
  );
};

export default PasarHeroSection;
