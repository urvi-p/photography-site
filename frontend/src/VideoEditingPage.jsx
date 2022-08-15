import { Card, CardMedia, Stack } from '@mui/material';
import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import StyledEngineProvider from '@mui/material/StyledEngineProvider';
// import Button from '@mui/material/Button';
// import Header from './Header';
import './Styles.css';

const itemData = [
  {
    video: 'https://drive.google.com/file/d/1VVLYif4Px_NvstxGKiYZDJHqoXPP_V_9/preview',
    title: 'Grad Vlog',
  },
];

function VideoEditingPage() {
  // navigate to portfolio page
  // const navigate = useNavigate();
  return (
    <div className="VideoEditingPage">
      {/* <Header /> */}

      {/* <ImageList
        sx={{
          width: 'fit', height: 'fit', marginLeft: '5rem', marginRight: '5rem',
        }}
        cols={1}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=90&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList> */}
      <Stack spacing={4} marginLeft="15%" marginRight="15%">
        {itemData.map((item) => (
          <Card
            key={item.video}
          >
            <CardMedia
              // component="video"
              component="iframe"
              src={item.video}
              alt={item.title}
            // loading="lazy"
            />
          </Card>
        ))}
      </Stack>
    </div>
  );
}

export default VideoEditingPage;
