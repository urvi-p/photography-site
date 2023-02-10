import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutPage from './AboutPage';
// import AddImageInfo from './AddImageInfo';
import LandingPage from './LandingPage';
import PhotographyPage from './PhotographyPage';
import PhotoLayout from './PhotoLayout';
// import VideoEditingPage from './VideoEditingPage';
// import { storage } from './firebase'
// import { ref, getDownloadURL } from "firebase/storage"

function App() {
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   const file = e.target[0]?.files[0]
  //   if (!file) return null;
  //   const storageRef = ref(storage, `files/${file.name}`)
  //   uploadBytes(storageRef, file)
  //     .then((snapshot) => {
  //       e.target[0].value = ''
  //       getDownloadURL(snapshot.ref).then((downloadURL) => {
  //         console.log(downloadURL)
  //       })
  //     })
  // }
  // useEffect(() => {
  //   /* eslint-disable no-console */
  //   console.log('Here', AddImageInfo());
  // }, []);

  return (
    <div className="App">
      {/* <form className='app__form' name='upload_file' onSubmit={handleSubmit} /> */}
      <Routes>
        <Route path="/" element={<LandingPage />}>
          <Route path="/photography" element={<PhotographyPage />} />
          <Route path="landscape-photography" element={<PhotoLayout />} />
          <Route path="portrait-photography" element={<PhotoLayout />} />
          {/* <Route path="videoediting" element={<VideoEditingPage />} /> */}
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
