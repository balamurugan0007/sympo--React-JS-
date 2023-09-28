import React from 'react'
import { useNavigate } from 'react-router-dom'
import {RiMenu3Line} from "react-icons/ri"
import logo from '../assets/care1.png'


const Navbar = () => {
  
    const navigate=useNavigate();
  return (
   <div className='w-full bg-purple-950'>
     <div className='flex px-10  justify-center items-center bg-purple-950'>
   
   <div className='hidden lg:flex p-3 '>
   <img src={logo} className='w-40 h-8 m-3' alt='pic'/>
      <h4 className='font-medium ml-7 m-3  font-poppins text-md cursor-pointer  text-slate-300 hover:text-slate-50 hover:border-b-2 border-blue-700' onClick={()=>navigate('/')}>Home</h4>
      <h4 className='font-medium ml-7 m-3  font-poppins text-md cursor-pointer  text-slate-300 hover:text-slate-50 hover:border-b-2 border-blue-700' onClick={()=>navigate('/register')}>Register</h4>

      <h4 className='font-medium ml-7 m-3  font-poppins text-md cursor-pointer  text-slate-300 hover:text-slate-50 hover:border-b-2 border-blue-700' onClick={()=>navigate('/about')}>About</h4>

      <h4 className='font-medium ml-7 m-3  font-poppins text-md cursor-pointer  text-slate-300 hover:text-slate-50 hover:border-b-2 border-blue-700'onClick={()=>navigate('/contact')}>contacts</h4>
   </div>
   
</div>
<div className='lg:hidden flex justify-center items-center bg-purple-950 px-1'>
<h4 className='font-bold ml-7 m-3  font-cokie text-2xl cursor-pointer  text-slate-50' onClick={()=>navigate('/')}>
    <img src={logo} className='w-40 h-20' alt='pic'/>
   </h4>
     
      
   </div>

   
   </div>
  )
}

export default Navbar
