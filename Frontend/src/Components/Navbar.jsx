import React from 'react'

const Navbar = () => {
  return (
    <div className='nav-container'>
        <img src="#" alt="GTA" />
        <div className='link-container'>
            <a href="">Home</a>
            <a href="">About Us</a>
            <a href="">Taxi Rental</a>
            <a href="">Airport Transfer</a>
        </div>
        <div className='contact'>
            <button href="#">Contact Us</button>
        </div>
    </div>
  )
}

export default Navbar