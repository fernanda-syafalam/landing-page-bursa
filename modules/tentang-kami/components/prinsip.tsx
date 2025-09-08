import { CheckCircle2, Dot, Layers2Icon, LockIcon, PinIcon, RocketIcon, ShieldCheckIcon } from 'lucide-react';
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

const PrinsipSection = () => {
  return (
    <section className="min-h-screen w-full bg-[linear-gradient(to_bottom,#F6F9FF00,#F0F5FF)]">
      <div className="container-custom flex gap-3 items-center align-middle">
        <div className="max-w-[485px] h-full flex flex-col justify-center ">
          <h3 className="text-2xl font-bold">Prinsip Utama</h3>
          <p className="text-muted-foreground text-lg mt-10">
            Kami percaya bahwa sebuah ekosistem kripto yang sehat hanya dapat tercipta dengan berpegang pada nilai-nilai utama berikut
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 w-[683px]">
          {prinsipItems.map((item, index) => (
            <div key={index} className="bg-[#FAFAFA] p-6 rounded-lg border border-[#DFE4EA]  flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <item.icon className="h-8 w-8 text-primary" />
                <h4 className="font-bold text-lg">{item.title}</h4>
              </div>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrinsipSection;
