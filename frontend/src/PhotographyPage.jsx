import { ImageListItem, ImageListItemBar } from '@mui/material';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Styles.css';

function PhotographyPage() {
  const navigate = useNavigate();
  const navigateToLink = (link) => {
    window.scrollTo(0, 0);
    navigate(link);
  };
  const landscapeImage = {
    img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
    title: 'Landscape Photography',
  };

  const portraitImage = {
    img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
    title: 'Portrait Photography',
  };

  return (
    <div className="Photography">
      <StyledEngineProvider injectFirst>

        <div className="photoTypes">
          <ImageListItem
            className="type"
            key={landscapeImage.img}
            onClick={() => { navigateToLink('/landscape-photography'); }}
          >
            <img
              src={`${landscapeImage.img}?w=248&fit=crop&auto=format`}
              srcSet={`${landscapeImage.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={landscapeImage.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={landscapeImage.title}
              subtitle={landscapeImage.location}
            />
          </ImageListItem>
          <ImageListItem
            className="type"
            key={portraitImage.img}
            onClick={() => { navigateToLink('/portrait-photography'); }}
          >
            <img
              src={`${portraitImage.img}?w=248&fit=crop&auto=format`}
              srcSet={`${portraitImage.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={portraitImage.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={portraitImage.title}
            />
          </ImageListItem>
        </div>
        <div className="aboutDiv">
          <h1>
            {/* <NavLink to="/" className="siteName">Captured in Firelight</NavLink> */}
            <NavLink to="/about" className="aboutButton">About</NavLink>
          </h1>
        </div>
      </StyledEngineProvider>
    </div>
  );
}

export default PhotographyPage;
