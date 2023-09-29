import React from 'react'
import Navbar from '../../components/navbar'
import Banner from '../../components/Banner'
import TextItems from './TextItems'
import Event from './event'
import Past from './past/Past'
import Particpent from './Particpent'
import Footer from './Footer'

const Home = () => {
  return (
    <div className='bg-slate-900'>
     
      <Banner/>
      <TextItems/>
      <Event/>
      <Past/>
      <Particpent/>
      <Footer/>
    </div>
  )
}

export default Home
