import React from 'react'
import { useParams } from 'react-router-dom'
import eventdetail from '../Home/event/eventdetail';
import { useNavigate } from 'react-router-dom';
import CardEvent from './CardEvent';


const Eventpage = (res) => {

  const navigate =useNavigate();
  const data =useParams();
  console.log(data)
  console.log(res)
  return (
    <div className='w-full h-full flex justify-center px-4'>
         
             {
              eventdetail.filter((res)=>res.name===data.name).map((res)=>(
                 <div>
                   <CardEvent key={res.id} res={res}/>
                  
                 </div>
              ))
             }
     
    </div>
  )
}

export default Eventpage
