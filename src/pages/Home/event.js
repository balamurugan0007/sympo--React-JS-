import React from 'react'
import eventdetail from './event/eventdetail'
import Card from '../../components/card'

const Event = () => {
  return (
    <div className='w-full px-5 ml-3 lg:ml-0 '>

        <h2 className='lg:text-3xl text-xl font-bold font-lora text-slate-300 text-center lg:mt-16 '>Event List</h2>
           
  

        <div className='  justify-center flex lg:mt-4 '>
           
           <div className=' lg:w-1/2 flex-wrap lg:flex justify-center'>

           

           {
                eventdetail && eventdetail.map((res)=>(
               <Card key={res.id} res={res} />
    ))
            }
           </div>
        </div>

       
      
    </div>
  )
}

export default Event
