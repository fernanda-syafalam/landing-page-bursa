import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { icons } from 'lucide-react';
import React from 'react';

const items = [
  {
    icon: '',
    coin: 'BTC',
    name: 'Bitcoin',
    status: 'Baru',
    desc: 'Disetujui 20 Okt 2023'
  },
  {
    icon: '',
    coin: 'ETH',
    name: 'Ethereum',
    status: 'Baru',
    desc: 'Disetujui 20 Okt 2023'
  },
  {
    icon: '',
    coin: 'USDT',
    name: 'Tether',
    status: 'Baru',
    desc: 'Disetujui 20 Okt 2023'
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
  }
];

const AssetSection = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-[#F6F9FF] to-[#F6F9FF00] py-36">
      <div className="container-custom">
        <div className="flex justify-between">
          <h1 className="text-3xl font-semibold">Asset Crypto Terbaru</h1>
          <Button variant="outline" className="bg-white text-black border-black hover:bg-background px-5 hover:text-white">
            Lihat Semua Aset
          </Button>
        </div>

        <div className="flex flex-nowrap justify-center gap-5 col-span-12">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col gap-8 basis-1/3 mt-10 h-36  px-6 py-4 rounded-sm bg-white">
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="https://github.com/" />
                    <AvatarFallback>{item.coin}</AvatarFallback>
                  </Avatar>
                  <div className="">
                    <h2 className="text-xl font-semibold">{item.coin}</h2>
                    <p className="text-gray-600">{item.name}</p>
                  </div>
                </div>

                <div className="">
                  <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">{item.status}</span>
                </div>
              </div>

              <div className="flex gap-2 items-center">
                <span className="text-sm text-gray-500">{item.desc}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-36">
          <div className="flex justify-between items-center align-baseline">
            <div className="">
              <h1 className="text-3xl font-semibold">Data Pasar Terkini </h1>
              <p className="text-muted-foreground mt-4">
                Perkembangan harga dan data kripto terkini yang diperbarui setiap hari secara transparan
              </p>
            </div>

            <Button variant="outline" className="bg-white text-black border-black hover:bg-background px-6 hover:text-white">
              Selengkapnya
            </Button>
          </div>
        </div>

        <div className="mt-10">
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
      </div>
    </section>
  );
};

export default AssetSection;
