import React from 'react';
import { useNavigate } from 'react-router-dom';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';
import Button from '@mui/material/Button';
import './LandingPage.css';

function LandingPage() {
  // navigate to portfolio page
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/photography');
  };

  return (
    <div className="LandingPage">
      <StyledEngineProvider injectFirst>
        <h1>Name of Website</h1>
        <Button variant="text" disableRipple onClick={handleClick}>Quote/Catchphrase</Button>
      </StyledEngineProvider>
    </div>
  );
}

export default LandingPage;
