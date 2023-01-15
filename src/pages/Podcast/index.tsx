import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { EpisodesContext } from '../../components/Layouts/PodcastLayout';
import s from './styles.module.css';

export default function Podcast() {
  const { podcastId } = useParams();
  const navigate = useNavigate();

  const episodes = useContext(EpisodesContext);

  function navigateToEpisode(id: string) {
    navigate(`/podcast/${podcastId}/episode/${id}`);
  }
  return (
    <>
      <div className="shadow w-full p-10 flex align-center">
        <h3 className={`bold ${s.header}`}>Episodes: {episodes.length}</h3>
      </div>
      <div className="shadow w-full p-10 mt-10">
        <table className={s.table}>
          <thead className="border-bottom">
            <tr>
              <th className="w-70" align="left">
                Title
              </th>
              <th align="left">Date</th>
              <th align="right">Duration</th>
            </tr>
          </thead>
          <tbody>
            {episodes.map(({ id, title, date, duration }) => (
              <tr key={id}>
                <td className="pointer" onClick={() => navigateToEpisode(id!)}>
                  {title}
                </td>
                <td>{date}</td>
                <td align="right">{duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
