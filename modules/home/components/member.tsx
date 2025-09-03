import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const logos = [
  { name: 'ajaib', logo: '/icons/exchange/ajaib.png' },
  { name: 'bitwafe', logo: '/icons/exchange/bitwafe.png' },
  { name: 'bitwyre', logo: '/icons/exchange/bitwyre.png' },
  { name: 'floq', logo: '/icons/exchange/floq.png' },
  { name: 'mabee', logo: '/icons/exchange/mabee.png' },
  { name: 'nobi', logo: '/icons/exchange/nobi.png' },
  { name: 'pintu', logo: '/icons/exchange/pintu.png' },
  { name: 'pluang', logo: '/icons/exchange/pluang.png' },
  { name: 'reku', logo: '/icons/exchange/reku.png' },
  { name: 'tokocrypto', logo: '/icons/exchange/tokocrypto.png' },
  { name: 'triv', logo: '/icons/exchange/triv.png' },
  { name: 'upbit', logo: '/icons/exchange/upbit.png' },
];

const MemberSection = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-semibold my-14">Anggota Bursa</h1>

      <div className="relative w-full max-w-6xl overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_64px,_black_calc(100%-64px),transparent_100%)]">
        <motion.div
          className="flex items-center gap-12"
          animate={{ x: ['0%', '-20%'] }}
          transition={{
            ease: 'linear',
            duration: 20,
            repeat: Infinity,
          }}
          style={{ display: 'flex', width: 'max-content' }}
        >
          {/* trik: duplikat 2x deretan logo */}
          {[...logos, ...logos].map((logo, i) => (
            <div key={i} className="flex-shrink-0">
              <Image
                src={logo.logo}
                alt={logo.name}
                width={200}
                height={200}
                priority
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default MemberSection;
