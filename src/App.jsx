/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutPage from './AboutPage';
import LandingPage from './LandingPage';
import PhotographyPage from './PhotographyPage';
import PortraitPhotography from './PortraitPhotography';
import LandscapePhotography from './LandscapePhotography';
// import GetImagesFromStorage from './GetImagesFromStorage';
import { PhotoData as photoData } from './PhotoData';

function App() {
  const [landscapePhotos, setLandscapePhotos] = useState([]);
  const [portraitPhotos, setPortraitPhotos] = useState([]);
  async function getPhotos() {
    // const landscapePhotoData = await GetImagesFromStorage('files/landscape');
    // console.log('landscape retreived:', landscapePhotoData);
    // setLandscapePhotos(landscapePhotoData);
    setLandscapePhotos(photoData);

    // const portraitPhotoData = await GetImagesFromStorage('files/portrait');
    // console.log('portrait retreived:', portraitPhotoData);
    // setPortraitPhotos(portraitPhotoData);
    setPortraitPhotos(photoData);
  }

  useEffect(() => {
    getPhotos()
      .catch(console.error);
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />}>
          <Route path="/photography" element={<PhotographyPage />} />
          <Route path="landscape-photography" element={<LandscapePhotography photoData={landscapePhotos} />} />
          <Route path="portrait-photography" element={<PortraitPhotography photoData={portraitPhotos} />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
