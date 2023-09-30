import React from 'react'
import {LiaHandPointRight} from 'react-icons/lia'

import logo from '../../assets/WhatsApp Image 2023-09-26 at 1.14.32 PM.jpeg'
import { useNavigate } from 'react-router-dom'

const TextItems = () => {

  const navigate =useNavigate();
  return (
    <div className='px-3 justify-center'>
        <h2 className='font-lora mt-2 lg:mt-5 text-5xl lg:text-7xl font-bold text-slate-50 text-center'>HERTZ 23</h2>
        <h2 className='font-lora mt-2 lg:mt-5 text-5xl lg:text-7xl font-bold text-slate-50 text-center'>2.0</h2>
        <div className='lg:flex mt-5 justify-center  '>
             <div className='lg:w-1/2 lg:block hidden'>
               <div className='bg-slate-700 lg:w-96 h-60 lg:ml-auto lg:mr-40'>
               <img src={logo} alt='pic' className='lg:w-96 h-80 object-cover mt-5 '/>
               </div>
            </div>

            <div className='justify-center lg:w-1/2 '>
                <h2 className='font-poppins mt-5 lg:mt-5 text-sm  lg:text-xl font-light text-slate-400 lg:w-4/5 '>
                  HERTZ is National Level Technical Symposium organised by Electronics & communication students Association Of CARE college of Engineering Trichy.The main aim of ECSA is to impulse the minds of adroit students who are performing with high frequency in the smart arena of Electronics & Communication
                </h2>
                


                  <div className='justify-center mt-3  px-4 lg:px-0'>
                      <ul className='justify-center '>
                        <li className='font-inter font-medium text-sm lg:text-xl text-purple-600 flex items-center'> <LiaHandPointRight className='mr-2 text-slate-200'/><h2>Date: 20 th October </h2> </li>
                        <li className='font-inter  font-medium text-sm lg:text-xl text-purple-600 flex items-center'><LiaHandPointRight className='mr-2 text-slate-200'/><h2>Registration Fees: 200 /- only <span className='text-slate-300'>( for all events )</span> </h2></li>
                        <li className='font-inter  font-medium text-sm lg:text-xl text-purple-600 flex items-center'><LiaHandPointRight className='mr-2 text-slate-200'/><h2>Cash prizes will be there </h2></li>
                    </ul>
                  </div>

                  <div className='justify-center  mt-12 px-10 mb-10'>
                          <button className='font-poppins text-sm lg:text-2xl font-bold text-slate-100 bg-purple-800 rounded-md w-60 lg:w-80 h-8 lg:h-16  lg:ml-20' onClick={()=>navigate('/register')}>Register</button>
                      </div>

                 

            </div>
        </div>

     
    </div>
  )
}

export default TextItems
