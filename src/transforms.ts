import { Entry } from './interfaces/IFetchedPodcasts';
import { IPodcast } from './interfaces/IPodcast';

const podcast = (podcasts: Entry[]): IPodcast[] =>
  podcasts.map((podcast) => ({
    id: podcast.id.label,
    title: podcast['im:name'].label,
    author: podcast['im:artist'].label,
    description: podcast.summary.label,
    img: podcast['im:image'][2].label
  }));

export const transform = {
  podcast
};
