import api from '@/lib/axios';

export const getLatestCrypto = async (page = 1, perPage = 5, convert = 'USD') => {
  const res = await api.get('/crypto', {
    params: { page, perPage, convert }
  });
  return res.data.data;
};
