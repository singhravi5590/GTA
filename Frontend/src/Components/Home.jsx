import React, { useEffect, useState } from 'react'
import {images, cardDetails, templeDetails} from '../assets/images.js'
import swift from '../assets/swift.jpg'
import TempleCard from './TempleCard.jsx';

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
    <>
      <div className='home-container'>
          <div className='image-container'>
            <img className='image' src={images[index].image} alt="ghat-images" />
          </div>
      </div>

      <div className='temple-container'>
        {
          templeDetails.map((item, index) => {
            return <TempleCard key={index} details={item}/>
          })
        }
      </div>

      <div className='line'></div>
      <div className='line'></div>
      <div className='line'></div>


      <div className='card-container'>
        {
          cardDetails.map((item, index) => {
            return (
              <div key={index} className='card'>
                <div className='inside-card'>
                  <img className='card-image' height={200} width={260} src={item.img} alt="swift" />
                  <div className='card-details'>
                    <div><span>Vehicle Name</span> <span>:</span> <span>{item.name}</span></div>
                    <div><span>Seat Capacity</span> <span>:</span> <span>{item.capacity}Persons</span></div>
                    <div><span>Rate Per KM</span> <span>:</span> <span>{item.rate}Rs per Km</span></div>
                    <div><span>Airport Transfer</span> <span>:</span> <span>{item.airport}Rs</span></div>
                    <div className='button-container'>
                      <button className='contact'>Contact us</button>
                      <button className='book'>Book us</button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }    
      </div>


      <div className='line'></div>
      <div className='line'></div>
      <div className='line'></div>
      <div className='line'></div>
      <div className='line'></div>
      <div className='line'></div>
      <div className='line'></div>
      <div className='line'></div>
      <div className='line'></div>
      <div className='line'></div>
      <div className='line'></div>
      <div className='line'></div>
      <div className='line'></div>
      <div className='line'></div>
      <div className='line'></div>
      <div className='line'></div>
      <div className='line'></div>
      <div className='line'></div>
      <div className='line'></div>
      <div className='line'></div>
      <div className='line'></div>
      <div className='line'></div>
      <div className='line'></div>
      <div className='line'></div>
      




    </>
  )
}

export default Home