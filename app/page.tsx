'use client';

import AboutSection from '@/modules/home/components/about';
import AssetSection from '@/modules/home/components/asset';
import FooterSection from '@/components/footer';
import { HeroSection } from '@/modules/home/components/hero';
import MissionSection from '@/modules/home/components/mission';
import Navbar from '@/components/navbar';
import NewsSection from '@/modules/home/components/news';

export default function Home() {
  return (
    <div className="min-h-screen bg-primary">
      <Navbar variant='blue' />
      <HeroSection />
      <AssetSection />
      <AboutSection />
      <MissionSection />
      <NewsSection />
      <FooterSection />
    </div>
  );
}
