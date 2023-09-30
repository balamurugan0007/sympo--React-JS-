import React, { useState,useEffect } from 'react'
import './style.css'
import {IoMdArrowBack} from "react-icons/io"
import { useNavigate } from 'react-router-dom'
import paymentId from "../../assets/paymentId.jpeg"
import {BsWhatsapp} from "react-icons/bs"

//import { usepost } from '../../exel/Exel'
import{useFormik } from "formik"
import * as yup from "yup"

import {client} from '../../database/sanity'
import { DotLoader } from 'react-spinners'
import { SpeedDialHandler } from '@material-tailwind/react'

const Register = () => {
    const navigate =useNavigate()
   
///============date and time ==============================
 
   

   const formik=useFormik({
    initialValues:{
        Name:'',
        Email:'',
        Phone:'',
        College:'',
        Department:'',
        Whatsapp:'',
        City:'',
        Year:'',
        Degree:'',
       


       
    },
    validationSchema:yup.object({
       
        Name:yup.string()
        .strict()
        .required("Must enter your Name"),
        
        
        Email:yup.string()
        .required("Email must required")
        .email(),


        Phone:yup.string()
        .strict()
        .required("Phone Number must require").min(10).max(10),
        
        Department:yup.string()
        .strict()
        .required("Department must require"),

        College:yup.string()
        .strict()
        .required("Department must require"),

        Year:yup.string()
        .strict()
        .required("year must require"),
        
        City:yup.string()
        .strict()
        .required("City must require"),

        Degree:yup.string()
        .strict()
        .required("Department must require"),

      
    
        
        
        
    }),     onSubmit:async(userInputData)=>{

            //const submitdata={...userInputData ,Payment:doc.url }
            console.log(userInputData)

            formsubmit(userInputData)
      
  }

})
  
  //error shows details

  //"https://sheet.best/api/sheets/7ff174fa-7fe4-497b-b5e9-148af98debf5"

    const formsubmit =async(data)=>{
     
      try {
        const res = await fetch(
           //balamurugan api key
          "https://sheet.best/api/sheets/7ff174fa-7fe4-497b-b5e9-148af98debf5",  //me apikey
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );

    
      } catch (error) {
        console.log(error);
      }
 
     
        try {
          const res = await fetch(
             //balamurugan api key
            "https://sheet.best/api/sheets/81fc6b47-6d87-48fe-bcc0-4a8be0b969cc",  //Ecsa api key
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


    ///degreee and year

  


    //file upload to database 

    const [doc,setdoc]=useState(null)
    const [file,setfile]=useState()
    const [loading ,setloading]=useState()
    

    function paymentUpload(e) {
        setloading(true)
        setfile(false)
        
       
        const selectedFile = e.target.files[0];
        // uploading asset to sanity
        if (
          selectedFile.type === "image/png" ||
          selectedFile.type === "image/svg" ||
          selectedFile.type === "image/jpeg" ||
          selectedFile.type === "image/gif" 
          
        ) {
         
          client.assets
            .upload("image", selectedFile, {
              contentType: selectedFile.type,
              filename: selectedFile.name,
            })
            .then((document) => {
             
              console.log(document)
              setdoc(document)
              setloading(false)
            

            })
            .catch((error) => {
              console.log("Upload failed:", error.message);
            });
      }
  
      else{
       
        setfile(true)
  
      }
    }

 



  return (
   <div className='px-3'>
        <div className='flex justify-center items-center mr-3 lg:mr-0'>
           <IoMdArrowBack className=' w-16 h-10 text-slate-300 mr-3 mt-4 lg:mt-0' onClick={()=>navigate('/')}/>
            <h2 className='font-lora font-bold text-xl lg:text-5xl text-slate-100 mt-5 text-center'>HERTZ'23</h2>
        </div>
    <section className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
    <h1 className="text-xl font-bold text-white capitalize text-center text-lora dark:text-white">Register</h1>
    <form onSubmit={formik.handleSubmit}>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label className="text-white font-poppins dark:text-gray-200" for="username">Name</label>
                <input id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" name='Name' onChange={formik.handleChange} value={formik.values.Name}/>
                {formik.errors.Name ?
                            <div className='text-red-500 font-poppins font-medium text-md'> * {formik.errors.Name}</div>
                            :null}
            </div>

            <div>
                <label className="text-white font-poppins dark:text-gray-200" for="emailAddress">Email Address</label>
                <input id="emailAddress" type="email" name='Email' className=" font-poppins block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" onChange={formik.handleChange} value={formik.values.Email}/>
                {formik.errors.Email ?
                            <div className='text-red-500 font-poppins font-medium text-md'> * {formik.errors.Email}</div>
                            :null}
            </div>

            <div>
                <label className="text-white font-poppins dark:text-gray-200" for="username">College Name</label>
                <input id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" name='College' onChange={formik.handleChange} value={formik.values.College}/>
                {formik.errors.College ?
                            <div className='text-red-500 font-poppins font-medium text-md'> * {formik.errors.College}</div>
                            :null}
            </div>


            <div>
                <label className="text-white font-poppins dark:text-gray-200" for="username">Degree</label>
                <input id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" name='Degree' onChange={formik.handleChange} value={formik.values.Degree}/>
                {formik.errors.Degree ?
                            <div className='text-red-500 font-poppins font-medium text-md'> * {formik.errors.Degree}</div>
                            :null}
            </div>

            <div>
                <label className="text-white font-poppins dark:text-gray-200" for="username">Department</label>
                <input id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" name='Department'onChange={formik.handleChange} value={formik.values.Department} />
                {formik.errors.Department ?
                            <div className='text-red-500 font-poppins font-medium text-md'> * {formik.errors.Department}</div>
                            :null}
            </div>

           

            <div>
                <label className="text-white font-poppins dark:text-gray-200" for="username">Year</label>
                <input id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" name='Year'onChange={formik.handleChange} value={formik.values.Year} />
                {formik.errors.Year ?
                            <div className='text-red-500 font-poppins font-medium text-md'> * {formik.errors.Year}</div>
                            :null}
            </div>

            <div>
                <label className="text-white font-poppins dark:text-gray-200" for="username">Whatsapp</label>
                <input id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" name='Whatsapp' onChange={formik.handleChange} value={formik.values.Whatsapp}/>
                
            </div>
           
            <div>
                <label className="text-white font-poppins dark:text-gray-200" for="username">City</label>
                <input id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" name='City' onChange={formik.handleChange} value={formik.values.City}/>
                {formik.errors.City ?
                            <div className='text-red-500 font-poppins font-medium text-md'> * {formik.errors.City}</div>
                            :null}
            </div>

            <div className='justify-center'>

              <h2 className='text-xl font-lora text-start  text-slate-100'>Payment Id</h2>
                 <img src={paymentId} alt='pic' className='h-60 w-80 object-contain mt-2' />
            </div>
            
            <div >
              {loading && <DotLoader color="#36d7b7" />}
              {
                doc ? <div className='w-40 h-40 justify-center'>
                  <img src={doc.url} alt='pic' className='w-full h-full object-contain '/>
                  <button className='text-sm text-slate-100 bg-red-800 rounded-md w-20 h-12 ' onClick={()=>setdoc(null)}>Cancel</button>
                </div> :
                <div>
                  <label className='text-white font-poppins'>Upload payment Image</label>
              <input type='file' onChange={paymentUpload}/>
                </div>
              }
            </div>
           
        </div>

       
         
    

        
        <div className='flex items-center bg-white'>
  <h2 className='font-poppins font-medium text-md text-slate-700'>join our WhatsApp Group for Event Updates</h2>
           <a href='https://chat.whatsapp.com/Jlcp3KBZozM2yF8Aya2Xqs'>
           <span className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
             <BsWhatsapp className='text-green-600 w-10 h-10'/>
          </span>
           </a>
  </div>
     


        <div className="flex justify-end mt-6">
            <button type='submit' className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600 font-poppins">Save</button>
        </div>
    </form>
</section>

 

 
   </div>
  )
}

export default Register
