import { createContext, ReactNode, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetchData from '../../../hooks/useFetchData';
import { IEpisode } from '../../../interfaces/IEpisode';
import { IFetchedPodcast } from '../../../interfaces/IFetchedPodcast';
import { transform } from '../../../transforms';
import DetailedCard from '../../Cards/DetailedCard';
import Error from '../../Error';
import PageLoader from '../../PageLoader';
import s from './styles.module.css';

const API = import.meta.env.VITE_API_URL_PODCAST_DETAIL;

export const EpisodesContext = createContext<IEpisode[]>([]);

export default function PodcastLayout({ children }: { children: ReactNode }) {
  const { podcastId } = useParams();

  const [podcastUrl, setPodcastUrl] = useState('');

  const { data }: { data: IFetchedPodcast } = useFetchData({ url: API + podcastId });
  const { data: podcastData, isLoading, error } = useFetchData({ url: podcastUrl, type: 'xml' });

  useEffect(() => {
    if (!data) return;
    setPodcastUrl(data.results[0].feedUrl);
  }, [data]);

  if (error) {
    console.log(error);
    return <Error />;
  }
  if (!podcastData || isLoading) return <PageLoader />;

  const podcast = transform.podcast({
    fetchedPodcastXML: podcastData,
    podcastId: podcastId!
  });

  return (
    <div className={s.container}>
      <aside className={s.sidebar}>
        <DetailedCard {...podcast} />
      </aside>
      <EpisodesContext.Provider value={podcast.episodes}>
        <main className={s.main}>{children}</main>
      </EpisodesContext.Provider>
    </div>
  );
}
