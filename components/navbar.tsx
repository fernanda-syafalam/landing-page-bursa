'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
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
  // { title: 'Berita', link: 'berita' },
  { title: 'Tentang Kami', link: 'tentang-kami' },
  { title: 'Kontak', link: 'kontak' }
];

const Navbar = ({ className, items = navItems, lang = 'ID', variant = 'blue' }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const variantStyle = {
    white: {
      wrapper: 'bg-white/90 backdrop-blur-md text-gray-800 shadow-lg',
      link: 'text-gray-700 hover:text-black transition-colors',
      active: 'text-black',
      icon: 'logo-biru.png'
    },
    blue: {
      wrapper: 'bg-white/10 backdrop-blur-md text-white/80',
      link: 'text-white/80 hover:text-white transition-colors',
      active: 'text-white',
      icon: 'logo.png'
    }
  };

  const currentVariant = variant === 'blue' && isScrolled ? 'white' : variant;
  const styles = variantStyle[currentVariant];

  return (
    <header
      className={cn(
        'w-full h-[75px] flex justify-between items-center fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out',
        styles.wrapper,
        className
      )}
    >
      <div className="container-custom px-4 lg:px-0 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src={`/icons/${styles.icon}`} alt="logo" width={98} height={45} priority />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center justify-between text-[16px]">
          <ul className="flex gap-10 mr-10">
            {items.map((item, index) => (
              <li key={index} className={cn(styles.link, 'cursor-pointer font-medium')}>
                <Link href={`/${item.link}`}>{item.title}</Link>
              </li>
            ))}
          </ul>
          <button
            className="flex items-center gap-1 cursor-pointer hover:opacity-80 transition"
            aria-label="Change language"
          >
            {lang} <ChevronDown size={18} />
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center justify-center p-2 rounded hover:bg-white/20 transition"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={cn(
            'absolute top-[75px] left-0 w-full bg-white/95 backdrop-blur-md shadow-md md:hidden transition-all duration-300'
          )}
        >
          <ul className="flex flex-col gap-4 px-6 py-6 text-gray-800">
            {items.map((item, index) => (
              <li key={index}>
                <Link
                  href={`/${item.link}`}
                  className="block py-2 text-lg font-medium hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="px-6 pb-6">
            <button
              className="flex items-center gap-1 cursor-pointer text-gray-800 hover:text-blue-600 transition"
              aria-label="Change language"
            >
              {lang} <ChevronDown size={18} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
