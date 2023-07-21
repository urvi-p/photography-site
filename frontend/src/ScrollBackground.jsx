/* eslint-disable no-console */
import Masonry from '@mui/lab/Masonry';
import { Box, ImageListItem } from '@mui/material';
import React, { useEffect } from 'react';
// import InfiniteScroll from 'react-infinite-scroll-component';
// import { scroller, Element } from 'react-scroll';
import { LandingPageData as photoData } from './LandingPageData';
import './Styles.css';

/*
This was supposed to be an infinite scroll background, where the photos get displayed infinitely
Tried to make the scroll automatic, but it was too fast.
When combining the automatic scroll with the infinite scroll,
it was very glitchy when new photos were added to render.
Turned it into a fixed Masonry background
*/

function ScrollBackground() {
  // const [items, setItems] = useState(PhotoData);
  const d = new Date();
  // const divRef = useRef(null);

  // const fetchMoreData = () => {
  //   setItems(items.concat(PhotoData));
  // };

  // const scroll = () => {
  //   // divRef.current.scrollIntoView({ behavior: 'smooth' });
  //   console.log('Scrolling...');
  //   scroller.scrollTo('myScrollToElement', {
  //     duration: 20000,
  //     smooth: 'linear',
  //   });
  // };

  useEffect(() => {
    // divRef.current.scrollIntoView({ behavior: 'smooth' });
    // setInterval(scroll, 10000);
    // scroll();
    // console.log(photoData);
  }, []);

  return (
    <div className="infiniteScroll">
      {/* <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={items.length < 200}
        loader={<h4>Loading...</h4>}
        scrollableTarget="scrollableDiv"
        scrollThreshold={0.5}
      > */}
      <Box sx={{
        width: 'fit', height: 'fit', display: 'flex', marginLeft: '-1%', marginRight: '-1%', justifyContent: 'center',
      }}
      >
        <Masonry
          columns={{
            xs: 1, sm: 2, md: 3, lg: 4, xl: 4,
          }}
          rows={{
            xs: 1, sm: 2, md: 3, lg: 3, xl: 3,
          }}
          spacing={2}
        // sx={{ width: 'auto' }}
        >
          {photoData.map((item) => (
            <ImageListItem key={item.title + String(d.getTime() + Math.random())}>
              <img
                src={`${item.url}`}
                srcSet={`${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </Masonry>
      </Box>
      {/* <div id="target" ref={divRef}>
          <p />
        </divß> */}
      {/* <Element name="myScrollToElement" /> */}
      {/* </InfiniteScroll> */}
      <p className="copyright">Copyright &copy; 2023 Urvi Patel</p>
    </div>
  );
}

export default ScrollBackground;
