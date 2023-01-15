import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Episode from './pages/Episode';
import Home from './pages/Home';
import Podcast from './pages/Podcast';
import PodcastLayout from './components/Layouts/PodcastLayout';

const App: FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/podcast/:podcastId"
          element={
            <PodcastLayout>
              <Podcast />
            </PodcastLayout>
          }
        />
        <Route
          path="/podcast/:podcastId/episode/:episodeId"
          element={
            <PodcastLayout>
              <Episode />
            </PodcastLayout>
          }
        />
      </Routes>
    </>
  );
};

export default App;
