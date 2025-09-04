import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { File } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { FaFileAlt } from 'react-icons/fa';

const items = [
  {
    title: 'SK Penetapan Daftar Aset Kripto',
    date: '13 Agt 2025 18:00:00',
    icon: FaFileAlt,
    type: 'Bursa',
    href: '#'
  },
  {
    title: 'SK Penetapan Daftar Aset Kripto',
    date: '13 Agt 2025 18:00:00',
    icon: FaFileAlt,
    type: 'Pemerintah',
    href: '#'
  },
  {
    title: 'SK Penetapan Daftar Aset Kripto',
    date: '13 Agt 2025 18:00:00',
    icon: FaFileAlt,
    type: 'Bursa',
    href: '#'
  }
];

const News = [
  {
    title: 'IGX Luncurkan Fitur Keamanan Baru untuk Pengguna',
    date: '10 Okt 2023',
    image: '/images/news.png'
  },
  {
    title: 'Kolaborasi IGX dengan Regulator Lokal untuk Meningkatkan Transparansi',
    date: '5 Okt 2023',
    image: '/images/news.png'
  },
  {
    title: 'IGX Mengumumkan Penambahan Aset Kripto Baru di Platformnya',
    date: '1 Okt 2023',
    image: '/images/news.png'
  }
];

const NewsSection = () => {
  return (
    <section className="w-full min-h-screen pb-36">
      <div className="container-custom">
        <div className="flex justify-evenly items-center">
          <div className="flex flex-col gap-0">
            <h1 className="text-2xl font-semibold">
              Update <br /> Regulasi
            </h1>
            <p className="mt-3 text-muted-foreground">
              Update terkini seputar regulasi, pasar, <br /> dan kegiatan industri aset kripto di <br /> Indonesia.
            </p>
            <div className="mt-32">
              <Button variant="outline" className="bg-white text-black border-black hover:bg-background px-5 hover:text-white">
                Lihat Lainnya
              </Button>
            </div>
          </div>

          {items.map((item, index) => (
            <div key={index} className="flex flex-col justify-between p-8 bg-white rounded-md h-72 w-64 gap-6 shadow items-start">
              <item.icon className="h-[37px] w-[30px] text-[#213965]" />
              <div className="">
                <Badge
                  variant="secondary"
                  className={item.type === 'Pemerintah' ? 'bg-[#F6F1D5] text-[#8C7700]' : 'bg-[#E9F1FD] text-[#204B86] '}
                >
                  {item.type}
                </Badge>
                <p className="text-sm text-gray-500 mt-5 mb-2">{item.date}</p>
                <Link href={item.href} className="font-semibold text-xl hover:text-background">
                  {item.title}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-6 justify-center items-center mt-36">
          <h1 className="font-bold text-2xl">
            Berita Terbaru <span className="text-background">IGX</span>
          </h1>
          <p className="text-muted-foreground">Update terkini seputar regulasi, pasar, dan kegiatan industri aset kripto di Indonesia.</p>
          <div className="flex gap-6">
            {News.map((news, index) => (
              <div key={index} className="flex flex-col bg-white rounded-md w-96 h-fit shadow">
                <img src={news.image} alt={news.title} className="w-full h-48 object-cover rounded-t-md" />
                <div className="p-4 flex flex-col gap-4">
                  <p className="text-sm text-gray-500">{news.date}</p>
                  <h2 className="font-semibold text-lg hover:text-background cursor-pointer">{news.title}</h2>
                  <p className="text-sm text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <Link href="#" className="text- font-semibold mt-auto hover:underline">
                    Baca Selengkapnya
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <Button variant="outline" className="bg-white mt-10 text-black border-black hover:bg-background px-5 hover:text-white">
            Lihat Lainnya
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
