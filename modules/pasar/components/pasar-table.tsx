'use client';

import React, { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { SearchIcon } from 'lucide-react';

import Pagination from '@/components/pagination';
import { AvatarImage, Avatar } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { getLatestCrypto } from '@/services/cryptoService';

const tabs = [
  { title: 'Semua', active: true },
  { title: 'Listing terbaru', active: false },
  { title: 'Top Gainer', active: false }
];

// This is your original component, now focused on client-side logic
const PasarClient = () => {
  const searchParams = useSearchParams();
  const [latest, setLatest] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const page = Number(searchParams.get('page') || 1);
  const perPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Set loading to true on new fetch
      try {
        const latestData = await getLatestCrypto(page, perPage, 'USD');
        setLatest(latestData);
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false); // Always set loading to false after fetch
      }
    };
    fetchData();
  }, [page]); // Dependency array is correct

  return (
    <div className="relative container-custom mt-28">
      {/* Search and Tabs */}
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

      {/* Crypto Table */}
      <div className="my-10 overflow-x-auto">
        <Card className="p-4 mb-4 bg-white rounded-lg mx-4 lg:mx-0 w-fit lg:w-full">
          <table className="min-w-3xl lg:min-w-full text-center">
            <thead className="text-muted-foreground text-sm font-light sticky top-0 bg-white">
              <tr>
                <th className="px-4 py-4 text-left">Koin</th>
                <th className="px-4 py-4 text-right">Harga Terakhir</th>
                <th className="px-4 py-4 text-right">Perubahan 24 Jam</th>
                <th className="px-4 py-4 text-right">Volume 24 Jam</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan={4} className="h-40 text-center">
                    {/* A slightly better spinner */}
                    <div className="inline-block animate-spin h-8 w-8 border-4 border-b-blue-500 rounded-full" />
                  </td>
                </tr>
              ) : (
                latest.map((coin) => (
                  <tr key={coin.id} className="hover:bg-[#F6F9FF]">
                    <td className="px-4 py-4 flex items-center gap-2 justify-start">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png`} alt={coin.name}/>
                      </Avatar>
                      <div className="text-left">
                        <span className="text-sm font-semibold">{coin.name}</span>
                        <p className="text-xs text-gray-500">{coin.symbol}</p> {/* Changed slug to symbol, more common */}
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm font-semibold text-right">{coin.quote.USD.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
                    <td className="px-4 py-4 text-sm font-semibold text-right">
                      <span className={cn('inline-block px-4 py-1 text-xs font-semibold rounded-full', coin.quote.USD.percent_change_24h < 0 ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800')}>
                        {coin.quote.USD.percent_change_24h.toFixed(2)}%
                      </span>
                    </td>
                    <td className="px-4 py-4 text-sm font-semibold text-right">{coin.quote.USD.volume_24h.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </Card>
      </div>
      
      {/* Glow effect */}
      <div
        className="absolute -right-40 -bottom-32 w-[80px] h-[80px] rounded-full z-10"
        style={{
          backgroundColor: '#B2CCFF',
          boxShadow: '0 0 150px 150px #B2CCFF',
          opacity: 0.35
        }}
      ></div>

      <Pagination totalPages={Math.ceil(182 / perPage)} />
    </div>
  );
};

export default PasarClient;