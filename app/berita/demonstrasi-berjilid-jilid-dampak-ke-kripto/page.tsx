import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Lightbulb, Calendar, Twitter, Facebook, Linkedin } from 'lucide-react';
import { format } from 'date-fns';
import Image from 'next/image';
import Navbar from '@/components/navbar';
import FooterSection from '@/components/footer';

const DetailBerita = ({ newsData }: { newsData: { title: string; description: string; authorName: string; authorImage: string; pubDate: Date; image: string; keyPoints: string[]; readingTime: number } }) => {
  const { title, description, authorName, authorImage, pubDate, image, keyPoints, readingTime } = newsData;

  return (
    <div className="relative overflow-x-hidden">
        <Navbar variant="white" />
      <div className="container-custom">
        <div
          className="absolute -left-40 -top-32 w-[330px] h-[330px] rounded-full z-0" 
          style={{
            backgroundColor: '#B2CCFF',
            boxShadow: '0 0 200px 200px #B2CCFF',
            opacity: 0.3
          }}
        ></div>
        <section className="py-24 md:py-32">
          <div className="container relative z-10">
            <header className="mx-auto flex max-w-4xl flex-col items-center gap-4 text-center">
              <h1 className="max-w-3xl text-pretty text-4xl font-bold md:text-6xl">{title}</h1>
              <p className="text-muted-foreground max-w-3xl text-lg md:text-xl">{description}</p>

              <div className="mt-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8 border">
                    <AvatarImage src={authorImage} />
                    <AvatarFallback>{authorName.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold text-foreground">{authorName}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{format(pubDate, 'd MMMM yyyy')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">{readingTime} min read</span>
                </div>
              </div>

              <div className="w-full max-w-5xl mt-6">
                <Image
                  src={image}
                  width={1200}
                  height={630}
                  alt={`Gambar artikel: ${title}`}
                  className="aspect-video w-full rounded-lg border object-cover shadow-lg"
                  priority // Memuat gambar ini lebih dulu karena merupakan LCP (Largest Contentful Paint)
                />
              </div>
            </header>
            {/* === BAGIAN KONTEN ARTIKEL === */}
            <div className="container mt-12">
              <article className="prose dark:prose-invert mx-auto max-w-3xl">
                {/* --- UX IMPROVEMENT: Menambahkan "Intisari" atau TL;DR (Too Long; Didn't Read) --- */}
                <Alert className="mb-8">
                  <Lightbulb className="h-4 w-4" />
                  <AlertTitle className="font-bold">Intisari Berita</AlertTitle>
                  <AlertDescription>
                    <ul className="my-2 list-disc list-inside">
                      {keyPoints.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  </AlertDescription>
                </Alert>

                {/* Isi artikel asli */}
                <p className="lead">
                  Menutup bulan Agustus, negeri ini menghadapi ujian berat demi transformasi. Gelombang aksi massa berupa demonstrasi
                  terjadi selama beberapa hari, menuntut pembubaran Dewan Perwakilan Rakyat (DPR) dan sejumlah permintaan lainnya...
                </p>
                <p>
                  Pada umumnya, saat kondisi pasar tengah mengalami ketidakpastian, aset berisiko seperti saham dan juga kripto dihindari
                  oleh investor. Indeks harga saham gabungan (IHSG) pada perdagangan hari ini rontok 1,21%. Turun ke level 7,736,07.
                </p>

                <h2>Opini dari Pelaku Industri</h2>
                <p>Nah untuk kripto, Chief Executive Officer (CEO) Tokocrypto, Calvin Kizana menyatakan keprihatinannya...</p>
                <blockquote>
                  “Jika melihat data internal yang juga terlihat di CoinMarketCap, memang terdapat indikasi bahwa pasar kripto Indonesia
                  mengalami pergerakan sideways...”
                </blockquote>

                <h2>Tidak Semata Karena Demonstrasi di Indonesia</h2>
                <p>Namun dalam hemat Calvin, situasi tersebut tidak semata-mata mendapatkan pengaruh dari sentimen domestik...</p>
                <blockquote>
                  “Meski begitu, kami juga menyadari bahwa gejolak sosial dan ketidakpastian politik di dalam negeri dapat memberikan efek
                  tambahan...”
                </blockquote>
                <p>
                  Ke depan, ia optimistis bahwa fundamental industri kripto di Indonesia akan mampu bertahan dan beradaptasi... “Kami
                  berharap, situasi di Indonesia segera kembali kondusif,” pungkas Calvin.
                </p>

                {/* --- UX IMPROVEMENT: Tombol berbagi (Share) untuk meningkatkan engagement --- */}
                <div className="mt-12 flex flex-col items-center gap-4 rounded-lg border bg-muted p-6 text-center">
                  <h3 className="text-lg font-semibold">Bagikan Artikel Ini</h3>
                  <p className="text-sm text-muted-foreground">Bantu sebarluaskan informasi ini ke rekan Anda.</p>
                  <div className="flex items-center gap-4">
                    <a href="#" className="rounded-full border p-2 hover:bg-background">
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a href="#" className="rounded-full border p-2 hover:bg-background">
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a href="#" className="rounded-full border p-2 hover:bg-background">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
      </div>
      <FooterSection />
    </div>
  );
};

// Cara Penggunaan Komponen
const PageBerita = () => {
  // Data berita sekarang terpusat di satu objek, mudah dikelola atau diambil dari API
  const dataBeritaDemo = {
    title: 'Demonstrasi Berjilid-Jilid, Bagaimana Dampaknya ke Kripto?',
    description: 'Demonstrasi massa yang terjadi beberapa hari ini diduga memiliki dampak terhadap pergerakan pasar kripto dalam negeri.',
    authorName: 'Adi Wiratno',
    authorImage: 'https://placehold.co/40x40',
    pubDate: new Date('2025-09-01T21:53:00'),
    image: '/berita/berita.webp',
    readingTime: 5, // Estimasi waktu baca dalam menit
    keyPoints: [
      'Aksi demonstrasi berpotensi mempengaruhi psikologi investor ritel di pasar kripto.',
      'Volume transaksi kripto domestik sempat turun 10-20% selama periode aksi.',
      'Faktor global seperti arus inflow ETF Bitcoin masih menjadi pengaruh yang lebih dominan.',
      'Stabilitas sosial-politik dianggap sebagai fondasi penting bagi pertumbuhan ekosistem aset kripto.'
    ]
  };

  return <DetailBerita newsData={dataBeritaDemo} />;
};

export default PageBerita;
