import { ImageListItem } from '@mui/material';
import Masonry from '@mui/lab/Masonry';
import Box from '@mui/material/Box';
import React from 'react';
import { PhotoData } from './PhotoData';
// import { useNavigate } from 'react-router-dom';
// import StyledEngineProvider from '@mui/material/StyledEngineProvider';
// import Button from '@mui/material/Button';
// import Header from './Header';

function PhotographyPage() {
  // navigate to portfolio page
  // const navigate = useNavigate();
  return (
    <div className="PhotographyPage">
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
          {PhotoData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </Masonry>
      </Box>
    </div>
  );
}

export default PhotographyPage;
