import DotText from '@/components/dot-text';
import FooterSection from '@/components/footer';
import Navbar from '@/components/navbar';
import Pagination from '@/components/pagination';
import { AvatarImage, AvatarFallback, Avatar } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
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

const listCrypto = [
  {
    icon: '',
    coin: 'BTC',
    name: 'Bitcoin',
    kategori: 'Cryptocurrency',
    terdaftar: '20 Okt 2023'
  },
  {
    icon: '',
    coin: 'ETH',
    name: 'Ethereum',
    kategori: 'Cryptocurrency',
    terdaftar: '20 Okt 2023'
  },
  {
    icon: '',
    coin: 'USDT',
    name: 'Tether',
    kategori: 'Stablecoin',
    terdaftar: '20 Okt 2023'
  },
  {
    icon: '',
    coin: 'BNB',
    name: 'Binance Coin',
    kategori: 'Cryptocurrency',
    terdaftar: '20 Okt 2023'
  },
  {
    icon: '',
    coin: 'MATIC',
    name: 'Polygon',
    kategori: 'Cryptocurrency',
    terdaftar: '20 Okt 2023'
  },
  {
    icon: '',
    coin: 'DOGE',
    name: 'Dogecoin',
    kategori: 'Cryptocurrency',
    terdaftar: '20 Okt 2023'
  },
  {
    icon: '',
    coin: 'SOL',
    name: 'Solana',
    kategori: 'Cryptocurrency',
    terdaftar: '20 Okt 2023'
  },
  {
    icon: '',
    coin: 'XRP',
    name: 'Ripple',
    kategori: 'Cryptocurrency',
    terdaftar: '20 Okt 2023'
  }
];

const AsetPage = () => {
  return (
    <div>
      <Navbar variant="white" />
      <div className="min-h-screen">
        <div className="container-custom mt-42 flex flex-col justify-center items-center gap-4 ">
          <DotText text="Aset" />
          <h1 className="text-5xl font-bold">Aset Kripto yang Terdaftar</h1>
          <p className="text-lg text-muted-foreground max-w-[720px] text-center">
            Daftar ini memuat aset kripto yang telah terdaftar dan diawasi sesuai ketentuan yang berlaku di Indonesia.
          </p>
        </div>

        <div className="container-custom mt-28">
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

          <div className="my-10 mb-24">
            <Card className="p-4 bg-white rounded-lg shadow-2xl/10 mb-12">
              <table className="w-full text-center">
                <thead className="text-muted-foreground text-sm font-light">
                  <tr>
                    <th className="px-4 py-4 text-left">Koin</th>
                    <th className="px-4 py-4 text-right">Symbol</th>
                    <th className="px-4 py-4 text-right">Kategori</th>
                    <th className="px-4 py-4 text-right">Tanggal Terdaftar</th>
                  </tr>
                </thead>

                <tbody>
                  {listCrypto.map((coin, index) => (
                    <tr key={index} className="hover:bg-[#F6F9FF]">
                      <td className="px-4 py-4 flex items-center gap-2 justify-start">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src="https://github.com/" />
                          <AvatarFallback>{coin.coin}</AvatarFallback>
                        </Avatar>
                        <div className="text-left">
                          <span className="text-sm font-semibold">{coin.icon}</span>
                          <p className="text-xs text-gray-500">{coin.name}</p>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm font-semibold text-right">{coin.coin}</td>
                      <td className="px-4 py-4 text-sm font-semibold text-right">{coin.kategori}</td>
                      <td className="px-4 py-4 text-sm font-semibold text-right">{coin.terdaftar}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>

            <Pagination currentPage={1} totalPages={182} />
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default AsetPage;
