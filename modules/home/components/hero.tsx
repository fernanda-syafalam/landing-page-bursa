'use client';
import React from 'react';
import { BackgroundRippleEffect } from '@/components/ui/background-ripple-effect';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export function HeroSection() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden text-white bg-background">
      <BackgroundRippleEffect rows={9} cols={28} cellSize={78} />

      <div className="container-custom relative mt-96 lg:mt-60 w-full flex items-center align-center text-center lg:text-left">
        {/* Left Content */}
        <div className="flex flex-col gap-6 relative z-20 max-w-2xl">
          <h2 className="text-4xl font-bold lg:text-5xl">Indonesia Global Exchange</h2>

          <p className="text-lg mt-4 max-w-2xl dark:text-neutral-500">
            Menyelenggarakan dan menyediakan sistem terpercaya untuk mendukung perdagangan serta pelaporan aset kripto secara aman,
            transparan, dan teratur.
          </p>

          <div className="hidden lg:flex gap-4 mt-6">
            <Link href="#tentang-kami">
              <Button variant="default" className="bg-white text-black hover:bg-[#F1F5F9] hover:border-white ">
                Pelajari Peran Kami
              </Button>
            </Link>

            <Link href="#statistik-pasar">
              <Button variant="outline" className='hover:bg-[#FFFFFF26] hover:text-white'>Lihat Statistik Pasar</Button>
            </Link>
          </div>

          <div className="mt-10 lg:mt-24 mx-auto lg:mx-0  flex lg:block flex-col items-center justify-center ">
            <p className="font-bold">Terdaftar dan Diawasi Oleh</p>
            <Image src="/images/ojk.png" alt="ojk" width={150} height={50} />
          </div>
          <div className="flex w-1/2 mx-auto flex-col lg:hidden gap-4 mt-6">
            <Button variant="default" className="bg-white text-black">
              Pelajari Peran Kami
            </Button>
            <Button variant="outline"> Lihat Statistik Pasar</Button>
          </div>
        </div>

        {/* Hero Image */}
        <Image
          src="/images/hero.webp"
          alt="hero"
          width={780}
          height={780}
          className="absolute -top-72 lg:-top-1/2 right-2 lg:-right-1/6 z-15"
          priority
        />
      </div>

      {/* Count Section - di luar flex atas, biar full width & center */}
      <div className="relative z-10 mb-20 lg:mb-0 lg:h-64 w-full bg-background flex flex-col lg:flex-row items-center justify-center  mt-20  gap-4 lg:gap-10  lg:mt-10">
        <div className="flex flex-col gap-3">
          <h1 className="text-5xl font-bold text-center">Rp 24T</h1>
          <p>Volume Transaksi 24 Jam</p>
        </div>
        <div className="h-0.5 lg:h-14 bg-white/35 w-72 lg:w-0.5 "></div>
        <div className="flex flex-col gap-3">
          <h1 className="text-5xl font-bold text-center">132 +</h1>
          <p>Total Aset Terdaftar</p>
        </div>
        <div className="h-0.5 lg:h-14 bg-white/35 w-72 lg:w-0.5 "></div>
        <div className="flex flex-col gap-3">
          <h1 className="text-5xl font-bold text-center z-20">95+</h1>
          <p>Jumlah Anggota Bursa</p>
        </div>
      </div>
    </div>
  );
}
