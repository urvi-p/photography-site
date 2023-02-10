import { ImageListItem, ImageListItemBar } from '@mui/material';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';
import React from 'react';
// import React, { useEffect, useState } from 'react';
// import { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Styles.css';

// import { collection, getDocs, orderBy } from 'firebase/firestore';
// import { db } from './utils/firebase';

// import {
//   ref, getDownloadURL, listAll, getMetadata,
// } from 'firebase/storage';
// import { storage } from './utils/firebase';

function PhotographyPage() {
  const navigate = useNavigate();
  const navigateToLink = (link) => {
    window.scrollTo(0, 0);
    navigate(link);
  };
  const landscapeImage = {
    url: 'https://firebasestorage.googleapis.com/v0/b/photography-site-bf5de.appspot.com/o/files%2Ftestpic.jpeg?alt=media&token=27ada780-3e72-4935-bfda-212c35015412',
    title: 'Landscape Photography',
  };

  const portraitImage = {
    img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
    title: 'Portrait Photography',
  };

  // // code to get list of items from FIRESTORE
  // const listImg = [];
  // // let landscapeImage = {};
  // const [landscapeImage, setLandscapeImage] = useState({});

  // useEffect(() => {
  //   async function getData() {
  //     const querySnapshot = await getDocs(collection(db, 'landscape'), orderBy('title', 'asc'));
  //     querySnapshot.forEach((doc) => {
  //       /* eslint-disable no-console */
  //       // console.log(`${doc.id} => ${Object.keys(doc.data())}, ${Object.values(doc.data())}`);
  //       // console.log(doc.data());
  //       // const fields = doc.data();
  //       listImg.push(doc.data());
  //     });
  //   }
  //   getData()
  //     // console.log(getData());
  //     .then(() => {
  //       // console.log(listImg);
  //       /* eslint-disable prefer-destructuring */
  //       setLandscapeImage({ ...listImg[0] });
  //     })
  //     // make sure to catch any error
  //     .catch(console.error);
  // }, []);

  return (
    <div className="Photography">
      <StyledEngineProvider injectFirst>
        <div className="photoTypes">
          <ImageListItem
            className="type"
            key={landscapeImage.url}
            onClick={() => { navigateToLink('/landscape-photography'); }}
          >
            <img
              src={`${landscapeImage.url}?w=248&fit=crop&auto=format`}
              srcSet={`${landscapeImage.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={landscapeImage.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={landscapeImage.title}
              subtitle={landscapeImage.location}
            />
          </ImageListItem>
          <ImageListItem
            className="type"
            key={portraitImage.img}
            onClick={() => { navigateToLink('/portrait-photography'); }}
          >
            <img
              src={`${portraitImage.img}?w=248&fit=crop&auto=format`}
              srcSet={`${portraitImage.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={portraitImage.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={portraitImage.title}
            />
          </ImageListItem>
        </div>
        <div className="aboutDiv">
          <h1>
            {/* <NavLink to="/" className="siteName">Captured in Firelight</NavLink> */}
            <NavLink to="/about" className="aboutButton">About</NavLink>
          </h1>
        </div>
      </StyledEngineProvider>
    </div>
  );
}

export default PhotographyPage;
