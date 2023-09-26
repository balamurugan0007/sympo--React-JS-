import React from 'react'
import images from './images'

const Past = () => {
  return (
    <div className='lg:px-10  justify-center'>
        <h2 className='lg:text-3xl text-xl lg:mb-10 font-bold font-lora text-slate-300 text-center lg:mt-16 '>[ Past Year ]</h2>
       <div className=" shadow-2xl ml-4 rounded-lg mb-6 tracking-wide justify-center flex-wrap lg:flex" >
           {
            images && images.map((res)=>(
                <div className="md:flex-shrink-0 m-5 justify-center" key={res.id}>
                <img src={res.img} alt="mountains" className=" lg:w-96 w-80 h-40 lg:h-64 rounded-lg rounded-b-none"/>
            </div>
            ))

           }
        </div>
    </div>
  )
}

export default Past
