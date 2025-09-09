import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export default function Pagination({ currentPage, totalPages }: PaginationProps) {
  const generatePages = () => {
    const pages = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 4) {
        pages.push(1, 2, 3, 4, 5, "...", totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(
          1,
          "...",
          totalPages - 4,
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
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
            currentPage === 1
              ? "cursor-not-allowed opacity-50"
              : "hover:bg-gray-100"
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
        </Link>

        {/* Halaman */}
        {generatePages().map((page, idx) =>
          page === "..." ? (
            <span
              key={idx}
              className="flex items-center justify-center w-9 h-9 text-gray-400"
            >
              ...
            </span>
          ) : (
            <Link
              key={idx}
              href={`?page=${page}`}
              className={`flex items-center justify-center w-9 h-9 rounded-md  ${
                currentPage === page
                  ? "bg-[#EEF3FF] text-[#213965] "
                  : "hover:bg-gray-100 text-gray-700"
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
            currentPage === totalPages
              ? "cursor-not-allowed opacity-50"
              : "hover:bg-gray-100"
          }`}
        >
          <ChevronRight className="w-4 h-4" />
        </Link>
      </nav>
    </div>
  );
}
