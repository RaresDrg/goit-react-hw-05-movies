import { Suspense, useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';

import moviesService from 'service/moviesService';
import FallbackLoader from 'components/common/FallbackLoader/FallbackLoader';

import BackLink from 'components/common/BackLink/BackLink';
import MovieCard from './components/MovieCard/MovieCard';
import ErrorAlert from 'components/common/ErrorAlert/ErrorAlert';
import Loader from 'components/common/Loader/Loader';
import MovieAdditionalInfo from './components/MovieAdditionalInfo/MovieAdditionalInfo';

const MovieDetailsPage = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const getDetails = async () => {
      try {
        setIsLoading(true);
        const data = await moviesService.getMovieDetails(movieId);

        if (!data) {
          setError(`We are sorry. There is no details about the movie"`);
        }

        setMovieDetails(data);
      } catch (error) {
        setError(error.response.data.status_message);
      } finally {
        setIsLoading(false);
      }
    };

    getDetails();
  }, [movieId]);

  return (
    <>
      <section className="container">
        {<BackLink />}

        {movieDetails && <MovieCard movieDetails={movieDetails} />}
        {error && <ErrorAlert error={error} />}
        {isLoading && <Loader />}
      </section>

      {movieDetails && <MovieAdditionalInfo />}

      <Suspense fallback={<FallbackLoader>Loading subpage ...</FallbackLoader>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetailsPage;
