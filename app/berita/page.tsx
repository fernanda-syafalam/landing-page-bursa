import FooterSection from '@/components/footer';
import Navbar from '@/components/navbar';
import Pagination from '@/components/pagination';
import { Badge } from '@/components/ui/badge';
import { SearchIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const beritaHeader = [
  {
    tanggal: '21 Januari 2023',
    Judul: 'Penetapan 3 Aset Kripto Baru di Bursa Resmi',
    image: '/images/news.png'
  },
  {
    tanggal: '21 Januari 2023',
    Judul: 'Penetapan 3 Aset Kripto Baru di Bursa Resmi',
    image: '/images/news.png'
  },
  {
    tanggal: '21 Januari 2023',
    Judul: 'Penetapan 3 Aset Kripto Baru di Bursa Resmi',
    image: '/images/news.png'
  }
];

const regulasiItems = [
  {
    tipe: 'Pemerintah',
    title: 'Peraturan Otoritas Jasa Keuangan Republik Indonesia Nomor 27 Tahun 2024',
    desc: 'Peraturan Tentang Penyelenggaraan Perdagangan Aset Keuangan Digital Termasuk Aset Kripto',
    tanggal: '27 Agt 2024',
    jam: '12:00.00',
    href: 'Salinan-POJK-Nomor-27-Tahun-2024.pdf'
  },
  {
    tipe: 'Pemerintah',
    title: 'Peraturan Menteri Keuangan Republik Indonesia Nomor 50 Tahun 2025 ',
    desc: 'Peraturan Tentang Pajak Pertambahan Nilai dan Pajak Penghasilan Atas Transaksi Perdagangan Aset Kripto',
    tanggal: '13 Agt 2025',
    jam: '18:00:00',
    href: 'PMKRI-Nomor-50-2025.pdf'
  }
];

const beritaItems = [
  {
    title: 'IGX Luncurkan Fitur Keamanan Baru untuk Pengguna',
    tanggal: '10 Okt 2023',
    image: '/images/news.png',
    slug: 'igx-luncurkan-fitur-keamanan-baru-untuk-pengguna'
  },
  {
    title: 'Kolaborasi IGX dengan Regulator Lokal untuk Meningkatkan Transparansi',
    tanggal: '5 Okt 2023',
    image: '/images/news.png',
    slug: 'kolaborasi-igx-dengan-regulator-lokal-untuk-meningkatkan-transparansi'
  },
  {
    title: 'IGX Mengumumkan Penambahan Aset Kripto Baru di Platformnya',
    tanggal: '1 Okt 2023',
    image: '/images/news.png',
    slug: 'igx-mengumumkan-penambahan-aset-kripto-baru-di-platformnya'
  },
  {
    title: 'IGX Luncurkan Program Afiliasi untuk Meningkatkan Penggunaan Aset Kripto',
    tanggal: '25 Sep 2023',
    image: '/images/news.png',
    slug: 'igx-luncurkan-program-afiliasi-untuk-meningkatkan-penggunaan-aset-kripto'
  },
  {
    title: 'IGX Mengadakan Kegiatan Sosial untuk Meningkatkan Kesadaran Penggunaan Aset Kripto',
    tanggal: '20 Sep 2023',
    image: '/images/news.png',
    slug: 'igx-mengadakan-kegiatan-sosial-untuk-meningkatkan-kesadaran-penggunaan-aset-kripto'
  },
  {
    title: 'IGX Mengumumkan Kemitraan dengan Perusahaan Teknologi untuk Meningkatkan Keamanan',
    tanggal: '15 Sep 2023',
    image: '/images/news.png',
    slug: 'igx-mengumumkan-kemitraan-dengan-perusahaan-teknologi-untuk-meningkatkan-keamanan'
  },
  {
    title: 'IGX Luncurkan Fitur Baru untuk Meningkatkan Pengalaman Pengguna',
    tanggal: '10 Sep 2023',
    image: '/images/news.png',
    slug: 'igx-luncurkan-fitur-baru-untuk-meningkatkan-pengalaman-pengguna'
  },
  {
    title: 'IGX Mengumumkan Penambahan Aset Kripto Baru di Platformnya',
    tanggal: '5 Sep 2023',
    image: '/images/news.png',
    slug: 'igx-mengumumkan-penambahan-aset-kripto-baru-di-platformnya'
  },
  {
    title: 'IGX Membuka Lowongan Pekerjaan untuk Meningkatkan Timnya',
    tanggal: '1 Sep 2023',
    image: '/images/news.png',
    slug: 'igx-membuka-lowongan-pekerjaan-untuk-meningkatkan-timnya'
  }
];

const BeritaPage = () => {
  return (
    <div>
      <Navbar variant="white" />
      <div className="min-h-screen">
        <div className="relative container-custom mt-40 flex flex-col lg:flex-row gap-6">
          <div
            className="absolute -left-40 -top-32 w-[330px] h-[330px] rounded-full z-10"
            style={{
              backgroundColor: '#B2CCFF', // biru transparan
              boxShadow: '0 0 200px 200px #B2CCFF', // glow
              opacity: 0.3
            }}
          ></div>
          <div
            className=" lg:w-[690px] mx-4 lg:mx-0  bg-no-repeat bg-center bg-cover h-96 rounded-lg text-white p-6 flex flex-col items-baseline"
            style={{
              backgroundImage: `
      linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(0,0,0,1) 100%),
      url(/images/news.png)
    `
            }}
          >
            <div className="mt-auto">
              <p className="text-sm">12 Januari 2023</p>
              <h1 className="text-2xl">Penetapan 3 Aset Kripto Baru di Bursa Resmi</h1>
            </div>
          </div>
          <div className="flex flex-col gap-4 mx-4 lg:mx-0">
            {beritaHeader.map((item, index) => (
              <div key={index} className="flex gap-5">
                <Image src={item.image} width={180} height={118} alt="" className="rounded-lg" />
                <div className="flex flex-col">
                  <p className="text-muted-foreground text-sm">{item.tanggal}</p>
                  <h4 className="font-semibold text-lg">{item.Judul}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container-custom my-20 flex flex-col px-4 lg:px-0">
          <h1 className="text-2xl  font-semibold">Regulasi</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {regulasiItems.map((item, index) => (
              <div key={index} className="flex flex-col gap-4">
                <div className="mt-6">
                  <Badge variant="default" className="text-xs bg-amber-200/50 text-black/70">
                    {item.tipe}
                  </Badge>
                </div>

                <Link href={`/file/${item.href}`} target="_blank" className="font-semibold text-xl hover:text-background">
                  {item.title}
                </Link>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
                <div className="flex items-center gap-2 text-xs">
                  <h4 className="text-muted-foreground">{item.tanggal}</h4>
                  <h4 className="text-muted-foreground">{item.jam}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container-custom my-20 px-4 lg:px-0">
          <div className="flex justify-between">
            <h2 className="text-2xl font-semibold">Berita Lainnya</h2>
            <form className="items-center gap-2 hidden lg:flex">
              <div className="relative w-72">
                <input type="text" placeholder="Cari berita" className="border border-gray-300 rounded-md px-3 py-2 w-full " />
                <SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </form>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
            {beritaItems.map((item, index) => (
              <Link key={index} href={`/berita/${item.slug}`}>
                <div className="bg-white rounded-lg border border-[#DFE4EA] shadow-sm overflow-hidden">
                  {/* Gambar + overlay tanggal */}
                  <div className="relative">
                    <Image src={item.image} width={400} height={300} alt={item.title} className="w-full h-64 object-cover rounded-t-lg" />
                  </div>

                  {/* Konten */}
                  <div className="p-6">
                    <p className="text-muted-foreground text-xs">{item.tanggal}</p>
                    <h4 className="font-semibold text-base text-gray-900 leading-snug">{item.title}</h4>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="w-full flex justify-center items-center mt-10">
            <Pagination totalPages={30} />
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default BeritaPage;
