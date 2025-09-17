'use client';

import React, { useState, useMemo } from 'react';
import Pagination from '@/components/pagination';
import { AvatarImage, AvatarFallback, Avatar } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import { SearchIcon } from 'lucide-react';
import { useCryptoList } from '@/hooks/useCryptoList';

const tabs = ['Semua', 'Listing terbaru', 'Top Gainer'];

// This component contains all the client-side interactive logic.
const AsetClient = () => {
  const { cryptoList, loading } = useCryptoList(100, 'USD');
  const [activeTab, setActiveTab] = useState('Semua');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCryptoList = useMemo(() => {
    if (!searchTerm) return cryptoList;
    return cryptoList.filter(
      (coin) =>
        coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [cryptoList, searchTerm]);

  return (
    <div className="container-custom mt-28">
      <div className="hidden lg:flex justify-between">
        {/* Tabs with onClick handler */}
        <div className="flex gap-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text py-2.5 px-8 rounded-full transition-colors ${
                activeTab === tab ? 'bg-[#D9E6FFE5] font-semibold' : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Search form with onChange handler */}
        <form className="flex items-center gap-2">
          <div className="relative w-72">
            <input
              type="text"
              placeholder="Cari Aset (e.g. Bitcoin)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
            />
            <SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </form>
      </div>

      {/* Table Section */}
      <div className="my-10 mb-24 mx-4 overflow-x-auto pb-4">
        <Card className="p-4 bg-white rounded-lg mb-12 w-fit lg:w-full">
          {loading ? (
            <TableSkeleton />
          ) : (
            <table className="min-w-2xl lg:w-full text-center">
              <thead className="text-muted-foreground text-sm font-light">
                <tr>
                  <th className="px-4 py-4 text-left">Koin</th>
                  <th className="px-4 py-4 text-right">Harga (USD)</th>
                  <th className="px-4 py-4 text-right">Market Cap</th>
                </tr>
              </thead>
              <tbody>
                {filteredCryptoList.map((coin) => (
                  <tr key={coin.id} className="hover:bg-[#F6F9FF]">
                    <td className="px-4 py-4 flex items-center gap-3 justify-start">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png`} alt={coin.name} />
                        <AvatarFallback>{coin.symbol.substring(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div className="text-left">
                        <span className="text-sm font-semibold">{coin.name}</span>
                        <p className="text-xs text-gray-500">{coin.symbol}</p>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm font-semibold text-right">
                      ${coin.quote.USD.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 6 })}
                    </td>
                    <td className="px-4 py-4 text-sm font-semibold text-right">${coin.quote.USD.market_cap.toLocaleString('en-US')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </Card>
        <Pagination totalPages={Math.ceil(filteredCryptoList.length / 10)} />
      </div>
    </div>
  );
};

const TableSkeleton = () => (
  <div className="w-full animate-pulse">
    <div className="h-10 bg-gray-200 rounded-md mb-4"></div>
    <div className="space-y-3">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="h-14 bg-gray-200 rounded-md"></div>
      ))}
    </div>
  </div>
);

export default AsetClient;