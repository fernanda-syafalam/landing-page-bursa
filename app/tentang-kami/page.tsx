import FooterSection from '@/components/footer'
import Navbar from '@/components/navbar'
import HeroTentangKami from '@/modules/tentang-kami/components/hero-tentang-kami'
import PeranSection from '@/modules/tentang-kami/components/peran'
import React from 'react'
import PrinsipSection from '@/modules/tentang-kami/components/prinsip'

const TentangKamiPage = () => {
  return (
    <>
        <Navbar variant="white" />
        <HeroTentangKami />
        <PeranSection />
        <PrinsipSection />
        <FooterSection />
    </>
  )
}

export default TentangKamiPage