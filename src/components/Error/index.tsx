import { Link } from 'react-router-dom';
import s from './styles.module.css';

export default function Error() {
  return (
    <div className={`flex flex-column align-center justify-center ${s.error}`}>
      <h1>There has been an error, please try another podcast</h1>
      <Link to="/" className="bold mt-10">
        Go Back
      </Link>
    </div>
  );
}
