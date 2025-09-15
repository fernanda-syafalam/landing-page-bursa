"use client";

import useSWR from "swr";
import api from "@/lib/axios";

const fetcher = (url: string) => api.get(url).then((res) => res.data);

export function useCrypto(page: number, limit: number, search: string, tab: string) {
  const { data, error, isLoading } = useSWR(
    `/crypto?page=${page}&limit=${limit}&search=${search}&tab=${tab}`,
    fetcher,
    { revalidateOnFocus: false }
  );

  return {
    cryptos: data?.data || [],
    isLoading,
    isError: error,
  };
}
