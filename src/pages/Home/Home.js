import React from 'react'
import Navbar from '../../components/navbar'
import Banner from '../../components/Banner'
import TextItems from './TextItems'
import Event from './event'
import Past from './past/Past'

const Home = () => {
  return (
    <div className='bg-slate-900'>
     
      <Banner/>
      <TextItems/>
      <Event/>
      <Past/>
    </div>
  )
}

export default Home
