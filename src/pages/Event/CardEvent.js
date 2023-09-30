import React, { forwardRef } from 'react'
import { useNavigate } from 'react-router-dom'

const CardEvent = forwardRef(({res},ref) => {

const ruleses =res.rules

    const navigate=useNavigate();
  return (
    <div ref={ref} className='w-full justify-center lg:mt-8 mt-2 '>
    <div class="relative hidden  lg:flex  w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div class="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
    <img
      src={res.img}
      alt="image"
      class="h-full w-full object-cover"
    />
  </div>
  <div class="p-6">
    <h6 class="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
      {res.name}
    </h6>
    <h4 class="mb-2 block font-lora font-bold text-2xl  leading-snug tracking-normal text-blue-gray-900 antialiased">
     {res.main}
    </h4>
  

  {/* =======Rule====*/}
  <div className='rules mt-5 mb-5' id='rules'>

      
        <h2 className='font-lora font-bold text-xl text-purple-700'>Rules :</h2>
         

        <div className='px-4 mt-2 '>
                <div className='flex mt-2'>
                  <p className='ml-2 '>{res.rules[0].id}</p> <p>).</p>
                  <h2 className='font-poppins font-medium text-md text-slate-700'> {res.rules[0].rule}</h2>
                </div>

                <div className='flex mt-2'>
                  <p className='ml-2 '>{res.rules[1].id}</p> <p>).</p>
                  <h2 className='font-poppins font-medium text-md text-slate-700'> {res.rules[1].rule}</h2>
                </div>

                <div className='flex mt-2'>
                  <p className='ml-2'>{res.rules[2].id}</p> <p>).</p>
                  <h2 className='font-poppins font-medium text-md text-slate-700'> {res.rules[2].rule}</h2>
                </div>

               

               

               





                   
            </div>
   
   </div>
  
    <a class="inline-block" className='justify-between flex' href="#">
      <button
        class="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
        onClick={()=>navigate("/register")}

      >
        Register
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          aria-hidden="true"
          class="h-4 w-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          ></path>
        </svg>
      </button>
      <button class="block font-inter w-20 h-10  text-base cursor-pointer font-normal rounded-lg leading-relaxed text-inherit antialiased hover:bg-slate-700 hover:text-slate-200"
    onClick={()=>navigate('/')}>
     Back
    </button>
    </a>
  </div>
</div>




<div class="lg:hidden relative mt-3 flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div class="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
    <img
      src={res.img}
      alt="ui/ux review check"
      className='w-full rounded-t-md'
    />
  </div>
  <div class="p-6">
  <h6 class="mb-4 block font-sans text-base text-center font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
      {res.name}
    </h6>
    {/* =======Rule====*/}
  <div className='rules mt-5 mb-5' id='rules'>
  <h4 class="mb-2 block font-lora font-bold text-2xl  leading-snug tracking-normal text-blue-gray-900 antialiased">
     {res.main}
    </h4>
  
        <h2 className='font-lora font-bold text-xl text-purple-700'>Rules :</h2>
         

        <div className='px-4 mt-2 '>
                <div className='flex mt-2'>
                  <p className='ml-2 '>{res.rules[0].id}</p><p>).</p>
                  <h2 className='font-poppins font-medium text-md text-slate-700'> {res.rules[0].rule}</h2>
                </div>

                <div className='flex mt-2'>
                  <p className='ml-2 '>{res.rules[1].id}</p><p>).</p>
                  <h2 className='font-poppins font-medium text-md text-slate-700'> {res.rules[1].rule}</h2>
                </div>

                <div className='flex mt-2'>
                  <p className='ml-2'>{res.rules[2].id}</p><p>).</p>
                  <h2 className='font-poppins font-medium text-md text-slate-700'> {res.rules[2].rule}</h2>
                </div>

                   
            </div>
   
   </div>
  </div>
  <div class="flex items-center justify-between p-6">
    <div class="flex items-center -space-x-3">
      <img
        alt="natali craig"
        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
        class="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center hover:z-10"
        data-tooltip-target="author-1"
      />
      <div
        data-tooltip="author-1"
        class="absolute z-50 whitespace-normal break-words rounded-lg bg-black py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none"
      >
     
      </div>
      <img
        alt="tania andrew"
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
        class="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center hover:z-10"
        data-tooltip-target="author-2"
      />
      <div
        data-tooltip="author-2"
        class="absolute z-50 whitespace-normal break-words rounded-lg bg-black py-1.5 px-3 font-poppins  text-md font-normal text-white focus:outline-none"
        onClick={()=>navigate("/register")}
      >
       Register
      </div>
    </div>
    <button class="block font-inter w-20 h-10  text-base cursor-pointer font-normal rounded-lg leading-relaxed text-inherit antialiased hover:bg-slate-700 hover:text-slate-200"
    onClick={()=>navigate('/')}>
     Back
    </button>
  </div>
</div>

    </div>
  )
})

export default CardEvent
