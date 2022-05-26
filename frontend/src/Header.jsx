import React from 'react';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { MenuData } from './MenuData';
import './Styles.css';

function Header() {
  const navigate = useNavigate();
  const navigateToLink = (link) => {
    navigate(link);
  };

  // navigate to photography page
  const handleClick = () => {
    navigate('/photography');
  };

  // if at base url, display single button, else display the menu bar
  let menu;
  // const headerTransition = document.getElementById('header');
  if (window.location.pathname === '/') {
    menu = <Button classname="quoteButton" variant="text" disableRipple onClick={handleClick}>Quote/Catchphrase</Button>;
  } else {
    // headerTransition.style.backgroundColor = 'blue';
    document.getElementsByClassName('header').classList.toggle('active');
    menu = (
      <div className="menuButtons">
        {MenuData.map((val) => (
          <Button
            className="individualMenuItem"
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
  }

  return (
    <div className="header">
      <StyledEngineProvider injectFirst>
        <h1>Name of Website</h1>
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
  );
}

export default Header;
