import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import { CssBaseline, Fab } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from './Header';
// import { useNavigate } from 'react-router-dom';
// import StyledEngineProvider from '@mui/material/StyledEngineProvider';
// import Button from '@mui/material/Button';
import './Styles.css';

function LandingPage() {
  // navigate to portfolio page
  // const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate('/photography');
  // };

  return (
    <div className="LandingPage">
      <CssBaseline />
      <Header />
      <div className="outletDiv">
        <Outlet />
      </div>
      <a href="mailto:test@example.com">
        <Fab
          style={{
            color: '#FFFFF3',
            backgroundColor: '#E78898',
            position: 'fixed',
            right: 10,
            bottom: 10,
          }}
        >
          <EmailIcon />
        </Fab>
      </a>
      {/* <StyledEngineProvider injectFirst>
        <h1>Name of Website</h1>
        <Button variant="text" disableRipple onClick={handleClick}>Quote/Catchphrase</Button>
        </StyledEngineProvider> */}
    </div>
  );
}

export default LandingPage;
