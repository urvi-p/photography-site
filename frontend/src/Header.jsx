/* eslint-disable no-console */
import React from 'react';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';
import Button from '@mui/material/Button';
import { NavLink, useNavigate } from 'react-router-dom';
import { MenuData } from './MenuData';
import './Styles.css';
import ScrollBackground from './ScrollBackground';
import title from './images/CapturedInLight.png';

function Header() {
  const navigate = useNavigate();
  const navigateToLink = (link) => {
    navigate(link);
  };

  // navigate to photography page
  const handleClick = () => {
    // console.log('Clicked');
    window.scrollTo(0, 0);
    navigate('/photography');
  };

  // if at base url, display single button, else display the menu bar
  let menu;
  let headerHeight;
  let topSpacing;
  let transformation;
  let displayType;
  let backgroundGallery;
  let titleHeight;

  if (window.location.pathname === '/') {
    // if on landing page
    menu = (
      <Button
        className="quoteButton"
        variant="text"
        disableRipple
        onClick={() => handleClick()}
      >
        Look through the lens
      </Button>
    );
    headerHeight = '100vh';
    topSpacing = '50%';
    transformation = 'translateY(-50%)';
    displayType = 'flex';
    backgroundGallery = <ScrollBackground />;
    titleHeight = '6rem';
  } else if (window.location.pathname === '/photography') {
    // if on /photography page
    menu = <div />;
    headerHeight = '5.7rem';
    topSpacing = '';
    transformation = '';
    displayType = 'flex';
    titleHeight = '4.2rem';
  } else {
    // for any other page
    menu = (
      <div className="menuButtons">
        {MenuData.map((val) => (
          <Button
            className="individualMenuItem"
            key={val.id}
            variant="text"
            disableRipple
            id={val.id}
            style={{ backgroundColor: window.location.pathname.endsWith(val.link) ? '#201E50' : '' }}
            aria-hidden="true"
            onClick={() => {
              if (!window.location.pathname.endsWith(val.link)) {
                navigateToLink(val.link);
              }
            }}
          >
            <div id="title">{val.title}</div>
          </Button>
        ))}
      </div>
    );
    headerHeight = '8rem';
    topSpacing = '';
    transformation = '';
    displayType = 'block';
    backgroundGallery = '';
    titleHeight = '4.2rem';
  }

  return (
    <div
      className="headerMainDiv"
    // don't put style here, it affects the transition to slide up the photography page
    >
      <div
        className="header"
        id="overlay"
        style={{
          height: headerHeight,
          display: displayType,
          backgroundColor: window.location.pathname === '/' ? 'rgba(104, 110, 141, 0.6)' : 'rgba(104, 110, 141, 1)',
        }}
      >
        <div
          className="headerContent"
          style={{
            top: topSpacing,
            transform: transformation,
          }}
        >
          <StyledEngineProvider injectFirst>
            <div className="title">
              <NavLink to="/">
                <img className="siteName" style={{ height: titleHeight }} src={title} alt="Captured in Firelight" />
              </NavLink>
            </div>
            {menu}
          </StyledEngineProvider>
        </div>
      </div>
      <div style={{
        display: window.location.pathname === '/' ? '' : 'none',
      }}
      >
        {backgroundGallery}
      </div>
    </div>
  );
}

export default Header;
