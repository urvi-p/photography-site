import Masonry from '@mui/lab/Masonry';
import { ImageListItem } from '@mui/material';
import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { PhotoData } from './PhotoData';
import './Styles.css';

function ScrollBackground() {
  const [items, setItems] = useState(PhotoData);

  const fetchMoreData = () => {
    setItems(items.concat(PhotoData));
  };

  return (
    <div className="infiniteScroll">
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={items.length < 200}
        loader={<h4>Loading...</h4>}
        scrollableTarget="scrollableDiv"
      >
        <Masonry
          columns={{
            xs: 1, sm: 2, md: 3, lg: 4, xl: 5,
          }}
          spacing={2}
        >
          {items.map((item) => (
            <ImageListItem key={item.title}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </Masonry>
      </InfiniteScroll>
    </div>
  );
}

export default ScrollBackground;
