import axios from 'axios';

// Buat instance Axios
const coinmarketcapApi = axios.create({
  baseURL: 'https://sandbox-api.coinmarketcap.com/v1',
  headers: {
    'X-CMC_PRO_API_KEY': process.env.COINMARKETCAP_API_KEY,
  },
  timeout: 10_000 // timeout 10 detik biar gak ngegantung
});

// Request Interceptor → logging, inject API key
coinmarketcapApi.interceptors.request.use(
  config => {
    console.log(`[CMC API] Request: ${config.method?.toUpperCase()} ${config.headers}`);
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Response Interceptor → handle success/error
coinmarketcapApi.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    console.error('[CMC API] Error:', error.response?.data || error.message);
    return Promise.reject(new Error(error.response?.data?.status?.error_message || 'CoinMarketCap API Error'));
  }
);

export default coinmarketcapApi;
