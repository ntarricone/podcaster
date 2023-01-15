import { useState } from 'react';
import SnapCard from '../../components/Cards/SnapCard';
import Grid from '../../components/Grid';
import Search from '../../components/Search';
import useFetchData from '../../hooks/useFetchData';
import { IFetchedPodcasts } from '../../interfaces/IFetchedPodcasts';
import { IPodcast } from '../../interfaces/IPodcast';
import { transform } from '../../transforms';
import { normalizeString } from '../../utils';
import s from './styles.module.css';

const API = import.meta.env.VITE_API_URL_TOP_PODCASTS;

export default function Home() {
  const { data, error, isLoading }: { data: IFetchedPodcasts; error: any; isLoading: boolean } =
    useFetchData(API);

  const [filter, setFilter] = useState<{ search: string }>({ search: '' });

  function onSearch(value: string) {
    setFilter((prev) => ({ ...prev, search: value }));
  }

  if (error) return <h3>Data could not be fetched correctly :(</h3>;

  if (!data || isLoading)
    return (
      <div className={s.loading}>
        <div className="spinner" />
      </div>
    );

  const podcasts: IPodcast[] = transform.podcast(data.feed.entry);

  const filteredPodcasts = podcasts.filter(({ title, author }) => {
    if (!filter.search) return podcasts;

    const normalizedTitle = normalizeString(title);
    const normalizedAuthor = normalizeString(author);
    const normalizedSearch = normalizeString(filter.search);
    return (
      normalizedTitle.includes(normalizeString(normalizedSearch)) ||
      normalizedAuthor.includes(normalizedSearch)
    );
  });

  return (
    <>
      <div className={`flex end ${s.filterMargin}`}>
        <Search length={filteredPodcasts.length} onSearch={onSearch} />
      </div>
      <Grid>
        {filteredPodcasts.map((podcast) => (
          <SnapCard key={podcast.id} {...podcast} />
        ))}
      </Grid>
    </>
  );
}
