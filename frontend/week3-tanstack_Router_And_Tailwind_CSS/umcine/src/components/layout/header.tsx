import { Link } from "@tanstack/react-router";

function Header() {
  return (
    <header className="topbar">
      <div className="brand-row">
        <a className="brand" href="#" aria-label="UMCine 홈">
          <span className="brand-mark" aria-hidden="true">
            <img src="/icons/movie.svg" alt="" />
          </span>
          <span className="brand-name">UMCine</span>
        </a>

        <nav className="main-navigation" aria-label="주요 메뉴">
          <Link to = "/" className="active" href="#movies" aria-current="page">
            영화
          </Link>
          <Link to="/search">검색</Link>
          <a href="#my-page">내 정보</a>
        </nav>
      </div>

      <div className="top-actions">
        <button className="search-button" type="button" aria-label="영화 검색">
          <img src="/icons/search.svg" alt="" />
        </button>
        <button className="login-button" type="button">
          로그인
        </button>
      </div>
    </header>
  )
}

export default Header
