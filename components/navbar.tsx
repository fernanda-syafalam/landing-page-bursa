import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface NavbarItem {
  title: string;
  link: string;
}

export interface NavbarProps {
  className?: string;
  items?: NavbarItem[];
  lang?: string;
  variant?: 'white' | 'blue';
}

const navItems = [
  { title: 'Pasar', link: 'pasar' },
  { title: 'Aset', link: 'aset' },
  { title: 'Regulasi', link: 'regulasi' },
  { title: 'Berita', link: 'berita' },
  { title: 'Tentang Kami', link: 'tentang-kami' },
  { title: 'Kontak', link: 'kontak' }
];

const Navbar = ({ className, items = navItems, lang = 'ID', variant = 'blue' }: NavbarProps) => {
  const variantStyle = {
    white: {
      wrapper: 'bg-white text-gray-800 shadow',
      link: 'text-gray-700 hover:text-black',
      active: 'text-black',
      icon: 'logo-biru.png'
    },
    blue: {
      wrapper: 'bg-[#FFFFFF0F] text-white/80 shadow',
      link: 'text-white/80 hover:text-white',
      active: 'text-white',
      icon: 'logo.png'
    }
  };

  const styles = variantStyle[variant];

  return (
    <div className={cn(`w-full h-[75px] flex justify-between items-center fixed top-0 left-0 right-0 z-50`, styles.wrapper, className)}>
      <div className="container mx-auto flex items-center justify-between">
        <Link href={'/'}>
          <Image src={`/icons/${styles.icon}`} alt="logo" width={98} height={45} />
        </Link>

        <div className="flex items-center justify-between text-[16px]">
          <ul className="flex gap-10 mr-10">
            {items.map((item, index) => (
              <li key={index} className={cn(styles.link, 'cursor-pointer')}>
                <Link href={item.link}>{item.title}</Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-1 cursor-pointer">
            {lang} <ChevronDown size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
