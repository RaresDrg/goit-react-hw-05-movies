import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import FallbackLoader from 'components/common/FallbackLoader/FallbackLoader';

const SharedLayout = () => {
  return (
    <>
      <header className="container">
        <nav>
          <NavLink to="/goit-react-hw-05-movies/home" className="navLink">
            Home
          </NavLink>
          <NavLink to="/goit-react-hw-05-movies/movies" className="navLink">
            Movies
          </NavLink>
        </nav>
      </header>
      <main>
        <Suspense fallback={<FallbackLoader>Loading page ...</FallbackLoader>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
