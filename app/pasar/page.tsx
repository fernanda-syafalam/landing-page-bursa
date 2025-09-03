import FooterSection from '@/components/footer';
import Navbar from '@/components/navbar';
import CatatanSection from '@/modules/pasar/components/catatan';
import PasarHeroSection from '@/modules/pasar/components/pasar-hero';

import React from 'react';

const PasarPage = () => {
  return (
    <div>
      <Navbar variant="white" />
      <PasarHeroSection />
      <CatatanSection />
      <FooterSection />
    </div>
  );
};

export default PasarPage;
