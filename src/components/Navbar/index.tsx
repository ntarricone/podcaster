import s from './styles.module.css';

export default function Navbar() {
  return (
    <nav className={`flex between ${s.nav}`}>
      <div>
        <p>Podcaster</p>
      </div>
      {/* TODO - Eventually a loader will be needed for page transition */}
      {/* <div>
        <p>Loader</p>
      </div> */}
    </nav>
  );
}
