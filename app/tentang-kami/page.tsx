import FooterSection from '@/components/footer'
import Navbar from '@/components/navbar'
import HeroTentangKami from '@/modules/tentang-kami/components/hero-tentang-kami'
import PeranSection from '@/modules/tentang-kami/components/peran'
import PerjalananTentangKami from '@/modules/tentang-kami/components/perjalanan'
import React from 'react'

const TentangKamiPage = () => {
  return (
    <>
        <Navbar variant="white" />
        <HeroTentangKami />
        <PeranSection />
        <PerjalananTentangKami />
        <FooterSection />
    </>
  )
}

export default TentangKamiPage