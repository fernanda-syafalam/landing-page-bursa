import { Mail, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';

const FooterSection = () => {
  const navigation = [
    { label: 'Beranda', href: '/' },
    { label: 'Pasar', href: '/market' },
    { label: 'Aset', href: '/assets' },
    // { label: 'Anggota Bursa', href: '/members' },
    // { label: 'Regulasi', href: '/regulations' },
    // { label: 'Berita', href: '/news' },
    { label: 'Tentang Kami', href: '/about' },
    // { label: 'Karir', href: '/career' },
    { label: 'Kontak', href: '/contact' }
  ];

  const socials = [
    {
      href: 'https://www.facebook.com/igx.id/',
      icon: FaFacebookF,
      alt: 'Facebook'
    },
    {
      href: 'https://twitter.com/igx_id',
      icon: FaXTwitter,
      alt: 'Twitter'
    },
    {
      href: 'https://www.instagram.com/igx.id/',
      icon: AiFillInstagram 
,
      alt: 'Instagram'
    },

    {
      href: 'https://www.linkedin.com/company/igx-id/',
      icon: FaLinkedinIn,
      alt: 'LinkedIn'
    }
  ];

  return (
    <footer className="w-full bg-[#0b1437] text-white">
      {/* Main Footer */}
      <div className="container-custom px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Logo & Description */}
        <div>
          <Image src="/icons/logo.png" alt="IGX Logo" width={120} height={40} className="mb-4" />
          <p className="text-sm leading-relaxed text-white/70">
            IGX menyediakan sistem dan infrastruktur untuk perdagangan dan pelaporan aset kripto secara aman dan terintegrasi.
          </p>

          {/* Social Media */}
          <div className="mt-6 flex gap-4">
            {socials.map(sosmed => (
              <Link
                key={sosmed.alt}
                href={sosmed.href}
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-80 transition-opacity p-3 bg-white/10 rounded-full"
              >
                <sosmed.icon size={15} className="text-white/40" />
              </Link>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Navigasi</h3>
          <ul className="grid grid-cols-2 gap-y-3 text-white/70">
            {navigation.map(item => (
              <li key={item.label}>
                <Link href={item.href} className="hover:text-primary transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Hubungi Kami</h3>
          <address className="not-italic text-sm leading-relaxed mb-4 text-white/70">
            Gedung Millennium Centennial Center Lantai 9, <br />
            Jl. Jenderal Sudirman No.Kav. 25, Kuningan, <br />
            Kecamatan Setiabudi, Kota Jakarta Selatan, <br />
            Daerah Khusus Ibukota Jakarta 12920
          </address>
          <div className="flex items-center gap-4 align-middle mt-2">
            <p className="flex items-center gap-2 text-sm text-white/70">
              <Mail size={18} />
              <a href="mailto:info@igxchange.com">info@igxchange.com</a>
            </p>

            <p className="flex items-center gap-2 text-sm text-white/70">
              <Phone size={18} />
              <a href="tel:021222222">021-39704045</a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 py-6 text-center text-xs text-white/70">
        Hak Cipta © 2025 | PT Indonesia Global Exchange | Semua Hak Cipta Dilindungi Undang-Undang
      </div>
    </footer>
  );
};

export default FooterSection;
