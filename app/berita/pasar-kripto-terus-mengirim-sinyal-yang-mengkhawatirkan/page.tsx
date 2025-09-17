import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Lightbulb, Calendar, Twitter, Facebook, Linkedin } from 'lucide-react';
import { format } from 'date-fns';
import Image from 'next/image';
import Navbar from '@/components/navbar';
import FooterSection from '@/components/footer';

// Komponen DetailBerita dimodifikasi untuk menerima 'content'
const DetailBerita = ({ newsData }: { newsData: { title: string; description: string; authorName: string; authorImage: string; pubDate: Date; image: string; keyPoints: string[]; readingTime: number; content: string } }) => {
  const { title, description, authorName, authorImage, pubDate, image, keyPoints, readingTime, content } = newsData;

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
                  priority
                />
              </div>
            </header>

            <div className="container mt-12">
              <article className="prose dark:prose-invert mx-auto max-w-3xl">
                {/* Intisari Berita */}
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

                {/* Konten artikel dirender dari props */}
                <div dangerouslySetInnerHTML={{ __html: content }} />

                {/* Tombol Berbagi */}
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

// Komponen Halaman yang menggunakan DetailBerita dengan data dari FXStreet
const PageBeritaFXStreet = () => {
  const dataBeritaBaru = {
    title: 'Pasar Kripto Terus Mengirim Sinyal yang Mengkhawatirkan',
    description:
      'Harga Bitcoin telah berkonsolidasi di bawah level $100.000 selama hampir dua minggu, menunjukkan kinerja yang lesu yang membuat para pedagang dan investor dalam ketidakpastian.',
    authorName: 'Lockridge Okoth',
    authorImage: 'https://placehold.co/40x40',
    pubDate: new Date('2025-09-01T18:45:00'),
    image:
      '/berita/berita.webp',
    readingTime: 3,
    keyPoints: [
      'Harga Bitcoin berkonsolidasi di bawah $100.000, dengan para analis memperingatkan kemungkinan penurunan.',
      'Kapitalisasi pasar kripto global berada dalam tren turun, menunjukkan penurunan kepercayaan investor.',
      'Analis merekomendasikan kehati-hatian karena volatilitas diperkirakan akan tetap tinggi.'
    ],
    content: `
      <p class="lead">Harga Bitcoin telah berkonsolidasi di bawah level $100.000 selama hampir dua minggu, menunjukkan kinerja yang lesu yang telah membuat para pedagang dan investor dalam keadaan ketidakpastian.</p>
      <h2>Prospek pasar kripto tetap suram</h2>
      <p>Total kapitalisasi pasar kripto global tetap dalam tren turun, menunjukkan penurunan kepercayaan investor. Ini menunjukkan bahwa para investor memindahkan modal mereka dari aset-aset berisiko seperti mata uang kripto ke aset-aset yang lebih aman.</p>
      <p>Data dari TradingView menunjukkan bahwa total kapitalisasi pasar kripto telah turun dari puncaknya di $3 triliun pada November 2021 menjadi sekitar $2,5 triliun. Penurunan yang signifikan ini menyoroti sentimen bearish yang sedang berlangsung di pasar.</p>
      <h2>Analis Peringatkan Potensi Penurunan Lebih Lanjut</h2>
      <p>Analis pasar memperingatkan bahwa jika Bitcoin gagal mempertahankan level support kritisnya, penurunan lebih lanjut dapat terjadi. Beberapa analis memprediksi potensi penurunan ke level $92.000 atau bahkan lebih rendah jika sentimen pasar tidak membaik.</p>
      <p>Analis di bursa derivatif kripto terkemuka Bitget, dalam sebuah catatan kepada FXStreet, mengatakan, "Kegagalan untuk menembus di atas $100.000 menunjukkan kurangnya tekanan beli." Mereka menambahkan, "Kami merekomendasikan kehati-hatian dalam beberapa hari mendatang karena volatilitas diperkirakan akan tetap tinggi."</p>
      <h2>Apa Selanjutnya untuk Investor?</h2>
      <p>Mengingat kondisi pasar saat ini, para ahli merekomendasikan agar para investor berhati-hati. Meskipun prospek jangka panjang untuk mata uang kripto tetap positif, volatilitas jangka pendek dapat menyebabkan kerugian yang signifikan. Diversifikasi dan manajemen risiko sangat penting dalam iklim saat ini.</p>
    `
  };

  return <DetailBerita newsData={dataBeritaBaru} />;
};

export default PageBeritaFXStreet;
