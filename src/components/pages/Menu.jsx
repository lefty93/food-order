import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { coffeeMenu } from '../../constants'
import { container, variants, item } from '../../utils/motion'
import { textVariant2 } from '../../utils/motion'
import { styles } from '../../styles'
import CardComponent from '../CardComponent'




const Menu = () => {
  

  return (
    <section className='mx-auto container mb-10'>
      <div className='mt-[120px] flex flex-col' >

        <motion.div animate="show" initial="hidden" variants={textVariant2(0.5)} className='mb-6 mx-5 xl:mx-12'>
          <h2 className={`${styles.sectionHeadText}`}>MENU</h2>
          <p className={`${styles.sectionSubText}`}>Amazing Coffee And Handcrafted Beverages To Discover And Enjoy</p>
        </motion.div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 items-center gap-5 mx-12'>
          {coffeeMenu.map((coffee, index) => (
            <CardComponent {...coffee} key={index} />
          ))}
        </div>
      </div>

    </section>


  )
}

export default Menu