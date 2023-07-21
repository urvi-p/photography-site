/* eslint-disable no-console */
import {
  Dialog, DialogContent, DialogTitle, IconButton, ImageListItem, Slide, Snackbar,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Masonry from '@mui/lab/Masonry';
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Styles.css';

function PhotoLayout(props) {
  const {
    photoData, path,
  } = props;

  //  FOR THE DIALOG BOX
  const emptyItem = {
    location: '',
  };

  const [open, setOpen] = React.useState(false);
  const [itemClicked, setItemClicked] = React.useState(emptyItem);
  const [imageClicked, setImageClicked] = React.useState(null);

  const handleClickOpen = (img) => {
    setImageClicked(img.url);
    if (path === 'landscape') {
      const custom = img.metadata.customMetadata;
      setItemClicked({ location: custom.location });
      // console.log(custom.location);
    } else {
      setItemClicked(emptyItem);
    }

    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setItemClicked(emptyItem);
    setImageClicked(null);
  };

  // FOR THE SNACKBAR
  const [snackbarState, setSnackbarState] = useState(false);
  /* eslint-disable react/jsx-props-no-spreading */
  const TransitionLeft = (propsSnack) => <Slide {...propsSnack} direction="right" />;

  const handleOpenSnackbar = () => {
    setSnackbarState(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarState(false);
  };

  useEffect(() => {
    setTimeout(handleOpenSnackbar, 5000);
    setTimeout(handleCloseSnackbar, 10000);
    // console.log('PhotoData:', photoData);
  }, []);

  return (
    <div className="PhotographyLayout">
      <Box sx={{
        width: 'fit', height: 'fit', display: 'flex', marginLeft: '5%', marginRight: '5%', justifyContent: 'center',
      }}
      >
        <Masonry
          columns={{
            xs: 1, sm: 1, md: 2, lg: 3, xl: 3,
          }}
          spacing={2}
        >
          {photoData.map((item) => (
            <ImageListItem
              key={item.url}
              onClick={() => handleClickOpen(item)}
            >
              <img
                src={`${item.url}?w=248&fit=crop&auto=format`}
                srcSet={`${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.location}
                loading="lazy"
              />
            </ImageListItem>
          ))}
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
          <img
            className="dialogImage"
            src={`${imageClicked}`}
            srcSet={`${imageClicked}`}
            alt={itemClicked.location}
            loading="lazy"
          />
          <h2>{itemClicked.location}</h2>
        </DialogContent>
      </Dialog>
      <Snackbar
        open={snackbarState}
        onClose={handleCloseSnackbar}
        TransitionComponent={TransitionLeft}
        message="Try Clicking on a Photo!"
        key={snackbarState}
      />
    </div>
  );
}

export default PhotoLayout;

PhotoLayout.propTypes = {
  photoData: PropTypes.arrayOf(PropTypes.object).isRequired,
  path: PropTypes.string.isRequired,
};
