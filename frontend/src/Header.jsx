import React, { useState } from 'react';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { MenuData } from './MenuData';

function Header() {
  const [active, setActive] = useState(null);

  const navigate = useNavigate();
  const navigateToLink = (link) => {
    navigate(link);
  };
  return (
    <div className="Header">
      <StyledEngineProvider injectFirst>
        <h1>Name of Website</h1>
        <div>
          {MenuData.map((val, idx) => (
            <Button
              variant="text"
              disableRipple
              id={val.id}
              className={`menu_item${window.location.pathname.endsWith(val.link) || (window.location.pathname === '/' && window.location.pathname.endsWith(val.link)) ? ' active' : ''}`}
              style={{ backgroundColor: active === idx ? 'blue' : '' }}
              aria-hidden="true"
              onClick={() => {
                navigateToLink(val.link);
                setActive(idx);
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
