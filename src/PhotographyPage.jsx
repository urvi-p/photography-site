/* eslint-disable no-console */
import { ImageListItem, ImageListItemBar } from '@mui/material';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Styles.css';
import landscape from './images/landscape.jpg';
import portrait from './images/portrait.jpg';

function PhotographyPage() {
  const navigate = useNavigate();
  const navigateToLink = (link) => {
    window.scrollTo(0, 0);
    navigate(link);
  };

  return (
    <div className="Photography">
      <StyledEngineProvider injectFirst>
        <div className="photoTypes">
          <ImageListItem
            className="type"
            key={landscape}
            onClick={() => { navigateToLink('/landscape-photography'); }}
          >
            <img
              src={`${landscape}?w=248&fit=crop&auto=format`}
              srcSet={`${landscape}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt="Landscape Photography"
              loading="lazy"
            />
            <ImageListItemBar
              title="Landscape Photography"
            />
          </ImageListItem>
          <ImageListItem
            className="type"
            key={portrait}
            onClick={() => { navigateToLink('/portrait-photography'); }}
          >
            <img
              src={`${portrait}?w=248&fit=crop&auto=format`}
              srcSet={`${portrait}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt="Portrait Photography"
              loading="lazy"
            />
            <ImageListItemBar
              title="Portrait Photography"
            />
          </ImageListItem>
        </div>
        <div className="aboutDiv">
          <h1>
            <NavLink to="/about" className="aboutButton">About</NavLink>
          </h1>
        </div>
      </StyledEngineProvider>
      <p className="copyright">Copyright &copy; 2023 Urvi Patel</p>
    </div>
  );
}

export default PhotographyPage;
