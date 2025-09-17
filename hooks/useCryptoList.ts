'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getLatestCrypto } from '@/services/cryptoService';

export interface CryptoCoin {
  id: number;
  name: string;
  symbol: string;
  quote: {
    USD: {
      price: number;
      market_cap: number;
    };
  };
}

export function useCryptoList(perPage: number = 10, currency: string = 'USD') {
  const searchParams = useSearchParams();
  const [cryptoList, setCryptoList] = useState<CryptoCoin[]>([]);
  const [loading, setLoading] = useState(true);

  const page = Number(searchParams.get('page') || 1);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await getLatestCrypto(page, perPage, currency);
        setCryptoList(res);
      } catch (err) {
        console.error('[Fetch Error]', err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [page, perPage, currency]);

  return { cryptoList, loading, page };
}
