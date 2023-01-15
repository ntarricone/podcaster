import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { EpisodesContext } from '../../components/Layouts/PodcastLayout';

export default function Episode() {
  const { episodeId } = useParams();

  const episodes = useContext(EpisodesContext);

  const [isTrackLoaded, setIsTrackLoaded] = useState(false);

  const episode = episodes.find(({ id }) => id === episodeId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!episodeId) return <h1>NOT FOUND</h1>;

  const { title, description, track } = episode || {};

  function onCanPlay() {
    setIsTrackLoaded(true);
  }
  return (
    <div className="shadow flex flex-column p-10">
      <h1 className="bold">{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: description || '' }} className="mt-10" />
      {track && (
        <div className="border-top mt-20">
          {!isTrackLoaded && <div className="spinner mt-20" />}
          <audio
            className={`w-full mt-20 ${isTrackLoaded ? 'd-block' : 'hidden'}`}
            controls
            src={track}
            onCanPlay={onCanPlay}
          />
        </div>
      )}
    </div>
  );
}
