import React, { forwardRef } from 'react'
import { useNavigate } from 'react-router-dom'

const Card = forwardRef(({res},ref) => {

  const navigate= useNavigate();
  return (
    <div className="mx-auto px-4 py-8 max-w-xl w-60 lg:w-96 m-5 lg:h-96 justify-center cursor-pointer" ref={ref} >
    <div className='' >
        <div className="bg-white shadow-2xl rounded-lg mb-10 tracking-wide" >
            <div className="md:flex-shrink-0">
                <img src={res.img} alt="mountains" className=" w-full  h-40 lg:h-60 rounded-lg rounded-b-none"/>
            </div>
            <div className="px-4  mt-2 mb-5 ">
                <h2 className="font-bold text-md lg:text-2xl font-poppins text-center text-gray-800 tracking-normal">{res.name}</h2>

                <p className='font-roboto font-thin text-md text-center mt-1 mb-2 text-slate-600 '>( {res.main} )</p>
                  
                    <div className="flex  items-center mt-2 mx-6 justify-center">
                      <button className=' w-40 lg:h-10 h-8 font-inter font-light text-md text-slate-200 bg-purple-700 rounded-sm mb-5'
                      onClick={()=>navigate(`/event/${res.id}/${res.name}`)}>
                        Know More
                      </button>
                      
                    </div>
              
            </div>
        </div>
    </div>
</div>
  )
})

export default Card
