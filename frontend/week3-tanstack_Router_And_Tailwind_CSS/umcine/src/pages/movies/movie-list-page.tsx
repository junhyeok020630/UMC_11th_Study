import { useState } from 'react'

import MovieGrid from '../../components/movies/movie-grid'
import Pagination from '../../components/movies/pagination'
import { movies } from '../../data/movies'

export function MovieListPage() {
  const [movieList, setMovieList] = useState(movies)

  const handleToggleBookmark = (movieId: number) => {
    setMovieList((currentMovies) =>
      currentMovies.map((movie) =>
        movie.id === movieId ? { ...movie, isBookmarked: !movie.isBookmarked } : movie,
      ),
    )
  }

  return (
    <>
      <main className="movie-list" id="movies">
        <h1>영화 목록</h1>
        <MovieGrid movies={movieList} onToggleBookmark={handleToggleBookmark} />
        <Pagination currentPage={1} totalPages={5} />
      </main>

      <footer className="footer">
        <img src="/images/logos/tmdb-logo.svg" alt="TMDB" />
        <p>This product uses the TMDB API but is not endorsed or certified by TMDB.</p>
      </footer>
    </>
  )
}
