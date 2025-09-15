import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = Number(searchParams.get("page") || 1);
  const perPage = Number(searchParams.get("perPage") || 10);
  const convert = searchParams.get("convert") || "USD";
  const search = searchParams.get("search") || "";

  try {
    const response = await axios.get(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
      {
        headers: {
          "X-CMC_PRO_API_KEY": process.env.COINMARKETCAP_API_KEY!,
        },
        params: {
          start: (page - 1) * perPage + 1,
          limit: perPage,
          convert,
        },
      }
    );

    return NextResponse.json({ data: response.data.data });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.response?.data || "Failed to fetch crypto" },
      { status: 500 }
    );
  }
}

