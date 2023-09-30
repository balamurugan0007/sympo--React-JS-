import React from 'react'
import images from './images'

const Past = () => {
  return (
    <div className='lg:px-10  justify-center'>
        <h2 className='lg:text-3xl text-xl lg:mb-10 font-bold font-lora text-slate-300 text-center lg:mt-16 mt-10'>[ Glimpses of Hertz 23 ]</h2>
       <div className=" shadow-2xl ml-4 rounded-lg mb-6 tracking-wide justify-center flex-wrap lg:flex mt-8 lg:mt-5" >
           {
            images && images.map((res)=>(
                <div className="md:flex-shrink-0 m-5 justify-center " key={res.id}>
                <img src={res.img} alt="mountains" className=" lg:w-96 w-72 h-40  lg:h-64 rounded-lg "/>
            </div>
            ))

           }
        </div>
    </div>
  )
}

export default Past
