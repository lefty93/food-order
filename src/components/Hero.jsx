import React from 'react'
import { herobg } from '../assets'

const Hero = () => {
  return (
    <>
      <img src={herobg} alt="background-img" className='mx-auto col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-12 2xl:col-span-12 hidden sm:block w-full'/>
    </>
  )
}

export default Hero