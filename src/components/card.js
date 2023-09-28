import React, { forwardRef } from 'react'
import { useNavigate } from 'react-router-dom'

const Card = forwardRef(({res},ref) => {

  const navigate= useNavigate();
  return (
    <div className="mx-auto px-4 py-8 max-w-xl w-60 lg:w-96 m-5 justify-center">
    <div className="bg-white shadow-2xl rounded-lg mb-6 tracking-wide" >
        <div className="md:flex-shrink-0">
            <img src={res.img} alt="mountains" className=" w-full lg:96 h-40 lg:h-64 rounded-lg rounded-b-none"/>
        </div>
        <div className="px-4 py-2 mt-2">
            <h2 className="font-bold text-2xl font-poppins text-center text-gray-800 tracking-normal">{res.name}</h2>
               
                <div className="flex items-center mt-2 mx-6 justify-center">
                   <button className='w-40 h-10 font-inter font-light text-md text-slate-200 bg-purple-700 rounded-sm mb-5'
                   onClick={()=>navigate(`/event/${res.id}/${res.name}`,{res})}>
                    Know More
                   </button>
                   
                </div>
          
        </div>
    </div>
</div>
  )
})

export default Card
