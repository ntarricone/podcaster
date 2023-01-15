import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import s from './styles.module.css';

export default function Navbar() {
  const { pathname } = useLocation();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    //since change in route programatically is almost immediate, a setTimeout was added for the user to see
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [pathname]);

  return (
    <nav className={`flex between align-center ${s.nav}`}>
      <div>
        <Link to="/">
          <p>Podcaster</p>
        </Link>
      </div>
      {isLoading && (
        <div>
          <div className="spinner" />
        </div>
      )}
    </nav>
  );
}
