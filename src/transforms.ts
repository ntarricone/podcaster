import { Entry } from './interfaces/IFetchedPodcasts';
import { IFetchedPodcastXML, Item } from './interfaces/IFetchedPodcastXML';
import { IPodcast } from './interfaces/IPodcast';
import { IEpisode } from './interfaces/IEpisode';
import { formatDate } from './utils';

const podcasts = (podcasts: Entry[]): IPodcast[] =>
  podcasts.map((podcast) => ({
    id: podcast.id.attributes['im:id'],
    title: podcast['im:name'].label,
    author: podcast['im:artist'].label,
    description: podcast.summary.label,
    img: podcast['im:image'][2].label,
    episodes: []
  }));

const podcast = ({
  fetchedPodcastXML,
  podcastId
}: {
  fetchedPodcastXML: IFetchedPodcastXML;
  podcastId: string;
}): IPodcast => {
  const {
    rss: { channel }
  } = fetchedPodcastXML;

  return {
    id: podcastId,
    title: channel.title?._text,
    author: channel['itunes:author']?._text,
    description: channel.description?._text,
    img: channel['itunes:image']?._attributes.href,
    episodes: episode(channel.item)
  };
};

//NOTE - The use of index below is used because it is not documented where to get the id from
//I have tried from episode['itunes:episode']?._text || episode.guid._text but the often are repeated, non-existant or broken
const episode = (episodes: Item[]): IEpisode[] =>
  episodes.map((episode, index) => ({
    id: String(index),
    date: formatDate(episode.pubDate?._text),
    description: episode.description?._cdata,
    duration: episode['itunes:duration']?._text,
    title: episode.title?._text,
    track: episode.enclosure?._attributes.url
  }));

export const transform = {
  podcasts,
  podcast
};
