import { type FC, type MouseEventHandler, useMemo } from "react";
import { UqPaginationItem } from "./UqPaginationItem";
import { UqPaginationItemType } from "../../enum";

export interface UqPaginationProps {
  As?: "button" | "a";
  totalResults: number;
  resultsPerPage: number;
  currentPage: number;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const UqPagination: FC<UqPaginationProps> = ({
  As = "button",
  totalResults,
  resultsPerPage,
  currentPage,
  onClick,
}) => {
  /**
   * The last page is the totalResults / resultsPerPage, rounded up.
   */
  const lastPage = useMemo<number>(
    () => Math.ceil(totalResults / resultsPerPage),
    [totalResults, resultsPerPage],
  );

  /**
   * Create an array representation of the visible pages.
   */
  const visiblePages = useMemo<number[]>(() => {
    const pages: number[] = [];

    // If there's only 1 visible page go no further.
    if (!totalResults || resultsPerPage >= totalResults) {
      return pages;
    }

    const totalPages = Math.ceil(totalResults / resultsPerPage);

    // Show all pages.
    // Do this if there are less than 6 pages,
    // or if incorrect props have been passed down.
    if (totalPages < 6 || currentPage > lastPage) {
      let marker = 2;
      while (marker < lastPage) {
        pages.push(marker);
        marker += 1;
      }
      return pages;
    }

    // Show up to page 4 if we are on the first page.
    if (currentPage === 1) {
      let marker = 2;
      while (marker < 5) {
        pages.push(marker);
        marker += 1;
      }
      return pages;
    }

    // Show the last 4 pages if we are on the last page.
    if (currentPage === lastPage) {
      let marker = lastPage - 3;
      while (marker < lastPage) {
        pages.push(marker);
        marker += 1;
      }
      return pages;
    }

    // Show the current page plus and minus 1 page.
    let start = Math.max(currentPage - 1, 2);
    let end = Math.min(currentPage + 1, lastPage - 1);
    // Unless we are on page 2, then show plus 2 pages.
    if (start === 2) {
      end = start + 2;
    }
    // Unless we are on the second last page, then show minus 2 pages.
    if (end === lastPage - 1) {
      start = end - 2;
    }

    // Build the array of visible pages.
    let marker = start;
    while (marker <= end) {
      pages.push(marker);
      marker += 1;
    }

    return pages;
  }, [totalResults, lastPage, resultsPerPage, currentPage]);

  /**
   * The first ellipsis will show if the first visible page is > 2.
   */
  const showFirstEllipsis = useMemo<boolean>(
    () => visiblePages.length !== 0 && visiblePages[0] !== 2,
    [visiblePages],
  );

  /**
   * The last ellipsis will show if the last visible page is -1 less than the
   * last page.
   */
  const showLastEllipsis = useMemo<boolean>(
    () =>
      visiblePages.length !== 0 &&
      visiblePages[visiblePages.length - 1] !== lastPage - 1,
    [visiblePages, lastPage],
  );

  return (
    <nav className="uq-pagination" aria-label="Pagination">
      <ul className="uq-pagination__list">
        {currentPage !== 1 && (
          <UqPaginationItem
            As={As}
            type={UqPaginationItemType.Previous}
            onClick={onClick}
            value={`${currentPage - 1}`}
          />
        )}
        <UqPaginationItem
          As={As}
          number={1}
          current={currentPage === 1}
          onClick={onClick}
          value="1"
        />
        {showFirstEllipsis && (
          <UqPaginationItem
            As={As}
            type={UqPaginationItemType.Ellipsis}
            value={`${currentPage - 3}`}
            number={currentPage - 3}
            onClick={onClick}
          />
        )}
        {visiblePages.map((page) => (
          <UqPaginationItem
            As={As}
            key={page.toString()}
            number={page}
            current={currentPage === page}
            onClick={onClick}
            value={`${page}`}
          />
        ))}
        {showLastEllipsis && (
          <UqPaginationItem
            As={As}
            type={UqPaginationItemType.Ellipsis}
            value={`${currentPage + 3}`}
            number={currentPage + 3}
            onClick={onClick}
          />
        )}
        {lastPage > 1 && (
          <UqPaginationItem
            As={As}
            number={lastPage}
            current={currentPage === lastPage}
            onClick={onClick}
            value={`${lastPage}`}
          />
        )}
        {currentPage !== lastPage && (
          <UqPaginationItem
            As={As}
            type={UqPaginationItemType.Next}
            onClick={onClick}
            value={`${currentPage + 1}`}
          />
        )}
      </ul>
    </nav>
  );
};
