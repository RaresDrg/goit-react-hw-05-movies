import { IoIosArrowRoundBack } from 'react-icons/io';
import { Link, useLocation } from 'react-router-dom';
import styles from './BackLink.module.css';

const BackLink = () => {
  const location = useLocation();
  const backLinkHref =
    location.state?.from ?? `/goit-react-hw-05-movies/movies`;

  return (
    <div className={styles.backLink}>
      <Link to={backLinkHref}>
        <IoIosArrowRoundBack />
        <span>Go back</span>
      </Link>
    </div>
  );
};

export default BackLink;
