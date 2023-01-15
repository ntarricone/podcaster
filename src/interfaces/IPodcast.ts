import { IEpisode } from './IEpisode';

export interface IPodcast {
  id: string;
  img: string;
  title: string;
  author: string;
  description: string;
  episodes: IEpisode[];
}
