import { NextResponse } from 'next/server';
import axios, { AxiosError } from 'axios'; // Import AxiosError

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = Number(searchParams.get('page') || 1);
  const perPage = Number(searchParams.get('perPage') || 10);
  const convert = searchParams.get('convert') || 'USD';

  try {
    const response = await axios.get(
      'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
      {
        headers: {
          'X-CMC_PRO_API_KEY': process.env.COINMARKETCAP_API_KEY!,
        },
        params: {
          start: (page - 1) * perPage + 1,
          limit: perPage,
          convert,
        },
      }
    );

    return NextResponse.json({ data: response.data.data });
  } catch (err) { // Catch the error without a type annotation first
    // Use a type guard to check if it's an AxiosError
    if (axios.isAxiosError(err)) {
      // Now TypeScript knows `err` has a `response` property
      return NextResponse.json(
        { error: err.response?.data?.status?.error_message || 'Failed to fetch from CoinMarketCap' },
        { status: err.response?.status || 500 }
      );
    }

    // Handle non-Axios errors
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}