import DotText from '@/components/dot-text';
import React from 'react';

const PasarHeroSection = () => {
  return (
    <section className="w-ful min-h-screen">
      <div className="container-custom flex flex-col gap-3 mt-44 justify-center items-center align-middle">
        <DotText text="Data Pasar" />
        <h1 className="text-3xl font-bold">Market & Harga Kripto Hari Ini</h1>
        <p className="text-muted-foreground">Perkembangan harga dan data kripto terkini yang diperbarui setiap hari secara transparan.</p>
      </div>
    </section>
  );
};

export default PasarHeroSection;
