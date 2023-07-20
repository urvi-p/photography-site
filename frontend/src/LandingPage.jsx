import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import { CssBaseline, Fab } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import './Styles.css';

function LandingPage() {
  return (
    <div className="LandingPage">
      <CssBaseline />
      <Header />
      <div className="outletDiv">
        <Outlet />
      </div>
      <a href="mailto:capturedinlight23@gmail.com">
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
    </div>
  );
}

export default LandingPage;
