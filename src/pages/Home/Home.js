import React from 'react'
import Navbar from '../../components/navbar'
import Banner from '../../components/Banner'
import TextItems from './TextItems'

const Home = () => {
  return (
    <div className='bg-slate-900'>
      <Navbar/>
      <Banner/>
      <TextItems/>
    </div>
  )
}

export default Home
