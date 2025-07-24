import React, { useEffect, useState } from 'react'
import images from '../assets/images.js'

const Home = () => {
  const [index, setIndex] = useState(0);
  let imagesLength = images.length - 1;

  function handleLeft(){
    if(index === 0){
      setIndex(imagesLength);
    }
    else{
      setIndex((prev) => prev - 1);
    }
  }

  function handleRight(){
    if(index === imagesLength){
      setIndex(0);
    }
    else{
      setIndex((prev) => prev + 1);
    }
  }

  useEffect(() => {
    let time = setInterval(() => {
      handleRight();
    }, 5000)

    return () => {
      clearInterval(time);
    }
  }, [index])
  
  return (
    <div className='home-container'>
        <div className='image-container'>
          <img className='image' src={images[index].image} alt="ghat-images" />
        </div>
    </div>
  )
}

export default Home