import React, { Suspense } from 'react';
import FooterSection from '@/components/footer';
import Navbar from '@/components/navbar';
import CatatanSection from '@/modules/pasar/components/catatan';
import PasarHeroSection from '@/modules/pasar/components/pasar-hero';
import PasarClient from '@/modules/pasar/components/pasar-table';

// This is now the main page component. It's a Server Component.
const PasarPage = () => {
  return (
    <div>
      <Navbar variant="white" />
      <PasarHeroSection />
      
      {/* Wrap the component that uses client-side hooks in Suspense */}
      <Suspense fallback={<LoadingSkeleton />}>
        <PasarClient />
      </Suspense>

      <CatatanSection />
      <FooterSection />
    </div>
  );
};

// A fallback component to show while the client component is loading
const LoadingSkeleton = () => {
  return (
    <div className="relative container-custom mt-28">
      <div className="h-12 bg-gray-200 rounded-full w-1/3 animate-pulse mb-10"></div>
      <div className="p-4 bg-white rounded-lg w-full animate-pulse">
        <div className="h-10 bg-gray-200 rounded mb-4"></div>
        <div className="space-y-3">
          <div className="h-12 bg-gray-200 rounded"></div>
          <div className="h-12 bg-gray-200 rounded"></div>
          <div className="h-12 bg-gray-200 rounded"></div>
          <div className="h-12 bg-gray-200 rounded"></div>
          <div className="h-12 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default PasarPage;