interface PaginationProps {
  currentPage: number
  totalPages: number
}

function Pagination({ currentPage, totalPages }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1)

  return (
    <nav className="pagination" aria-label="영화 목록 페이지">
      <button type="button" className="pagination-arrow" aria-label="이전 페이지" disabled>
        <img src="/icons/chevron-left.svg" alt="" />
      </button>

      <div className="pagination-pages">
        {pages.map((page) => (
          <button
            type="button"
            className={`page-button${page === currentPage ? ' active' : ''}`}
            aria-current={page === currentPage ? 'page' : undefined}
            key={page}
          >
            {page}
          </button>
        ))}
      </div>

      <button type="button" className="pagination-arrow" aria-label="다음 페이지">
        <img src="/icons/chevron-right.svg" alt="" />
      </button>
    </nav>
  )
}

export default Pagination
