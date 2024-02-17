import React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import eng1 from '../images/eng1.jpg';
import eng2 from '../images/eng2.jpg';
import eng3 from '../images/eng3.jpg';
import eng4 from '../images/eng4.jpg';

const Photos = () => {
    return (
        // <Box sx={{ width: 500, height: 450, overflowY: 'scroll' }}>
    <Box>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
        // <div className="photos">
        //     <h2>Photos</h2>
        //     <p>Here are some photos from our special day:</p>
        //     <div className="photo-gallery">
        //         <div>images here</div>
        //         {/* <img src="" alt="Photo 1" />}*/}
        //     </div>
        // </div>
    );
}

const itemData = [
    
  {
    img: eng1,
    title: 'Photo 1',
  },
  {
    img: eng2,
    title: 'Photo 2',
  },
  {
    img: eng3,
    title: 'Photo 3',
  },
  {
    img: eng4,
    title: 'Photo 4',
  },
    // {
    //   img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
    //   title: 'Bed',
    // },
    // {
    //   img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
    //   title: 'Books',
    // },
    // {
    //   img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
    //   title: 'Sink',
    // },
    // {
    //   img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
    //   title: 'Kitchen',
    // },
    // {
    //   img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
    //   title: 'Blinds',
    // },
    // {
    //   img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
    //   title: 'Chairs',
    // },
    // {
    //   img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
    //   title: 'Laptop',
    // },
    // {
    //   img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
    //   title: 'Doors',
    // },
    // {
    //   img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
    //   title: 'Coffee',
    // },
    // {
    //   img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
    //   title: 'Storage',
    // },
    // {
    //   img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
    //   title: 'Candle',
    // },
    // {
    //   img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
    //   title: 'Coffee table',
    // },
  ];

export default Photos;