import { IEpisode } from '../../interfaces/IEpisode';

export default function Episode() {
  //TODO - Contemplate that description could be an html
  //get episode data from context?
  const episode: Partial<IEpisode> = {
    title: 'Wilco - Magnetized',
    description: ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt recusandae a quos eos
    repellendus voluptate voluptatem molestiae suscipit, odio aperiam corporis laudantium,
    soluta harum dolor nam nostrum amet? Aperiam, praesentium?`,
    track: '/media/cc0-audio/MOCK.mp3'
  };

  const { title, description, track } = episode;
  return (
    <div className="shadow flex flex-column p-10">
      <h1 className="bold">{title}</h1>
      <p className="mt-10">{description}</p>
      <div className="border-top mt-20">
        <audio className="w-full mt-20" controls src={track} />
      </div>
    </div>
  );
}
