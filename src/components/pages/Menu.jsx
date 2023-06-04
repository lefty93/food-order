import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { coffeeMenu } from '../../constants'
import { container, variants, item } from '../../utils/motion'
import { textVariant2 } from '../../utils/motion'
import { styles } from '../../styles'
import CardComponent from '../CardComponent'
import MenuTab from '../MenuTab'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Menu = () => {


  return (
   
      <section className='mx-auto py-32'>
        <div className='flex flex-col'>

          <motion.div animate="show" initial="hidden" variants={textVariant2(0.5)} className='mb-6 mx-5 xl:mx-12'>
            <h2 className={`${styles.sectionHeadText}`}>MENU</h2>
            <p className={`${styles.sectionSubText}`}>Amazing Coffee And Handcrafted Beverages To Discover And Enjoy</p>
          </motion.div>

          <MenuTab />
          <ToastContainer autoClose={1200} />

        </div>
      </section>

      
    
   

  )
}

export default Menu