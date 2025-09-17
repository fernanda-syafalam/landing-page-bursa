import { Blogpost1 } from '@/components/blogpost1';
import { Button } from '@/components/ui/button';
import { CheckCircle2, FileCheckIcon, HandshakeIcon, LockIcon, RocketIcon, ShieldCheckIcon, TrendingUpIcon } from 'lucide-react';
import React from 'react';

const prinsipItems = [
  {
    icon: ShieldCheckIcon,
    title: 'Keamanan',
    desc: 'Menjaga aset dan data pengguna melalui standar keamanan informasi yang ketat serta sertifikasi internasional.'
  },
  {
    icon: FileCheckIcon,
    title: 'Kepatuhan',
    desc: 'Beroperasi sesuai regulasi nasional dan global untuk memastikan transparansi dan perlindungan investor.'
  },
  {
    icon: HandshakeIcon,
    title: 'Kepercayaan',
    desc: 'Membangun ekosistem yang kredibel melalui layanan yang transparan, profesional, dan berkelanjutan.'
  },
  {
    icon: TrendingUpIcon,
    title: 'Inovasi',
    desc: 'Mengembangkan teknologi berbasis blockchain dan solusi digital yang adaptif terhadap kebutuhan pasar.'
  }
];

const memberProfile = [
  {
    name: 'Lucky Edward Tjahjana',
    desc: 'Komisaris',
    profile: '/member/person.png'
  },
  {
    name: 'Oscar Adaman Darmawan',
    desc: 'Direktur Utama',
    profile: '/member/oscar.png'
  },
  {
    name: 'Aditya Bambang Rochedi',
    desc: 'Direksi',
    profile: '/member/person.png'
  },
  {
    name: 'Doni Gunawan',
    desc: 'Direksi',
    profile: '/member/person.png'
  },
  {
    name: 'Eka Rachmat Saputra',
    desc: 'Direksi',
    profile: '/member/person.png'
  }
];

const PrinsipSection = () => {
  return (
    <section className="min-h-screen w-full bg-[linear-gradient(to_bottom,#F6F9FF00,#F0F5FF)] mt-40 pb-20 lg:pb-40">
      {/* Prinsip */}
      <div className="container-custom px-4 lg:px-0 flex gap-3 items-center text-center lg:text-left flex-col md:flex-row">
        <div className="max-w-[485px] h-full flex flex-col justify-center ">
          <h3 className="text-3xl font-semibold">Prinsip Utama Kami</h3>
          <p className="text-muted-foreground text-lg mt-8">
            Kami percaya bahwa sebuah ekosistem kripto yang sehat hanya dapat tercipta dengan berpegang pada nilai-nilai utama berikut
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full md:w-[683px]">
          {prinsipItems.map((item, index) => (
            <div key={index} className="bg-[#FAFAFA] p-6 rounded-lg border border-[#DFE4EA] flex flex-col gap-2">
              <div className="flex items gap-2">
                <item.icon className="h-8 w-8 text-primary" />
                <h4 className="font-bold text-lg">{item.title}</h4>
              </div>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Anggota */}
      <div className="mt-40 px-4 lg:px-0 container-custom flex flex-col justify-center items-center gap-6">
        <h1 className="text-2xl font-bold">Komisaris & Direksi</h1>

        <div className="flex gap-4 items-center justify-center w-full mt-4">
          {memberProfile.slice(0, 3).map((item, index) => (
            <div key={index} className="relative group rounded-md h-80 w-72 overflow-hidden shadow-md hover:shadow-lg transition">
              {/* Foto */}
              <img src={item.profile} alt={item.name} className="w-full h-full object-cover" />

              {/* Overlay Hover */}
              <div className="absolute inset-0 mt-auto h-1/2 bg-gradient-to-b from-transparent to-[#213965E5] flex flex-col items-center  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="text-white font-semibold text-lg mt-auto ">{item.name}</h4>
                <p className="text-gray-200 text-sm mb-6">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-6 justify-center items-center w-full ">
          {memberProfile.slice(3, 5).map((item, index) => (
            <div key={index + 3} className="relative group rounded-md h-80 w-72 overflow-hidden shadow-md hover:shadow-lg transition">
              {/* Foto */}
              <img src={item.profile} alt={item.name} className="w-full h-full object-cover" />

              <div className="absolute inset-0 mt-auto h-1/2 bg-gradient-to-b from-transparent to-[#213965E5] flex flex-col items-center  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="text-white font-semibold text-lg mt-auto ">{item.name}</h4>
                <p className="text-gray-200 text-sm mb-6">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full px-4 hidden">
        <div className="container-custom h-72  lg:h-62 py-8 flex flex-col lg:flex-row justify-between items-center text-center lg:text-left text-white px-7 bg-[linear-gradient(272.45deg,#192B4D_0%,#213865_47.77%,#192B4D_100%)] rounded-lg ">
          <div className=" flex flex-col justify-start gap-4 align-middle">
            <h1 className="text-2xl lg:text-3xl">Bergabung & Berkarya Bersama Kami</h1>
            <p className="text-lg">
              Jadillah bagian dari perubahan besar di industri keuangan <br /> digital.
            </p>
          </div>
          <Button variant="secondary">Lihat Lowongan</Button>
        </div>
      </div>

      <div className=""></div>
    </section>
  );
};

export default PrinsipSection;
