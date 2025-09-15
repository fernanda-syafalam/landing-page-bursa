'use client';

import DotText from '@/components/dot-text';
import FooterSection from '@/components/footer';
import Navbar from '@/components/navbar';
import Pagination from '@/components/pagination';
import { AvatarImage, AvatarFallback, Avatar } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import { getLatestCrypto } from '@/services/cryptoService';
import { SearchIcon } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const tabs = [
  { title: 'Semua', active: true },
  { title: 'Listing terbaru', active: false },
  { title: 'Top Gainer', active: false }
];

const AsetPage = () => {
  const searchParams = useSearchParams();
  const [cryptoList, setCryptoList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const page = Number(searchParams.get('page') || 1);
  const perPage = 10;
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getLatestCrypto(page, perPage, 'USD');
        setCryptoList(res);
      } catch (err) {
        console.error('[Fetch Error]', err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <Navbar variant="white" />
      <div className="min-h-screen">
        <div className="container-custom mt-42 flex flex-col justify-center items-center gap-4 text-center lg:text-left">
          <DotText text="Aset" />
          <h1 className="text-2xl lg:text-5xl font-bold">Aset Kripto yang Terdaftar</h1>
          <p className="text-lg text-muted-foreground max-w-[720px] text-center">
            Daftar ini memuat aset kripto yang telah terdaftar dan diawasi sesuai ketentuan yang berlaku di Indonesia.
          </p>
        </div>

        <div className="container-custom mt-28">
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
                <input type="text" placeholder="Cari Aset" className="border border-gray-300 rounded-md px-3 py-2 w-full" />
                <SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </form>
          </div>

          <div className="my-10 mb-24 mx-4 overflow-x-auto pb-4">
            <Card className="p-4 bg-white rounded-lg mb-12 w-fit lg:w-full">
              {loading ? (
                <p className="text-center py-10">Loading...</p>
              ) : (
                <table className="min-w-2xl lg:w-full text-center">
                  <thead className="text-muted-foreground text-sm font-light">
                    <tr>
                      <th className="px-4 py-4 text-left">Koin</th>
                      <th className="px-4 py-4 text-right">Symbol</th>
                      <th className="px-4 py-4 text-right">Harga (USD)</th>
                      <th className="px-4 py-4 text-right">Market Cap</th>
                    </tr>
                  </thead>

                  <tbody>
                    {cryptoList.map((coin, index) => (
                      <tr key={index} className="hover:bg-[#F6F9FF]">
                        <td className="px-4 py-4 flex items-center gap-2 justify-start">
                          <Avatar className="w-12 h-12">
                            <AvatarImage src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png`} alt={coin.symbol} />
                            <AvatarFallback>{coin.symbol}</AvatarFallback>
                          </Avatar>
                          <div className="text-left">
                            <span className="text-sm font-semibold">{coin.symbol}</span>
                            <p className="text-xs text-gray-500">{coin.name}</p>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm font-semibold text-right">{coin.symbol}</td>
                        <td className="px-4 py-4 text-sm font-semibold text-right">${coin.quote.USD.price.toFixed(2)}</td>
                        <td className="px-4 py-4 text-sm font-semibold text-right">${coin.quote.USD.market_cap.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </Card>

            <Pagination totalPages={182} />
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default AsetPage;
