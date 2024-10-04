"use client";
import { use, useEffect, useState } from "react";
import { Button, IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

interface PaginationProps {
  count: number;
  page: number;
}

const Pagination: React.FC<PaginationProps> = ({ count, page = 1 }) => {
  const [currentPage, setCurrentPage] = useState(page);

  useEffect(() => {
    setCurrentPage(page);
  }, [page]);

  const getPageNumbers = (delta: number = 1) => {
    const pageNum = currentPage > count ? 1 : currentPage;
    const pages: (number | string)[] = [1];
    if (pageNum > delta + 2) {
      pages.push("...");
    }
    const start = Math.max(2, pageNum - delta);
    const end = Math.min(count - 1, pageNum + delta);
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    if (pageNum < count - delta - 1) {
      pages.push("...");
    }
    if (count > 1) pages.push(count);
    return pages;
  };

  const handlePageChange = (page: number | string) => {
    if (typeof page === "number") {
      if (page < 1 || page > count) return;
      setCurrentPage(page);
    }
  };

  return (
    <>
      {page <= count && page !== 0 && (
        <div className="flex items-center justify-center h-full gap-2">
          <IconButton aria-label="Left Icon" disabled={page === 1} icon={<ChevronLeftIcon />} />
          {getPageNumbers(1).map((pageNumber, index) => (
            <Button onClick={() => handlePageChange(pageNumber)} key={index} variant={pageNumber === currentPage ? "solid" : "outline"} colorScheme={"blue"} disabled={pageNumber === "..."}>
              {pageNumber}
            </Button>
          ))}
          <IconButton aria-label="Right Icon" disabled={page === count} icon={<ChevronRightIcon />} />
        </div>
      )}
    </>
  );
};

export default Pagination;
