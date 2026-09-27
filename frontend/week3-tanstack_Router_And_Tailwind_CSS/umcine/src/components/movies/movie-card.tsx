import { Link } from '@tanstack/react-router'

import type { Movie } from '../../types/movie'
import { cn } from '../../utils/cn'

interface MovieCardProps {
  movie: Movie
  onToggleBookmark: (movieId: number) => void
}

function MovieCard({ movie, onToggleBookmark }: MovieCardProps) {
  return (
    <article className="flex min-w-0 flex-col items-start gap-1">
      <div className="relative h-[274px] w-full overflow-hidden rounded-[10px] bg-[#e3e6eb]">
        <Link
          className="block h-full w-full"
          to="/movies/$movieId"
          params={{ movieId: String(movie.id) }}
        >
          <img
            className="block h-full w-full object-cover"
            src={movie.posterPath}
            alt={`${movie.title} 포스터`}
          />
        </Link>
        <button
          className={cn(
            'absolute top-[10px] right-[10px] flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-lg border border-white bg-[#17191e] p-0',
            movie.isBookmarked && 'border-[#2563eb] bg-[#2563eb]',
          )}
          type="button"
          aria-label={`${movie.title} ${movie.isBookmarked ? '즐겨찾기 해제' : '즐겨찾기 추가'}`}
          aria-pressed={movie.isBookmarked}
          onClick={() => onToggleBookmark(movie.id)}
        >
          <img
            className="h-6 w-6 invert"
            src={movie.isBookmarked ? '/icons/bookmark.svg' : '/icons/bookmark-outline.svg'}
            alt=""
          />
        </button>
      </div>
      <h2 className="m-0 w-full overflow-hidden pt-[5px] text-ellipsis whitespace-nowrap text-[14px] leading-[17px] font-extrabold text-[#17191e]">
        <Link
          className="text-inherit no-underline"
          to="/movies/$movieId"
          params={{ movieId: String(movie.id) }}
        >
          {movie.title}
        </Link>
      </h2>
      <time
        className="text-xs leading-[14px] font-normal text-[#969da8]"
        dateTime={movie.releaseDate.replaceAll('.', '-')}
      >
        {movie.releaseDate}
      </time>
    </article>
  )
}

export default MovieCard
