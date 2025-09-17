import DotText from '@/components/dot-text';
import React from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Phone, Mail, PinIcon } from 'lucide-react';

const KontakHero = () => {
  return (
    <section className="relative min-h-screen w-full mt-40 ">
      <div
        className="absolute -left-40 -top-32 w-[330px] h-[330px] rounded-full -z-10"
        style={{
          backgroundColor: '#B2CCFF', // biru transparan
          boxShadow: '0 0 200px 200px #B2CCFF', // glow
          opacity: 0.3
        }}
      ></div>
      <div className="mx-auto flex flex-col  justify-center max-w-2xl items-center gap-5">
        <DotText text="Kontak" />
        <h1 className="text-5xl font-bold">Hubungi Kami</h1>
        <p className="text-muted-foreground items-center text-lg text-center">
          Kami siap membantu menjawab pertanyaan Anda terkait layanan dan informasi yang tersedia di platform ini.
        </p>
      </div>

      <div className="container-custom flex flex-col lg:flex-row justify-between gap-4 mt-24 px-4">
        <Card className="w-full md:w-[690px]">
          <CardHeader>
            <CardTitle className="text-2xl">Kirim Pesan</CardTitle>
            <CardDescription>
              Silakan lengkapi formulir di bawah ini dengan data diri dan pertanyaan Anda. Tim kami akan segera menindaklanjuti sesuai
              prosedur.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col space-y-2">
                  <Input id="namaDepan" name="namaDepan" placeholder="Nama depan" />
                </div>
                <div className="flex flex-col space-y-2">
                  <Input id="namaBelakang" name="namaBelakang" placeholder="Nama belakang" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col space-y-2">
                  <Input id="email" type="email" name="email" placeholder="Alamat email" />
                </div>

                <div className="flex flex-col space-y-2">
                  <Input id="nomorHp" type="text" name="nomorHp" placeholder="Nomor HP" />
                </div>
              </div>

              <div className="flex flex-col  space-y-2">
                <Textarea className="resize-none h-28" id="pesan" name="pesan" placeholder="Tuliskan Pesan" rows={4} />
              </div>

              <button className="w-full py-3 bg-background text-white rounded-lg hover:bg-primary hover:text-primary hover:border transition-all duration-200">
                Kirim Pesan
              </button>
            </form>
          </CardContent>
        </Card>
        <Card className="w-full lg:w-[486px] text-white bg-background">
          <CardHeader>
            <CardTitle className="text-2xl">Butuh informasi lebih lanjut?</CardTitle>
            <CardDescription className="text-white">Hubungi kami melalui detail kontak di bawah ini.</CardDescription>
          </CardHeader>
          <CardContent className="p-6 md:p-8 pt-0 space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold text-sm">Nomor Telepon</p>
                <a href="tel:+6281234567890" className="text-primary-foreground/90 hover:underline">
                  +62 812 3456 7890
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold text-sm">Alamat Email</p>
                <a href="mailto:info@igx.id" className="text-primary-foreground/90 hover:underline">
                  info@igx.id
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1">
                <PinIcon className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold text-sm">Alamat Kantor</p>
                <address className="not-italic text-primary-foreground/90">
                  Gedung Millennium Centennial Center Lantai 9, Jl. Jenderal Sudirman No.Kav. 25, Kuningan, Karet, Kecamatan Setiabudi, Kota
                  Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12920
                </address>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="container-custom mb-24 px-4">
        <div className="mt-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3835807383666!2d106.81875377567572!3d-6.213036993774863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f531e5c7e941%3A0x43d08834f55d0450!2sMillennium%20Centennial%20Center!5e0!3m2!1sid!2sid!4v1758092412196!5m2!1sid!2sid"
            width="100%"
            height="450"
            style={{ border: 0 }}
            className="rounded-lg"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default KontakHero;
