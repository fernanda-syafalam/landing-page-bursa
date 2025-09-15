'use client';
import FooterSection from '@/components/footer';
import Navbar from '@/components/navbar';
import Pagination from '@/components/pagination';
import { AvatarImage, AvatarFallback, Avatar } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import CatatanSection from '@/modules/pasar/components/catatan';
import PasarHeroSection from '@/modules/pasar/components/pasar-hero';
import { getLatestCrypto } from '@/services/cryptoService';
import { SearchIcon } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

import React, { useEffect, useState } from 'react';
const tabs = [
  {
    title: 'Semua',
    active: true
  },
  {
    title: 'Listing terbaru',
    active: false
  },
  {
    title: 'Top Gainer',
    active: false
  }
];
const PasarPage = () => {
  const searchParams = useSearchParams();
  const [latest, setLatest] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const page = Number(searchParams.get('page') || 1);
  const perPage = 10;
  useEffect(() => {
    const fetchData = async () => {
      try {
        // 3 aset terbaru
        const latestData = await getLatestCrypto(page, perPage, 'USD');
        setLatest(latestData);
        setIsLoading(false);
      } catch (e) {
        console.error(e);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [page]);

  return (
    <div>
      <Navbar variant="white" />
      <PasarHeroSection />
      <div className="relative container-custom mt-28">
        <div className="hidden lg:flex justify-between">
          <div className="flex gap-4">
            {tabs.map((item, index) => (
              <button key={index} className={`text py-2.5 px-8 rounded-full ${item.active ? 'bg-[#D9E6FFE5]' : ''}`}>
                {item.title}
              </button>
            ))}
          </div>

          <form className="flex items-center gap-2">
            <div className="relative w-72">
              <input type="text" placeholder="Cari Aset" className="border border-gray-300 rounded-md px-3 py-2 w-full " />
              <SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </form>
        </div>

        <div className="my-10 overflow-x-auto">
          <Card className="p-4 mb-4 bg-white rounded-lg mx-4 lg:mx-0 w-fit lg:w-full">
            <table className="min-w-3xl lg:min-w-full text-center">
              <thead className="text-muted-foreground text-sm font-light sticky top-0 bg-white">
                <tr>
                  <th className="px-4 py-4 text-left">Koin</th>
                  <th className="px-4 py-4 text-right">Harga Terkahir</th>
                  <th className="px-4 py-4 text-right">Perubahan 24 Jam</th>
                  <th className="px-4 py-4 text-right">Volume 24 Jam</th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <tr>
                    <td colSpan={4} className="text-center">
                      <div className="animate-spin h-5 w-5 border-b border-gray-900 rounded-full" />
                    </td>
                  </tr>
                ) : (
                  latest.map((coin, index) => (
                    <tr key={index} className="hover:bg-[#F6F9FF]">
                      <td className="px-4 py-4 flex items-center gap-2 justify-start">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png`} />
                        </Avatar>
                        <div className="text-left">
                          <span className="text-sm font-semibold">{coin.name}</span>
                          <p className="text-xs text-gray-500">{coin.slug}</p>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm font-semibold text-right">{coin.quote.USD.price}</td>
                      <td className="px-4 py-4 text-sm font-semibold text-right">
                        <span
                          className={cn(
                            'inline-block px-4 py-1 text-xs font-semibold rounded-full',
                            coin.quote.USD.percent_change_24h < 0 ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                          )}
                        >
                          {coin.quote.USD.percent_change_24h}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-sm font-semibold text-right">{coin.quote.USD.volume_24h}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </Card>
        </div>

        <div
          className="absolute -right-40 -bottom-32 w-[80px] h-[80px] rounded-full z-10"
          style={{
            backgroundColor: '#B2CCFF', // biru transparan
            boxShadow: '0 0 150px 150px #B2CCFF', // glow
            opacity: 0.35
          }}
        ></div>

        <Pagination totalPages={Math.ceil(182 / perPage)} />
      </div>
      <CatatanSection />
      <FooterSection />
    </div>
  );
};

export default PasarPage;

