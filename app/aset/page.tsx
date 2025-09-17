import React, { Suspense } from 'react';
import DotText from '@/components/dot-text';
import FooterSection from '@/components/footer';
import Navbar from '@/components/navbar';
import AsetClient from '@/modules/aset/components/aset-client';

// This is the main page - a Server Component.
// It renders the static layout.
const AsetPage = () => {
  return (
    <div>
      <Navbar variant="white" />
      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="relative container-custom mt-42 flex flex-col justify-center items-center gap-4 text-center">
          <div
            className="absolute -left-40 -top-32 w-[330px] h-[330px] rounded-full z-10"
            style={{ backgroundColor: '#B2CCFF', boxShadow: '0 0 200px 200px #B2CCFF', opacity: 0.3 }}
          />
          <DotText text="Aset" />
          <h1 className="text-2xl lg:text-5xl font-bold">Aset Kripto yang Terdaftar</h1>
          <p className="text-lg text-muted-foreground max-w-[720px] text-center">
            Daftar ini memuat aset kripto yang telah terdaftar dan diawasi sesuai ketentuan yang berlaku di Indonesia.
          </p>
        </div>

        {/* Suspense Boundary for the Client Component */}
        <Suspense fallback={<AsetPageSkeleton />}>
          <AsetClient />
        </Suspense>
      </div>
      <FooterSection />
    </div>
  );
};

// A fallback skeleton for the entire content area managed by the client
const AsetPageSkeleton = () => {
  return (
    <div className="container-custom mt-28 animate-pulse">
      <div className="hidden lg:flex justify-between">
        <div className="flex gap-4">
          <div className="h-12 w-32 bg-gray-200 rounded-full"></div>
          <div className="h-12 w-40 bg-gray-200 rounded-full"></div>
          <div className="h-12 w-36 bg-gray-200 rounded-full"></div>
        </div>
        <div className="h-12 w-72 bg-gray-200 rounded-md"></div>
      </div>
      <div className="mt-10 p-4 bg-white rounded-lg">
        <div className="h-10 bg-gray-200 rounded-md mb-4"></div>
        <div className="space-y-3">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-14 bg-gray-200 rounded-md"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AsetPage;