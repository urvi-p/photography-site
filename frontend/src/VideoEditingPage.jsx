import { Card, CardMedia, Stack } from '@mui/material';
import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import StyledEngineProvider from '@mui/material/StyledEngineProvider';
// import Button from '@mui/material/Button';
import Header from './Header';

const itemData = [
  {
    video: 'https://www.youtube.com/embed/1mpO2So02hc',
    title: 'We (not me) Nearly Died Doing This Challenge...',
  },
  {
    video: 'https://www.youtube.com/embed/pLCm0VJWesQ',
    title: 'MINIMINTER FUNNIEST MOMENTS #1',
  },
  // {
  //   img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
  //   title: 'Breakfast',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
  //   title: 'Burger',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
  //   title: 'Camera',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
  //   title: 'Coffee',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
  //   title: 'Hats',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
  //   title: 'Honey',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
  //   title: 'Basketball',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
  //   title: 'Fern',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
  //   title: 'Mushrooms',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
  //   title: 'Tomato basil',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
  //   title: 'Sea star',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
  //   title: 'Bike',
  // },
];

function VideoEditingPage() {
  // navigate to portfolio page
  // const navigate = useNavigate();
  return (
    <div className="VideoEditingPage">
      <Header />

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
            sx={{
              aspectRatio: '16/9',
            }}
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
