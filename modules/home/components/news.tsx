import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';
import { FaFileAlt } from 'react-icons/fa';

// Data Regulasi (items) tetap sama
const items = [
  {
    title: 'SK Penetapan Daftar Aset Kripto',
    date: '13 Agt 2025 18:00:00',
    icon: FaFileAlt,
    type: 'Bursa',
    href: 'Salinan-POJK-Nomor-27-Tahun-2024.pdf'
  },
  {
    title: 'SK Penetapan Daftar Aset Kripto',
    date: '13 Agt 2025 18:00:00',
    icon: FaFileAlt,
    type: 'Pemerintah',
    href: 'PMKRI-Nomor-50-2025.pdf'
  },
];

// --- PERBAIKAN: Konten berita diperbarui dengan data yang akurat dari diskusi sebelumnya ---
const News = [
  {
    title: 'Demonstrasi Berjilid-Jilid, Bagaimana Dampaknya ke Kripto?',
    date: '01 September 2025',
    image: '/berita/berita.webp',
    href: '/berita/demonstrasi-berjilid-jilid-dampak-ke-kripto',
    content: `
      <p class="lead">Menutup bulan Agustus, negeri ini menghadapi ujian berat demi transformasi. Gelombang aksi massa berupa demonstrasi terjadi selama beberapa hari, menuntut pembubaran Dewan Perwakilan Rakyat (DPR) dan sejumlah permintaan lainnya.</p>
      <p>Pada umumnya, saat kondisi pasar tengah mengalami ketidakpastian, aset berisiko seperti saham dan juga kripto dihindari oleh investor.</p>
    `
  },
  {
    title: 'Pasar Kripto Terus Mengirim Sinyal yang Mengkhawatirkan',
    date: '01 September 2025', // Tanggal disesuaikan agar konsisten
    image: '/berita/berita.webp', // Gambar disesuaikan, bisa diganti
    href: '/berita/pasar-kripto-terus-mengirim-sinyal-yang-mengkhawatirkan',
    content: `
      <p class="lead">Harga Bitcoin telah berkonsolidasi di bawah level $100.000 selama hampir dua minggu, menunjukkan kinerja yang lesu yang membuat para pedagang dan investor dalam keadaan ketidakpastian.</p>
      <h2>Prospek pasar kripto tetap suram</h2>
      <p>Total kapitalisasi pasar kripto global tetap dalam tren turun, menunjukkan penurunan kepercayaan investor.</p>
    `
  },
  {
    title: 'Pajak Kripto RI Tembus Rp1,55 Triliun hingga Juli 2025, Industri Kian Menggeliat',
    date: '01 September 2025', // Tanggal disesuaikan agar konsisten
    image: '/berita/pajak.webp',
    href: '/berita/pajak-kripto-ri-tembus-rp1,55-triliun-hingga-juli-2025-industri-kian-menggeliat',
    content: `
      <p class="lead">Penerimaan pajak dari aset kripto di Indonesia terus menunjukkan tren positif, mencapai total Rp1,55 triliun hingga akhir Juli 2025. Angka ini menandakan pertumbuhan signifikan dan semakin matangnya industri aset digital di tanah air.</p>
      <h2>Rincian Penerimaan Pajak</h2>
      <p>Berdasarkan data dari Direktorat Jenderal Pajak (DJP), penerimaan tersebut terdiri dari dua komponen utama.</p>
    `
  }
];

const NewsSection = () => {

  // --- PERBAIKAN: Fungsi untuk membersihkan tag HTML sebelum memotong teks ---
  const stripHtml = (html) => {
    if (typeof window !== 'undefined') {
      const doc = new DOMParser().parseFromString(html, 'text/html');
      return doc.body.textContent || "";
    }
    // Fallback for server-side rendering
    return html.replace(/<[^>]*>?/gm, '');
  };

  return (
    <section className="w-full min-h-screen pb-20 lg:pb-36" style={{ background: 'linear-gradient(to bottom, #FFFFFF, #EDF3FD, #FAFAFA)' }}>
      <div className="container-custom px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row lg:justify-between items-center">
          {/* Bagian Update Regulasi (Tidak ada perubahan) */}
          <div className="flex flex-col gap-0 mx-auto lg:mx-0 text-center lg:text-left">
            <h1 className="text-3xl font-semibold">Update Regulasi</h1>
            <p className="mt-3 text-muted-foreground">
              Update terkini seputar regulasi, pasar, dan kegiatan industri aset kripto di Indonesia.
            </p>
            <div className="mt-32 hidden ">
              <Button variant="outline" className="bg-white text-black border-black hover:bg-background px-5 hover:text-white">
                Lihat Lainnya
              </Button>
            </div>
          </div>
          <div className="flex justify-end min-w-2xl lg:w-full gap-5 mt-10 lg:mt-0 mx-4 items-center align-center">
            {items.map((item, index) => (
              <div key={index} className="flex flex-col justify-between p-8 bg-white rounded-md h-72 gap-6 shadow items-start">
                <item.icon className="h-[37px] w-[30px] text-[#213965]" />
                <div className="">
                  <Badge
                    variant="secondary"
                    className={item.type === 'Pemerintah' ? 'bg-[#F6F1D5] text-[#8C7700]' : 'bg-[#E9F1FD] text-[#204B86] '}
                  >
                    {item.type}
                  </Badge>
                  <p className="text-sm text-gray-500 mt-5 mb-2">{item.date}</p>
                  <Link href={`/file/${item.href}`} target='_blank' className="font-semibold text-xl hover:text-background">
                    {item.title}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bagian Berita Terbaru */}
        <div className="flex flex-col gap-6 justify-center items-center mt-36 ">
          <h1 className="font-bold text-2xl">
            Berita Terbaru <span className="text-background">IGX</span>
          </h1>
          <p className="text-muted-foreground">Update terkini seputar regulasi, pasar, dan kegiatan industri aset kripto di Indonesia.</p>
          <div className="flex flex-col lg:flex-row gap-6 ">
            {News.map((news, index) => (
              <div key={index} className="flex flex-col bg-white rounded-md lg:w-96 h-[450px] shadow overflow-hidden">
                <img src={news.image} alt={news.title} className="w-full h-48 object-cover rounded-t-md" />
                
                {/* --- PERBAIKAN: Struktur flexbox untuk alignment --- */}
                <div className="p-6 flex flex-col flex-1"> {/* Menambahkan padding lebih dan flex-1 */}
                  <div className="flex-grow"> {/* Wrapper ini akan membesar dan mendorong link ke bawah */}
                    <p className="text-sm text-gray-500 mb-2">{news.date}</p>
                    <Link href={news.href} className='line-clamp-2'>
                        <h2 className="font-semibold text-lg hover:text-background cursor-pointer mb-3">{news.title}</h2>
                    </Link>
                    <p className="text-sm text-gray-600 line-clamp-3"> {/* line-clamp untuk memotong teks */}
                      {stripHtml(news.content)} {/* Menggunakan fungsi stripHtml */}
                    </p>
                  </div>
                  <Link href={news.href} className="text-primary font-semibold mt-4 hover:underline">
                    Baca Selengkapnya
                  </Link>
                </div>

              </div>
            ))}
          </div>
          <Button variant="outline" className="bg-white hidden mt-10 text-black border-black hover:bg-background px-5 hover:text-white">
            Lihat Lainnya
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;