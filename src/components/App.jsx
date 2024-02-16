import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'pages/SharedLayout';

const HomePage = lazy(() => import('pages/home/HomePage'));
const MoviesPage = lazy(() => import('pages/movies/MoviesPage'));
const NotFoundPage = lazy(() => import('pages/notFound/NotFoundPage'));

const MovieDetailsPage = lazy(() =>
  import('pages/movieDetails/MovieDetailsPage')
);
const Cast = lazy(() => import('pages/movieDetails/components/Cast/Cast'));
const Reviews = lazy(() =>
  import('pages/movieDetails/components/Reviews/Reviews')
);

const App = () => {
  return (
    <Routes>
      <Route path="/goit-react-hw-05-movies" element={<SharedLayout />}>
        <Route path="home" element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
