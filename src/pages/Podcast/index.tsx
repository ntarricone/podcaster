import { useNavigate, useParams } from 'react-router-dom';
import { IEpisode } from '../../interfaces/IEpisode';
import s from './styles.module.css';

export default function Podcast() {
  const { podcastId } = useParams();
  const navigate = useNavigate();
  //TODO - Change mocked data
  const episodes: Partial<IEpisode>[] = [
    { id: '1', title: 'Título', date: '12/12/2022', duration: '14:00' },
    { id: '2', title: 'Título', date: '12/12/2022', duration: '14:00' },
    { id: '3', title: 'Título', date: '12/12/2022', duration: '14:00' },
    { id: '4', title: 'Título', date: '12/12/2022', duration: '14:00' },
    { id: '5', title: 'Título', date: '12/12/2022', duration: '14:00' },
    { id: '6', title: 'Título', date: '12/12/2022', duration: '14:00' },
    { id: '7', title: 'Título', date: '12/12/2022', duration: '14:00' },
    { id: '8', title: 'Título', date: '12/12/2022', duration: '14:00' },
    { id: '9', title: 'Título', date: '12/12/2022', duration: '14:00' },
    { id: '10', title: 'Título', date: '12/12/2022', duration: '14:00' },
    { id: '11', title: 'Título', date: '12/12/2022', duration: '14:00' },
    { id: '12', title: 'Título', date: '12/12/2022', duration: '14:00' }
  ];

  function navigateToEpisode(id: string) {
    navigate(`/podcast/${podcastId}/episode/${id}`);
  }
  return (
    <>
      <div className="shadow w-full p-10 flex align-center">
        {/* TODO - Make number dynamic */}
        <h3 className={`bold ${s.header}`}>Episodes: 66</h3>
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
