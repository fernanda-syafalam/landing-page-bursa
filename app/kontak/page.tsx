import FooterSection from '@/components/footer';
import Navbar from '@/components/navbar';
import KontakHero from '@/modules/kontak/components/hero';
import React from 'react';

const KontakPage = () => {
  return (
    <div>
      <Navbar variant="white" />
      <KontakHero />
      <FooterSection />
    </div>
  );
};

export default KontakPage;
