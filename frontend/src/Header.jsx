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
    <div className="Header">
      <StyledEngineProvider injectFirst>
        <h1>Name of Website</h1>
        <div>
          {MenuData.map((val) => (
            <Button
              variant="text"
              disableRipple
              id={val.id}
              style={{ backgroundColor: window.location.pathname.endsWith(val.link) ? 'blue' : '' }}
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
