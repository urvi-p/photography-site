import React, { useEffect } from 'react';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';
import Button from '@mui/material/Button';
import { NavLink, useNavigate } from 'react-router-dom';
import { MenuData } from './MenuData';
import './Styles.css';
// import PhotographyPage from './PhotographyPage';
// import ScrollBackground from './ScrollBackground';

function Header() {
  // const [transition, setTransition] = useState('100vh');
  const navigate = useNavigate();
  const navigateToLink = (link) => {
    navigate(link);
  };

  // navigate to photography page
  const handleClick = () => {
    // /* eslint-disable no-console */
    // console.log('Clicked');
    window.scrollTo(0, 0);
    navigate('/photography');
  };

  // const getBackgroundColor = () => {
  //   if (window.location.pathname === '/') {
  //     return '100vh';
  //   }
  //   if (window.location.pathname === '/photography') {
  //     return '6rem';
  //   }
  //   return '8rem';
  // };

  // const divRef = useRef(null);
  useEffect(() => {
    // window.scrollBy(0, 1);
    // scrolldelay = setTimeout(pageScroll, 10);
    // divRef.current.scrollIntoView({ behavior: 'smooth' });

    /* eslint-disable global-require */
    // const Scroll = require('react-scroll');
    // const scroll = Scroll.animateScroll;
    // scroll.scrollToBottom({ duration: n, smooth: 'linear' });

    // const Scroll = require('react-scroll');
    // // const Events = Scroll.Events;
    // Scroll.Events.scrollEvent.register('begin');
  });

  // if at base url, display single button, else display the menu bar
  let menu;
  let headerHeight;
  let topSpacing;
  let transformation;
  let displayType;
  // let backgroundGallery;
  // const headerTransition = document.getElementById('header');
  if (window.location.pathname === '/') {
    menu = (
      <Button
        className="quoteButton"
        variant="text"
        disableRipple
        onClick={() => handleClick()}
      >
        {/* Quote/Catchphrase */}
        Subheading
      </Button>
    );
    headerHeight = '100vh';
    topSpacing = '50%';
    transformation = 'translateY(-50%)';
    displayType = 'flex';
    // backgroundGallery = <ScrollBackground />;
  } else if (window.location.pathname === '/photography') {
    menu = <div />;
    headerHeight = '5.7rem';
    topSpacing = '';
    transformation = '';
    displayType = 'flex';
  } else {
    // headerTransition.style.backgroundColor = 'blue';
    // document.getElementsByClassName('header').classList.toggle('active');
    // setTransition('50vh');
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
    // backgroundGallery = '';
  }

  // function fullWindow() {
  //   document.getElementById('header').style.height = '100vh'
  // }

  // function onlyHeading() {
  //   document.getElementById('header').style.height = '8rem';
  // }

  return (
    <div
      className="headerMainDiv"
    // don't put style here, it affects the transition to slide up the photography page
    // style={{
    //   height: window.location.pathname === '/' ? '100vh' : '8rem',
    // }}
    >
      <div
        className="header"
        id="overlay"
        style={{
          height: headerHeight,
          display: displayType,
          // opacity: window.location.pathname === '/' ? '0.5' : '1',
          backgroundColor: window.location.pathname === '/' ? 'rgba(104, 110, 141, 0.5)' : 'rgba(104, 110, 141, 1)',
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

            <h1 className="title">
              {/* <NavLink to="/" className="siteName">Captured in Firelight</NavLink> */}
              <NavLink to="/" className="siteName">Name of Site</NavLink>
            </h1>
            {menu}
            {/* {window.location.origin
          ? <Button variant="text" disableRipple onClick={handleClick}>Quote/Catchphrase</Button>
          : (
            <div className="menuButtons">
              {MenuData.map((val) => (
                <Button
                  className="individualMenuItem"
                  variant="text"
                  disableRipple
                  id={val.id}
                  style=
                  {{ backgroundColor: window.location.pathname.endsWith(val.link) ? '#201E50' : ''
                }}
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
          )} */}

          </StyledEngineProvider>
        </div>
      </div>
      <div style={{
        // height: window.location.pathname === '/' ? '100vh' : '8rem',
        // width: '100vw',
        // justifyContent: 'center',
        // alignItems: 'center',
        display: window.location.pathname === '/' ? '' : 'none',
        // display: 'flex',
        // visibility: window.location.pathname === '/' ? 'visible' : 'hidden',
        // transition: 'height 3s',
      }}
      >
        {/* <p>insert scrolling photo gallery here</p> */}
        {/* <ScrollBackground /> */}
        {/* {backgroundGallery} */}
        {/* <PhotographyPage /> */}
      </div>
    </div>
  );
}

export default Header;
