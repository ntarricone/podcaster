import { Link } from 'react-router-dom';
import { IPodcast } from '../../../interfaces/IPodcast';
import s from './styles.module.css';

export default function SnapCard({ id, img, title, author }: IPodcast) {
  return (
    <Link to={`/podcast/${id}`}>
      <div className={`${s.card} relative flex flex-column`} data-testid="card">
        <div className={`absolute ${s.img}`} style={{ backgroundImage: `url(${img})` }} />
        <div className={s.spacing} />
        <div className="flex flex-column">
          <p className="bold">{title}</p>
          <p>Author: {author}</p>
        </div>
      </div>
    </Link>
  );
}
