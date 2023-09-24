import React from 'react'
import {LiaHandPointRight} from 'react-icons/lia'

import logo from '../../assets/logo-removebg-preview.png'

const TextItems = () => {
  return (
    <div className='px-3 '>
        <h2 className='font-cokie mt-2 lg:mt-5 text-5xl lg:text-7xl font-bold text-slate-50 text-center'>HERTZ 23</h2>

        <div className='lg:flex mt-5  items-center'>
            <div className='lg:w-1/2 lg:block hidden'>
               <div className='bg-slate-700 lg:w-96 h-60 lg:ml-auto lg:mr-40'>
               <img src={logo} alt='pic' className='lg:w-96 h-60 object-cover '/>
               </div>
            </div>

            <div className='justify-center lg:w-1/2'>
                <h2 className='font-poppins mt-2 lg:mt-5 text-sm lg:text-md font-light text-slate-400  '>Hack-o-holics 4.0 is the annual hackathon organized by St Joseph's Institute Of Technology . It is an in-person 24-hr event for innovatively fostering real-world problem-solving skills.</h2>
                


                  <div className='justify-center mt-3  px-4 lg:px-0'>
                      <ul className='justify-center '>
                        <li className='font-inter font-medium text-sm lg:text-xl text-purple-600 flex items-center'> <LiaHandPointRight className='mr-2 text-slate-200'/><h2>Start-Date: 11 th september </h2> </li>
                        <li className='font-inter  font-medium text-sm lg:text-xl text-purple-600 flex items-center'><LiaHandPointRight className='mr-2 text-slate-200'/><h2>Registration: </h2></li>
                        <li className='font-inter  font-medium text-sm lg:text-xl text-purple-600 flex items-center'><LiaHandPointRight className='mr-2 text-slate-200'/><h2>Cash prizes will be there </h2></li>
                    </ul>
                  </div>

                  <div className='justify-center  mt-12 px-10 mb-10'>
                      <button className='font-poppins text-sm lg:text-2xl font-bold text-slate-100 bg-purple-800 rounded-md  w-40 lg:w-80 h-8 lg:h-16 lg:ml-20'>Register</button>
                  </div>

            </div>
        </div>
    </div>
  )
}

export default TextItems
