import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Lightbulb, Calendar, Twitter, Facebook, Linkedin } from 'lucide-react';
import { format } from 'date-fns';
import Image from 'next/image';
import Navbar from '@/components/navbar';
import FooterSection from '@/components/footer';

// Komponen DetailBerita (Tidak ada perubahan, tetap reusable)
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
                <div dangerouslySetInnerHTML={{ __html: content }} />
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

// Komponen Halaman yang menggunakan DetailBerita dengan data dari Digivestasi
const PageBeritaPajak = () => {
  const dataBeritaPajak = {
    title: 'Pajak Kripto RI Tembus Rp1,55 Triliun hingga Juli 2025, Industri Kian Menggeliat',
    description:
      'Penerimaan pajak dari aset kripto di Indonesia terus menunjukkan tren positif, menandakan pertumbuhan signifikan dan semakin matangnya industri aset digital di tanah air.',
    authorName: 'Tim Redaksi Digivestasi',
    authorImage: 'https://placehold.co/40x40/22c55e/ffffff?text=D', // Placeholder
    pubDate: new Date('2025-09-01T15:27:00'),
    image: '/berita/pajak.webp', // Gambar representatif
    readingTime: 4,
    keyPoints: [
      'Total penerimaan pajak kripto mencapai Rp1,55 triliun hingga Juli 2025.',
      'Penerimaan terdiri dari PPh Pasal 22 (Rp745 miliar) dan PPN Dalam Negeri (Rp805 miliar).',
      'Pertumbuhan ini menunjukkan peningkatan kepatuhan dan adopsi kripto di Indonesia.',
      'Pelaku industri berharap adanya peninjauan kembali tarif pajak untuk mendorong daya saing global.'
    ],
    content: `
      <p class="lead">Penerimaan pajak dari aset kripto di Indonesia terus menunjukkan tren positif, mencapai total Rp1,55 triliun hingga akhir Juli 2025. Angka ini menandakan pertumbuhan signifikan dan semakin matangnya industri aset digital di tanah air.</p>
      <h2>Rincian Penerimaan Pajak</h2>
      <p>Berdasarkan data dari Direktorat Jenderal Pajak (DJP), penerimaan tersebut terdiri dari dua komponen utama. Pertama, Pajak Penghasilan (PPh) Pasal 22 atas transaksi penjualan kripto oleh exchanger dalam negeri yang mencapai Rp745 miliar. Kedua, Pajak Pertambahan Nilai (PPN) Dalam Negeri atas pembelian aset kripto yang menyumbang Rp805 miliar.</p>
      <p>Sejak diberlakukan pada Mei 2022, kebijakan pajak ini secara konsisten memberikan kontribusi positif terhadap pendapatan negara, sekaligus menjadi indikator tumbuhnya volume transaksi dan jumlah investor kripto di Indonesia.</p>
      <h2>Tanggapan Pelaku Industri</h2>
      <p>Menanggapi pencapaian ini, CEO Indodax, Oscar Darmawan, menyatakan bahwa angka tersebut mencerminkan tingkat kepatuhan yang tinggi dari para pelaku industri dan investor. "Ini adalah bukti bahwa ekosistem kripto di Indonesia tidak hanya bertumbuh dari sisi adopsi, tetapi juga dari sisi kontribusi nyata terhadap negara," ujarnya.</p>
      <blockquote>Meskipun begitu, Oscar berharap pemerintah dapat mempertimbangkan untuk meninjau kembali besaran tarif pajak di masa depan agar industri kripto Indonesia dapat lebih kompetitif di tingkat global.</blockquote>
      <h2>Proyeksi ke Depan</h2>
      <p>Dengan adopsi yang terus meningkat dan regulasi yang semakin jelas di bawah Otoritas Jasa Keuangan (OJK) dan Bappebti, potensi penerimaan pajak dari sektor ini diproyeksikan akan terus bertambah. Pemerintah dan pelaku industri diharapkan dapat terus bersinergi untuk menciptakan iklim investasi yang sehat dan kondusif bagi pertumbuhan ekonomi digital Indonesia.</p>
    `
  };

  return <DetailBerita newsData={dataBeritaPajak} />;
};

export default PageBeritaPajak;
