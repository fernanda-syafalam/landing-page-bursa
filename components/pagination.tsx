'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

export interface PaginationProps {
  totalPages: number;
}

const useWindowWidth = () => {
  const [width, setWidth] = useState<number>(1024);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
};

export default function Pagination({ totalPages }: PaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const width = useWindowWidth();

  // baca currentPage dari URL
  const currentPage = Number(searchParams.get('page')) || 1;

  const createPageUrl = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', page.toString());
    return `${pathname}?${params.toString()}`;
  };

  const pages = useMemo(() => {
    const list: (number | string)[] = [];
    let maxVisible = 7;

    if (width < 480) maxVisible = 5;
    else if (width < 768) maxVisible = 7;
    else maxVisible = 9;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) list.push(i);
    } else {
      if (currentPage <= Math.floor(maxVisible / 2)) {
        for (let i = 1; i <= maxVisible - 2; i++) list.push(i);
        list.push('...', totalPages);
      } else if (currentPage >= totalPages - Math.floor(maxVisible / 2)) {
        list.push(1, '...');
        for (let i = totalPages - (maxVisible - 3); i <= totalPages; i++) list.push(i);
      } else {
        list.push(1, '...');
        const offset = Math.floor((maxVisible - 4) / 2);
        for (let i = currentPage - offset; i <= currentPage + offset; i++) {
          list.push(i);
        }
        list.push('...', totalPages);
      }
    }

    return list;
  }, [currentPage, totalPages, width]);

  return (
    <div className="flex justify-center mt-8">
      <nav className="flex items-center gap-2" aria-label="Pagination">
        {/* Prev */}
        <Link
          href={createPageUrl(Math.max(1, currentPage - 1))}
          aria-disabled={currentPage === 1}
          className={`flex items-center justify-center w-9 h-9 rounded-md text-gray-600 
            focus:outline-none focus:ring-2 focus:ring-indigo-500
            ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : 'hover:bg-gray-100'}
          `}
        >
          <ChevronLeft className="w-4 h-4" />
        </Link>

        {/* Pages */}
        {pages.map((page, idx) =>
          page === '...' ? (
            <span key={idx} className="flex items-center justify-center w-9 h-9 text-gray-400">
              ...
            </span>
          ) : (
            <Link
              key={idx}
              href={createPageUrl(page as number)}
              aria-current={currentPage === page ? 'page' : undefined}
              className={`flex items-center justify-center w-9 h-9 rounded-md 
                focus:outline-none focus:ring-2 focus:ring-indigo-500
                ${currentPage === page ? 'bg-indigo-50 text-indigo-700 font-medium' : 'hover:bg-gray-100 text-gray-700'}`}
            >
              {page}
            </Link>
          )
        )}

        {/* Next */}
        <Link
          href={createPageUrl(Math.min(totalPages, currentPage + 1))}
          aria-disabled={currentPage === totalPages}
          className={`flex items-center justify-center w-9 h-9 rounded-md text-gray-600
            focus:outline-none focus:ring-2 focus:ring-indigo-500
            ${currentPage === totalPages ? 'cursor-not-allowed opacity-50' : 'hover:bg-gray-100'}
          `}
        >
          <ChevronRight className="w-4 h-4" />
        </Link>
      </nav>
    </div>
  );
}
