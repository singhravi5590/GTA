import React, { useState } from 'react'

const TempleCard = ({details}) => {
    const {img, detail} = details
    const [data, setData] = useState((detail.slice(0, 180) + '...'));


  return (
    <div className='temple-card'>
        <div>
            <img width={400} src={img} alt="" />
            <div className='card-data'>
                <p>{data} <span>Read More</span></p>
            </div>
        </div>

    </div>
  )
}

export default TempleCard