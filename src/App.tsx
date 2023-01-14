import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Episode from './pages/Episode';
import Home from './pages/Home';
import Podcast from './pages/Podcast';

const App: FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/podcast/:podcastId" element={<Podcast />} />
        <Route path="/podcast/:podcastId/episode/:episodeId" element={<Episode />} />
      </Routes>
    </>
  );
};

export default App;
