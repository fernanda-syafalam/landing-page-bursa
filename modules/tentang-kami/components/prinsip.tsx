import { Button } from '@/components/ui/button';
import { CheckCircle2, LockIcon, RocketIcon, ShieldCheckIcon } from 'lucide-react';
import React from 'react';

const prinsipItems = [
  {
    icon: LockIcon,
    title: 'Keamanan',
    desc: 'Menjaga aset dan data pengguna melalui standar keamanan informasi yang ketat serta sertifikasi internasional.'
  },
  {
    icon: CheckCircle2,
    title: 'Kepatuhan',
    desc: 'Beroperasi sesuai regulasi nasional dan global untuk memastikan transparansi dan perlindungan investor.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Kepercayaan',
    desc: 'Membangun ekosistem yang kredibel melalui layanan yang transparan, profesional, dan berkelanjutan.'
  },
  {
    icon: RocketIcon,
    title: 'Inovasi',
    desc: 'Mengembangkan teknologi berbasis blockchain dan solusi digital yang adaptif terhadap kebutuhan pasar.'
  }
];

const memberProfile = [
  {
    name: 'Dwi Kurniawan',
    desc: 'CEO, IGX',
    profile: 'https://i.pravatar.cc/300?img=12'
  },
  {
    name: 'Rifky Maulana',
    desc: 'CTO, IGX',
    profile: 'https://i.pravatar.cc/300?img=32'
  },
  {
    name: 'Budi Santoso',
    desc: 'CFO, IGX',
    profile: 'https://i.pravatar.cc/300?img=45'
  },
  {
    name: 'Siti Rahma',
    desc: 'CMO, IGX',
    profile: 'https://i.pravatar.cc/300?img=47'
  },
  {
    name: 'Andi Wijaya',
    desc: 'COO, IGX',
    profile: 'https://i.pravatar.cc/300?img=18'
  },
  {
    name: 'Nurul Aini',
    desc: 'Komisaris, IGX',
    profile: 'https://i.pravatar.cc/300?img=56'
  },
  {
    name: 'Adi Wibowo',
    desc: 'Direktur Pengawasan, IGX',
    profile: 'https://i.pravatar.cc/300?img=23'
  },
  {
    name: 'Ratna Dewi',
    desc: 'Direktur Keuangan, IGX',
    profile: 'https://i.pravatar.cc/300?img=65'
  }
];

const PrinsipSection = () => {
  return (
    <section className="min-h-screen w-full bg-[linear-gradient(to_bottom,#F6F9FF00,#F0F5FF)] pb-40">
      {/* Prinsip */}
      <div className="container-custom flex gap-3 items-center flex-col md:flex-row">
        <div className="max-w-[485px] h-full flex flex-col justify-center ">
          <h3 className="text-2xl font-bold">Prinsip Utama</h3>
          <p className="text-muted-foreground text-lg mt-10">
            Kami percaya bahwa sebuah ekosistem kripto yang sehat hanya dapat tercipta dengan berpegang pada nilai-nilai utama berikut
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full md:w-[683px]">
          {prinsipItems.map((item, index) => (
            <div key={index} className="bg-[#FAFAFA] p-6 rounded-lg border border-[#DFE4EA] flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <item.icon className="h-8 w-8 text-primary" />
                <h4 className="font-bold text-lg">{item.title}</h4>
              </div>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Anggota */}
      <div className="my-24 container-custom flex flex-col justify-center items-center gap-6">
        <h1 className="text-2xl font-bold">Direksi & Komisaris</h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
          {memberProfile.map((item, index) => (
            <div key={index} className="relative group rounded-md h-80 w-72 overflow-hidden shadow-md hover:shadow-lg transition">
              {/* Foto */}
              <img src={item.profile} alt={item.name} className="w-full h-full object-cover" />

              {/* Overlay Hover */}
              <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="text-white font-semibold text-lg">{item.name}</h4>
                <p className="text-gray-200 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container-custom h-62 flex justify-between items-center  text-white px-7 bg-[linear-gradient(272.45deg,#192B4D_0%,#213865_47.77%,#192B4D_100%)] rounded-lg ">
        <div className=" flex flex-col justify-start gap-4 align-middle">
          <h1 className="text-3xl">Bergabung & Berkarya Bersama Kami</h1>
          <p className="text-lg">Jadillah bagian dari perubahan besar di industri keuangan digital.</p>
        </div>
        <Button variant="secondary">Lihat Lowongan</Button>
      </div>
      <div className=""></div>
    </section>
  );
};

export default PrinsipSection;
