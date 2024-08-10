
import Hero from '@/components/helpers/Hero'
import { Navbar } from '@/components/helpers/Navbar'
import React from 'react'

async function  page() {
  
  return (
    <div className='w-screen h-screen bg-gradient-to-r from-rose-100 to-teal-100 '>
      <Navbar/>
      <Hero/>  
    </div>
    )
  
}

export default page








