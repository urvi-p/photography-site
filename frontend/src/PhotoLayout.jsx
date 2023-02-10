import {
  Dialog, DialogContent, DialogTitle, IconButton, ImageListItem,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Masonry from '@mui/lab/Masonry';
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import AddImageInfo from './AddImageInfo';
// import ImageInfoDialog from './ImageInfoDialog';
// import { useNavigate } from 'react-router-dom';
// import StyledEngineProvider from '@mui/material/StyledEngineProvider';
// import Button from '@mui/material/Button';
// import Header from './Header';

function PhotoLayout() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // THIS IS TO DISPLAY PHOTOS DIRECTLY FROM STORAGE
  const [photoData, setPhotoData] = useState([]);
  /* eslint-disable no-console */
  useEffect(() => {
    async function getPhotos() {
      const photos = await AddImageInfo();
      setPhotoData(photos);
      console.log(photoData);
    }

    getPhotos()
      .catch(console.error);
  }, []);

  function DisplayPhotos() {
    let output;
    if (photoData === []) {
      output = (
        <div />
      );
    } else {
      output = (
        <div>
          {photoData.map((item) => (
            <ImageListItem
              key={item.url}
              onClick={handleClickOpen}
            >
              <img
                src={`${item.url}?w=248&fit=crop&auto=format`}
                srcSet={`${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </div>
      );
    }
    return output;
  }

  return (
    <div className="PhotographyLayout">
      {/* <Header /> */}
      <Box sx={{
        width: 'fit', height: 'fit', display: 'flex', marginLeft: '5%', marginRight: '5%', justifyContent: 'center',
      }}
      >
        <Masonry
          columns={{
            xs: 1, sm: 2, md: 3, lg: 4, xl: 5,
          }}
          spacing={2}
        >
          <DisplayPhotos />
          {/* <div />
          {photoData.map((item) => (
            <ImageListItem
              key={item.url}
              onClick={handleClickOpen}
            >
              <img
                src={`${item.url}?w=248&fit=crop&auto=format`}
                srcSet={`${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))} */}
        </Masonry>
      </Box>
      <Dialog
        onClose={handleClose}
        open={open}
      >
        <DialogTitle id="dialog-title">
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {/* <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <h2>{item.location}</h2> */}
          <h2>Image goes here</h2>
          <h2>Text goes here</h2>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default PhotoLayout;
