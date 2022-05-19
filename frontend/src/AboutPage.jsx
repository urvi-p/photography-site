import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import StyledEngineProvider from '@mui/material/StyledEngineProvider';
// import Button from '@mui/material/Button';
import Header from './Header';
import './LandingPage.css';

function AboutPage() {
  // navigate to portfolio page
  // const navigate = useNavigate();
  return (
    <div className="AboutPage">
      <Header />
      <div className="splitScreen">
        <div className="aboutTextDiv">
          <h2 className="aboutText">About me / About website section goes here</h2>
        </div>
        <div className="aboutPictureDiv">
          <img
            className="aboutPicture"
            width={100}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxtf9HEjFR0YBKzXWO3GV-LraPyv-iyNf_bAqW4TWny_RkzPLqiMLGDdCDhZ1C-XDPfgg&usqp=CAU"
            alt="Website owner"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
