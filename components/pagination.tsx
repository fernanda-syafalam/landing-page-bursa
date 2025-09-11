'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

const useWindowWidth = () => {
  const [width, setWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 1024);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
};

export default function Pagination({ currentPage, totalPages }: PaginationProps) {
  const width = useWindowWidth();
  const generatePages = () => {
    const pages = [];

    let maxVisible = 7;
    if (width < 480) maxVisible = 5; // mobile kecil
    else if (width < 768) maxVisible = 7; // mobile besar / tablet
    else if (width < 1024) maxVisible = 9; // tablet landscape
    else maxVisible = 9; // desktop

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= Math.floor(maxVisible / 2)) {
        for (let i = 1; i <= maxVisible - 2; i++) pages.push(i);
        pages.push('...', totalPages);
      } else if (currentPage >= totalPages - Math.floor(maxVisible / 2)) {
        pages.push(1, '...');
        for (let i = totalPages - (maxVisible - 3); i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1, '...');
        const offset = Math.floor((maxVisible - 4) / 2);
        for (let i = currentPage - offset; i <= currentPage + offset; i++) {
          pages.push(i);
        }
        pages.push('...', totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="flex justify-center mt-8 ">
      <nav className="flex items-center gap-2" aria-label="Pagination">
        {/* Prev */}
        <Link
          href={`?page=${Math.max(1, currentPage - 1)}`}
          className={`flex items-center justify-center w-9 h-9 rounded-md  text-gray-600 ${
            currentPage === 1 ? 'cursor-not-allowed opacity-50' : 'hover:bg-gray-100'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
        </Link>

        {/* Halaman */}
        {generatePages().map((page, idx) =>
          page === '...' ? (
            <span key={idx} className="flex items-center justify-center w-9 h-9 text-gray-400">
              ...
            </span>
          ) : (
            <Link
              key={idx}
              href={`?page=${page}`}
              className={`flex items-center justify-center w-9 h-9 rounded-md  ${
                currentPage === page ? 'bg-[#EEF3FF] text-[#213965] ' : 'hover:bg-gray-100 text-gray-700'
              }`}
            >
              {page}
            </Link>
          )
        )}

        {/* Next */}
        <Link
          href={`?page=${Math.min(totalPages, currentPage + 1)}`}
          className={`flex items-center justify-center w-9 h-9 rounded-md  text-gray-600 ${
            currentPage === totalPages ? 'cursor-not-allowed opacity-50' : 'hover:bg-gray-100'
          }`}
        >
          <ChevronRight className="w-4 h-4" />
        </Link>
      </nav>
    </div>
  );
}
