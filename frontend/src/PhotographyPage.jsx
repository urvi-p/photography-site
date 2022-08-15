// import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function PhotographyPage() {
  const navigate = useNavigate();
  const navigateToLink = () => {
    window.scrollTo(0, 0);
    navigate('/landscape-photography');
  };
  return (
    <div className="Photography">
      <button type="button" onClick={navigateToLink}>Choose type of photography</button>
    </div>
  );
}

export default PhotographyPage;
