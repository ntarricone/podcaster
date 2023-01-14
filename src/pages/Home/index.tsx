import { Link } from 'react-router-dom';
import Search from '../../components/Search';

export default function Home() {
  function onSearch(value: string) {
    console.log(value);
  }
  return (
    <>
      <div className={`flex end mt-10`}>
        <Search length={100} onSearch={onSearch} />
      </div>
      <Link to="/podcast/655156">Link to podcast</Link>
      <h1>Home</h1>
    </>
  );
}
