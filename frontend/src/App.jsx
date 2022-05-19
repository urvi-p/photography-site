import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import LandingPage from './LandingPage';
import PhotographyPage from './PhotographyPage';
import VideoEditingPage from './VideoEditingPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/photography" element={<PhotographyPage />} />
        <Route path="/videoediting" element={<VideoEditingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;