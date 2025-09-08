import Image from 'next/image';
import React from 'react';

const PerjalananTentangKami = () => {
  return (
    <section className="h-[727px] w-full bg-[#F6F9FF]">
      <div className="container-custom h-[587px] p-7 rounded mx-auto flex gap-3  bg-white">
        <div className="flex flex-col gap-6 max-w-[463px]">
          <h2 className="text-3xl font-semibold">Tonggak Perjalanan IGX</h2>
          <p className="text-lg text-muted-foreground">
            Setiap tahap mencerminkan dedikasi kami dalam menghadirkan regulasi yang transparan, ekosistem yang aman, serta pertumbuhan
            industri yang berkelanjutan.
          </p>
        </div>

        <div
          className="max-w-[653px] bg-no-repeat bg-center bg-cover p-6 flex flex-col justify-between"
          style={{ backgroundImage: 'url(/images/about-perjalanan.png)' }}
        >
          <div className="">
            <span className="px-5 py-2 rounded-full bg-white font-bold">2020</span>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-semibold">
              Lahirnya Visi Kami: <br /> Mewujudkan Regulasi Aset Kripto
            </h2>
            <p className='text-lg text-muted-foreground'>
              Di tengah tantangan awal industri kripto, IGX hadir dengan komitmen untuk menciptakan fondasi yang kuat bagi ekosistem
              perdagangan aset digital di Indonesia. Langkah awal ini menjadi dasar bagi pengembangan regulasi yang lebih terarah dan
              berkelanjutan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerjalananTentangKami;
