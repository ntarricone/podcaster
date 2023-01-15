import { Link } from 'react-router-dom';
import s from './styles.module.css';

export default function Navbar() {
  return (
    <nav className={`flex between align-center ${s.nav}`}>
      <div>
        <Link to="/">
          <p>Podcaster</p>
        </Link>
      </div>
      {/* TODO - Make spinner appear only on page transition*/}
      {/* <div>
        <div className="spinner" />
      </div> */}
    </nav>
  );
}
