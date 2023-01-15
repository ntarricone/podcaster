import { ReactNode } from 'react';
import { useParams } from 'react-router-dom';
import useFetchData from '../../../hooks/useFetchData';
import { IFetchedPodcast } from '../../../interfaces/IFetchedPodcast';
import DetailedCard from '../../Cards/DetailedCard';
import PageLoader from '../../PageLoader';
import s from './styles.module.css';

const API = import.meta.env.VITE_API_URL_PODCAST_DETAIL;

export default function PodcastLayout({ children }: { children: ReactNode }) {
  const { podcastId } = useParams();

  const { data, isLoading, error }: { data: IFetchedPodcast; isLoading: boolean; error: any } =
    useFetchData(API + podcastId);

  if (error) return <h3>Data could not be fetched correctly :(</h3>;

  if (!data && isLoading) return <PageLoader />;

  //TODO  - change for actual data
  //need to find where episodes are coming from and transform them
  const podcast = {
    title: 'Soy un titulo',
    author: 'Soy un autor',
    img: 'https://is3-ssl.mzstatic.com/image/thumb/Podcasts113/v4/07/88/b3/0788b35f-1829-6fbd-2488-ecaf83b8d8ab/mza_9852863690630397024.jpg/170x170bb.png',
    description:
      'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum '
  };

  return (
    <div className={s.container}>
      <aside className={s.sidebar}>
        <DetailedCard {...podcast} />
      </aside>
      <main className={s.main}>{children}</main>
    </div>
  );
}
