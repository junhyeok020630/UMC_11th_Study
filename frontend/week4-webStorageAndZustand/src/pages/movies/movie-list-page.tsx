import { useEffect, useState } from 'react'

import { Footer } from '../../components/layout/footer'
import MovieGrid from '../../components/movies/movie-grid'
import Pagination from '../../components/movies/pagination'
import { movies } from '../../data/movies'
import { readBookmarkIds, saveBookmarkIds } from '../../utils/bookmark-storage'

export function MovieListPage() {
  const [bookmarkIds, setBookmarkIds] = useState(() => readBookmarkIds())

  useEffect(() => {
    saveBookmarkIds(bookmarkIds)
  }, [bookmarkIds])

  const movieList = movies.map((movie) => ({
    ...movie,
    isBookmarked: bookmarkIds.includes(movie.id),
  }))

  const handleToggleBookmark = (movieId: number) => {
    setBookmarkIds((currentBookmarkIds) =>
      currentBookmarkIds.includes(movieId)
        ? currentBookmarkIds.filter((id) => id !== movieId)
        : [...currentBookmarkIds, movieId],
    )
  }

  return (
    <>
      <main className="flex w-full flex-1 flex-col gap-5 px-20 py-6" id="movies">
        <h1 className="m-0 text-[38px] leading-[44px] font-bold tracking-[-1.71px]">영화 목록</h1>
        <MovieGrid movies={movieList} onToggleBookmark={handleToggleBookmark} />
        <Pagination currentPage={1} totalPages={5} />
      </main>

      <Footer />
    </>
  )
}
