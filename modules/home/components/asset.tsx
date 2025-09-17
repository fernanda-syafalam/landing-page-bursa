"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { getLatestCrypto } from "@/services/cryptoService";
import { useEffect, useState } from "react";

export default function AssetSection() {
  const [latest, setLatest] = useState<any[]>([]);
  const [market, setMarket] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 3 aset terbaru
        const latestData = await getLatestCrypto(1, 3, "USD");
        setLatest(latestData);

        // 5 aset untuk data pasar
        const marketData = await getLatestCrypto(1, 5, "USD");
        setMarket(marketData);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-[#F6F9FF] to-[#F6F9FF00] py-36">
      <div className="container-custom px-4">
        {/* Header */}
        <div className="flex justify-center items-center lg:justify-between">
          <h1 className="text-3xl font-semibold">Asset Crypto Terbaru</h1>
          <Button
            variant="outline"
            className="hidden lg:block bg-white text-black border-black hover:bg-background px-5 hover:text-white"
          >
            Lihat Semua Aset
          </Button>
        </div>

        {/* Latest 3 */}
        <div className="flex flex-col lg:flex-row flex-nowrap justify-center gap-5 mt-10 col-span-12">
          {latest.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-8 basis-1/3 mx-4 lg:mx-0 h-36 px-6 py-4 rounded-lg bg-white border"
            >
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <Avatar className="w-12 h-12">
                    <AvatarImage
                      src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${item.id}.png`}
                    />
                    <AvatarFallback>{item.symbol}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="text-xl font-semibold">{item.symbol}</h2>
                    <p className="text-gray-600">{item.name}</p>
                  </div>
                </div>

                <div>
                  <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">
                    Baru
                  </span>
                </div>
              </div>

              <div className="flex gap-2 items-center">
                <span className="text-sm text-gray-500">
                  Disetujui {new Date(item.date_added).toLocaleDateString("id-ID")}
                </span>
             
              </div>
            </div>
          ))}
        </div>

        {/* Button mobile */}
        <div className="w-full flex justify-center my-12 lg:hidden">
          <Button
            variant="outline"
            className=" bg-white text-black border-black hover:bg-background px-5 hover:text-white"
          >
            Lihat Semua Aset
          </Button>
        </div>

        {/* Market Table */}
        <div className="lg:mt-36 z-10">
          <div className="flex text-center lg:text-left justify-between items-center align-baseline">
            <div>
              <h1 className="text-3xl font-semibold">Data Pasar Terkini </h1>
              <p className="text-muted-foreground mt-4">
                Perkembangan harga dan data kripto terkini yang diperbarui
                setiap hari secara transparan
              </p>
            </div>

            <Button
              variant="outline"
              className="hidden lg:block bg-white text-black border-black hover:bg-background px-6 hover:text-white"
            >
              Selengkapnya
            </Button>
          </div>
        </div>

        <div className="relative mt-10 overflow-x-auto lg:px-0 z-10">
          <Card className="p-4 mb-4 bg-white rounded-lg lg:mx-0 w-fit lg:w-full">
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
                {market.map((coin, index) => (
                  <tr key={index} className="hover:bg-[#F6F9FF]">
                    <td className="px-4 py-4 flex items-center gap-2 justify-start">
                      <Avatar className="w-12 h-12">
                        <AvatarImage
                          src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png`}
                        />
                        <AvatarFallback>{coin.symbol}</AvatarFallback>
                      </Avatar>
                      <div className="text-left">
                        <span className="text-sm font-semibold">
                          {coin.symbol}
                        </span>
                        <p className="text-xs text-gray-500">{coin.name}</p>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm font-semibold text-right">
                      ${coin.quote.USD.price.toLocaleString()}
                    </td>
                    <td className="px-4 py-4 text-sm font-semibold text-right">
                      <span
                        className={cn(
                          "inline-block px-4 py-1 text-xs font-semibold rounded-full",
                          coin.quote.USD.percent_change_24h < 0
                            ? "bg-red-100 text-red-800"
                            : "bg-green-100 text-green-800"
                        )}
                      >
                        {coin.quote.USD.percent_change_24h.toFixed(2)}%
                      </span>
                    </td>
                    <td className="px-4 py-4 text-sm font-semibold text-right">
                      ${coin.quote.USD.volume_24h.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>

        <div className="w-full flex justify-center mt-12 lg:hidden">
          <Button
            variant="outline"
            className=" bg-white text-black border-black hover:bg-background px-6 hover:text-white"
          >
            Selengkapnya
          </Button>
        </div>
      </div>
    </section>
  );
}
