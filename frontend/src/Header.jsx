import React from 'react';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { MenuData } from './MenuData';

function Header() {
  const navigate = useNavigate();
  const navigateToLink = (link) => {
    navigate(link);
  };
  return (
    <div className="header">
      <StyledEngineProvider injectFirst>
        <h1>Name of Website</h1>
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
      </StyledEngineProvider>
    </div>
  );
}

export default Header;
