import React from 'react'
import { useNavigate } from 'react-router-dom'
import {RiMenu3Line} from "react-icons/ri"
import logo from '../assets/logo-removebg-preview.png'

const Navbar = () => {

    const navigate=useNavigate();
  return (
   <div className='w-full bg-purple-950'>
     <div className='flex px-10  justify-center items-center bg-purple-950'>
   
   <div className='hidden lg:flex p-3 '>
      <h4 className='font-medium ml-7 m-3  font-poppins text-md cursor-pointer  text-slate-300 hover:text-slate-50 hover:border-b-2 border-blue-700' onClick={()=>navigate('/')}>Home</h4>
      <h4 className='font-medium ml-7 m-3  font-poppins text-md cursor-pointer  text-slate-300 hover:text-slate-50 hover:border-b-2 border-blue-700'>Register</h4>
      <h4 className='font-medium ml-7 m-3  font-poppins text-md cursor-pointer  text-slate-300 hover:text-slate-50 hover:border-b-2 border-blue-700' onClick={()=>navigate('/Brandings')}>Events</h4>
      <h4 className='font-medium ml-7 m-3  font-poppins text-md cursor-pointer  text-slate-300 hover:text-slate-50 hover:border-b-2 border-blue-700' onClick={()=>navigate('/Designs')}>About</h4>

      <h4 className='font-medium ml-7 m-3  font-poppins text-md cursor-pointer  text-slate-300 hover:text-slate-50 hover:border-b-2 border-blue-700'>contacts</h4>
   </div>
   
</div>
<div className='lg:hidden flex justify-between items-center bg-purple-950 px-3'>
   <h4 className='font-bold ml-7 m-3  font-cokie text-2xl cursor-pointer  text-slate-50' onClick={()=>navigate('/')}>Hertz</h4>
        <RiMenu3Line className='text-slate-50 ml-auto'/>
       
   </div>
   </div>
  )
}

export default Navbar
