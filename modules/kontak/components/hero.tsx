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
    <section className="min-h-screen w-full mt-40 ">
      <div className="mx-auto flex flex-col justify-center max-w-2xl items-center gap-5">
        <DotText text="Kontak" />
        <h1 className="text-5xl font-bold">Hubungi Kami</h1>
        <p className="text-muted-foreground items-center text-lg text-center">
          Kami siap membantu menjawab pertanyaan Anda terkait layanan dan informasi yang tersedia di platform ini.
        </p>
      </div>

      <div className="container-custom flex justify-between gap-4 mt-24">
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
                <Textarea className="resize-none h-28" id="pesan" name="pesan" placeholder="Pesan" rows={3} />
              </div>

             <button className="w-full py-3 bg-background text-white rounded-lg hover:bg-primary hover:text-primary hover:border transition-all duration-200">
                Kirim Pesan
             </button>
            </form>
          </CardContent>
        </Card>
        <Card className="w-[486px] text-white bg-background">
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

      <div className="container-custom mb-24">
        <div className="mt-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15863.544455559926!2d106.82046331510698!3d-6.214134695651983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3f7e1f9b5c1%3A0x61a3f7e77a3a16b!2sGedung%20Millenium%20Centennial%20Center!5e0!3m2!1sen!2sid!4v1645123335465!5m2!1sen!2sid"
            width="100%"
            height="450"
            style={{ border: 0 }}

            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default KontakHero;
