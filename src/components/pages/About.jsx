import React from 'react'
import { aboutbg } from '../../assets'
import { motion } from 'framer-motion'
import { textVariant } from '../../utils/motion'
import { styles } from '../../styles'
import { paragraphs } from '../../constants'

const About = () => {
  return (

    <>
      <div className='text-center relative sm:my-10 mt-[120px] flex'>
        <img src={aboutbg} alt="" className='w-full h-full sm:max-w-none sm:max-h-none' />
        <motion.div initial="hidden" animate="show" variants={textVariant()} className='absolute inset-0 flex flex-col justify-center items-center text-center'>
          <h2 className='text-lg font-bold text-white mb-4'>ABOUT US</h2>
          <p className='font-semibold text-4xl text-white'>Starbucks Malaysia</p>
        </motion.div>
      </div>
      <div className='flex flex-col mx-10 mt-10 sm:mx-[120px]'>
        {paragraphs.map((paragraph) => (
          <p className='text-justify pb-4' key={paragraph.id}>{paragraph.content}</p>
        ))}
      </div>
    </>

  )
}

export default About