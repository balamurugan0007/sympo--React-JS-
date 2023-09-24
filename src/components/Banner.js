import React from 'react'
import vid from '../assets/web.mp4'


const Banner = () => {
  return (
    <div className='w-full px-2 lg:px-0 mt-3  justify-center lg:h-1/2 ' >
       <div className='w-full justify-center'>
          <video   muted
              autoPlay={"autoplay"}
              preLoad="auto"
              loop className='lg:w-full lg:h-96'>
                <source src={vid} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>

           
       </div>

      
      
    </div>
  )
}

export default Banner
