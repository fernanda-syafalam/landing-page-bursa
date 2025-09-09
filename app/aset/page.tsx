import DotText from '@/components/dot-text';
import FooterSection from '@/components/footer';
import Navbar from '@/components/navbar';
import React from 'react';

const AsetPage = () => {
  return (
    <div>
      <Navbar variant="white" />
      <div className="min-h-screen">
        <div className="container-custom mt-42 flex flex-col justify-center items-center gap-4 ">
          <DotText text="Aset" />
          <h1 className="text-5xl font-bold">Aset Kripto yang Terdaftar</h1>
          <p className="text-lg text-muted-foreground max-w-[720px] text-center">
            Daftar ini memuat aset kripto yang telah terdaftar dan diawasi sesuai ketentuan yang berlaku di Indonesia.
          </p>
        </div>


      </div>
      <FooterSection />
    </div>
  );
};

export default AsetPage;
