import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import FallbackLoader from 'components/common/FallbackLoader/FallbackLoader';

const SharedLayout = () => {
  return (
    <>
      <header className="container">
        <nav>
          <NavLink to="/" className="navLink">
            Home
          </NavLink>
          <NavLink to="/movies" className="navLink">
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
