import { Link } from 'react-router-dom';
import { IPodcast } from '../../../interfaces/IPodcast';
import s from './styles.module.css';

export default function DetailedCard(podcast: Partial<IPodcast>) {
  const { id, img, title, author, description } = podcast;
  return (
    <div className={`shadow ${s.card}`}>
      <div className="border-bottom flex justify-center p-10">
        <Link to={`/podcast/${id}`}>
          <img className={s.img} src={img} alt={String(img)} />
        </Link>
      </div>
      <Link to={`/podcast/${id}`}>
        <div className="flex flex-column p-10 border-bottom">
          <p className="bold">{title}</p>
          <p>{author}</p>
        </div>
      </Link>
      <div className="mt-10">
        <p className="flex flex-column bold">Description:</p>
        <p className="mt-10">{description}</p>
      </div>
    </div>
  );
}
