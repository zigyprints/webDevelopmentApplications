import React, { Component } from 'react'
import Card from './card'
import api from './api/api';
import {calcLength, motion} from 'framer-motion'
import { useState, useEffect, useRef } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
export default function Gallery()
{
  const cardVariants = {
    offscreen: {
      y: 100,
    },
    onscreen: {
      y: 0,
      rotate: -0,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
 const [items, setItems] = useState([]);
 const [isLoading, setIsLoading] = useState(false);
 const [error, setError] = useState(null);
 const [page, setPage] = useState(1);
 const [modal,setModal]=React.useState();
 
 const GetImage=async ()=>
 {const array = [];
  for(let i=0;i<16;i++)
  {
   array.push(
     <motion.img
       className='image-in-display'
       initial='offscreen'
       whileInView='onscreen'
       viewport={{ once: true, amount: 0.8 }}
       variants={cardVariants}
       whileHover={{
         scale: 1.2,
         transition: { duration: 1 },
         opacity: 0.9,
         'z-index': 100,
       }}
       whileTap={{ scale: 0.9 }}
       // onClick={() => {
       //   props.open(props.data);
       // }}
       placeholder='image displayed'
       src='https://picsum.photos/300/200'
       // onClick={() => setModal('https://picsum.photos/300/200')}
     ></motion.img>
   );
  }
  setItems(array)
 }

const getNewImage=async()=>
{
 console.log("called")
 setIsLoading(true);
const array = [];
for (let i = 0; i < 4; i++) {
  array.push(
    <motion.img
      className='image-in-display'
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: true, amount: 0.8 }}
      variants={cardVariants}
      whileHover={{
        scale: 1.2,
        transition: { duration: 1 },
        opacity: 0.9,
        'z-index': 100,
      }}
      whileTap={{ scale: 0.9 }}
      // onClick={() => {
      //   props.open(props.data);
      // }}
      placeholder='image displayed'
      src='https://picsum.photos/300/200'
      // onClick={() => setModal('https://picsum.photos/300/200')}
    ></motion.img>
  );
}
setItems((prevItems) => [...prevItems, ...array]);
setPage((prevPage) => prevPage + 1);
setIsLoading(false);
}




 React.useEffect(()=>
 {
  GetImage();
 },[])
 return (
   <React.Fragment>
     <div>
       <InfiniteScroll
         className='gallery-holder'
         dataLength={items.length}
         next={getNewImage}
         hasMore={true} // Replace with a condition based on your data source
         loader={<p>Loading...</p>}
         endMessage={<p>No more data to load.</p>}
       >
         {items}
       </InfiniteScroll>
      
     </div>
   </React.Fragment>
 );
}