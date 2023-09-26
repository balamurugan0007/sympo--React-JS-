import React, { useState } from 'react'
import './style.css'
import {IoMdArrowBack} from "react-icons/io"
import { useNavigate } from 'react-router-dom'
import { UseFectch } from '../../hooks/Usefecth'
//import { usepost } from '../../exel/Exel'

const Register = () => {
    const navigate =useNavigate()
   
    const [err,seterr]=useState(null)
   const[name ,setname]=useState()
   const [phone,setphone]=useState()
   const [email,setemail]=useState()
   const [department,setdepart]=useState()
   const [college,setcollege]=useState()

    const {datapost}=UseFectch()
  //  const {sheets}=usepost()

  

    const formsubmit =async()=>{
      seterr(null)
       const data ={
        "Name":name,
        "Email":email,
        "Phone":phone,
        "Department":department,
        "College":college,
       }
       try {
        const res = await fetch(
          "https://sheet.best/api/sheets/7ff174fa-7fe4-497b-b5e9-148af98debf5",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );

        navigate("/")
        
      } catch (error) {
        console.log(error);
      }

        
    }

  return (
   <div className='px-3'>
        <div className='flex justify-center items-center mr-3 lg:mr-0'>
           <IoMdArrowBack className=' w-16 h-10 text-slate-300 mr-3 mt-4 lg:mt-0' onClick={()=>navigate('/')}/>
            <h2 className='font-cokie font-bold text-xl lg:text-5xl text-slate-100 mt-5 text-center'>HERTZ  23</h2>
        </div>
    <section className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
    <h1 className="text-xl font-bold text-white capitalize text-center text-lora dark:text-white">Register</h1>
    <div>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label className="text-white font-poppins dark:text-gray-200" for="username">Name</label>
                <input id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" name='Name' onChange={(e)=>setname(e.target.value)}/>
            </div>

            <div>
                <label className="text-white font-poppins dark:text-gray-200" for="emailAddress">Email Address</label>
                <input id="emailAddress" type="email" name='email' className=" font-poppins block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" onChange={(e)=>setemail(e.target.value)}/>
            </div>

            <div>
                <label className="text-white font-poppins dark:text-gray-200" for="username">College Name</label>
                <input id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" name='College' onChange={(e)=>setcollege(e.target.value)}/>
            </div>

            <div>
                <label className="text-white font-poppins dark:text-gray-200" for="username">Department</label>
                <input id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" name='department'onChange={(e)=>setdepart(e.target.value)} />
            </div>

            <div>
                <label className="text-white font-poppins dark:text-gray-200" for="username">Phone</label>
                <input id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" name='phone' onChange={(e)=>setphone(e.target.value)}/>
            </div>
           
            
           
        </div>

        

        <div className="flex justify-end mt-6">
            <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600 font-poppins" onClick={formsubmit}>Save</button>
        </div>
    </div>
</section>

 
   </div>
  )
}

export default Register
