import { missionItems } from '@/modules/home/components/mission';
import React from 'react';

const PeranSection = () => {
  return (
    <section className="w-full ">
      <div className="container-custom mt-36 mb-29 flex flex-col gap-5 justify-center items-center">
        <h1 className='text-3xl font-semibold'>Peran Kami dalam Ekosistem Kripto</h1>
        <div className="flex gap-12 items-center justify-center mt-10">
          {missionItems.map((item, index) => (
            <div key={index} className=" flex flex-col items-center text-center">
              <item.icons size={36} className="mb-4 text-white px-2 py-2 bg-[#213965] rounded-full" />
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PeranSection;
