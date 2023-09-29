import React from 'react'
import {ImMail} from "react-icons/im"
import {AiOutlineUser} from "react-icons/ai"
const Footer = () => {
  return (
    <div>
   
<footer className="relative bg-blueGray-200 pt-8 pb-6 bg-slate-100">
    <h2 className='text-xl lg:text-2xl font-lora font-bold text-purple-700 text-center lg:mb-5 mt-4 lg:mt-1'>Department Of Electronics and Communication Engineering </h2>
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap text-left lg:text-left">
      <div className="w-full lg:w-6/12 px-4">
        <h4 className="text-3xl font-bold text-blueGray-700 font-inter mt-4 lg:mt-0 ">Let's keep in touch!</h4>
        <h5 className="text-lg  mb-2 text-blueGray-600 font-poppins lg:mt-0 mt-3">
         Contact links
        </h5>
        <div className="mt-6 lg:mb-0 mb-6">
            <button className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <i className="fab fa-facebook-square"></i></button>
            
            <button className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <i className="fab fa-dribbble"></i></button>
            
            <button className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <i className="fab fa-github"></i>
          </button>
        </div>

        <span className="block uppercase text-blueGray-500  text-sm font-semibold mb-2 mt-3">Event co-ordinator </span>
         <div className='px-3'>
             <span className='lg:flex'>
            <div className='flex items-center'>
            <AiOutlineUser/> 
                <h4 className='font-medium text-md font-roboto text-slate-600 ml-1 mr-3'>KanchuLokesh -</h4>
            </div>
                <p>7729885753</p>
             </span>

             <span className='lg:flex'>
             <div className='flex items-center'>
             <AiOutlineUser/>
             <h4 className='font-medium text-md font-roboto text-slate-600 ml-1 mr-3'> Anandha Chandru -</h4>
             </div>
                <p>7397741508</p>
             </span>
         </div>
       
      </div>
      <div className="w-full lg:w-6/12 px-4">
        <div className="flex flex-wrap items-top mb-6">
          <div className="w-full lg:w-4/12 px-4 ml-auto">
            <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2 mt-4 lg:mt-0">Devloper Contact</span>
            <ul className="list-unstyled">
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-inter font-semibold block pb-2 text-sm" href="https://balamurugan-portfolio.web.app/">Portfolio</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-inter font-semibold block pb-2 text-sm" href="https://medium.com/@balamurugan.k.02437">Blog</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-inter font-semibold block pb-2 text-sm" href="https://github.com/balamurugan0007">Github</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold font-inter block pb-2 text-sm" href="https://www.linkedin.com/in/bala-murugan-20794b252/">Linkedin</a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-4/12 px-4">
            <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2 lg:mt-0 mt-4">Other Resources</span>
            <ul className="list-unstyled">
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="">License</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="">Terms &amp; Conditions</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="">Privacy Policy</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr className="my-6 border-blueGray-300"/>
    <div className="flex flex-wrap items-center md:justify-between justify-center">
      <div className="w-full md:w-4/12 px-4 mx-auto text-center">
        <div className="text-sm text-blueGray-500 font-semibold py-1">
          Copyright © <span id="get-current-year">2023</span><a href="https://balamurugan-portfolio.web.app/" className="text-blueGray-500 hover:text-gray-800" target="_blank">by </a>
          <a href="https://balamurugan-portfolio.web.app/" className="text-blueGray-500 hover:text-blueGray-800"> Balamurugan</a>.
        </div>
      </div>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer
