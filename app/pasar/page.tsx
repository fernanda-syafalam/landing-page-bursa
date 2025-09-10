import FooterSection from '@/components/footer';
import Navbar from '@/components/navbar';
import Pagination from '@/components/pagination';
import { AvatarImage, AvatarFallback, Avatar } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import CatatanSection from '@/modules/pasar/components/catatan';
import PasarHeroSection from '@/modules/pasar/components/pasar-hero';
import { SearchIcon } from 'lucide-react';

import React from 'react';
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

const coinsUpdate = [
  {
    icons: '',
    coin: 'BTC',
    name: 'Bitcoin',
    lastPrice: 'Rp 420.000.000',
    change: '+2.5%',
    volume: 'Rp 1.500.000.000'
  },
  {
    icons: '',
    coin: 'ETH',
    name: 'Ethereum',
    lastPrice: 'Rp 27.000.000',
    change: '+1.8%',
    volume: 'Rp 750.000.000'
  },
  {
    icons: '',
    coin: 'USDT',
    name: 'Tether',
    lastPrice: 'Rp 14.500',
    change: '-0.1%',
    volume: 'Rp 2.500.000.000'
  },
  {
    icons: '',
    coin: 'BNB',
    name: 'Binance Coin',
    lastPrice: 'Rp 4.500.000',
    change: '+3.2%',
    volume: 'Rp 450.000.000'
  },
  {
    icons: '',
    coin: 'ADA',
    name: 'Cardano',
    lastPrice: 'Rp 7.500',
    change: '+4.1%',
    volume: 'Rp 225.000.000'
  },
  {
    icons: '',
    coin: 'XRP',
    name: 'Ripple',
    lastPrice: 'Rp 1.200',
    change: '+1.5%',
    volume: 'Rp 180.000.000'
  },
  {
    icons: '',
    coin: 'SOL',
    name: 'Solana',
    lastPrice: 'Rp 150.000',
    change: '+2.1%',
    volume: 'Rp 120.000.000'
  },
  {
    icons: '',
    coin: 'DOGE',
    name: 'Dogecoin',
    lastPrice: 'Rp 1.100',
    change: '-0.9%',
    volume: 'Rp 110.000.000'
  },
  {
    icons: '',
    coin: 'MATIC',
    name: 'Polygon',
    lastPrice: 'Rp 1.800',
    change: '+0.5%',
    volume: 'Rp 90.000.000'
  },
  {
    icons: '',
    coin: 'AVAX',
    name: 'Avalanche',
    lastPrice: 'Rp 2.500',
    change: '+3.2%',
    volume: 'Rp 60.000.000'
  }
];
const PasarPage = () => {
  return (
    <div>
      <Navbar variant="white" />
      <PasarHeroSection />
      <div className="relative container-custom mt-28">
        <div className="flex justify-between">
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

        <div className="my-10">
          <Card className="p-4 mb-4 bg-white rounded-lg shadow-2xl/10 ">
            <table className="w-full text-center">
              <thead className="text-muted-foreground text-sm font-light">
                <tr>
                  <th className="px-4 py-4 text-left">Koin</th>
                  <th className="px-4 py-4 text-right">Harga Terkahir</th>
                  <th className="px-4 py-4 text-right">Perubahan 24 Jam</th>
                  <th className="px-4 py-4 text-right">Volume 24 Jam</th>
                </tr>
              </thead>

              <tbody>
                {coinsUpdate.map((coin, index) => (
                  <tr key={index} className="hover:bg-[#F6F9FF]">
                    <td className="px-4 py-4 flex items-center gap-2 justify-start">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src="https://github.com/" />
                        <AvatarFallback>{coin.coin}</AvatarFallback>
                      </Avatar>
                      <div className="text-left">
                        <span className="text-sm font-semibold">{coin.coin}</span>
                        <p className="text-xs text-gray-500">{coin.name}</p>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm font-semibold text-right">{coin.lastPrice}</td>
                    <td className="px-4 py-4 text-sm font-semibold text-right">
                      <span
                        className={cn(
                          'inline-block px-4 py-1 text-xs font-semibold rounded-full',
                          coin.change.includes('-') ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                        )}
                      >
                        {coin.change}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-sm font-semibold text-right">{coin.volume}</td>
                  </tr>
                ))}
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

        <Pagination currentPage={1} totalPages={182} />
      </div>
      <CatatanSection />
      <FooterSection />
    </div>
  );
};

export default PasarPage;
