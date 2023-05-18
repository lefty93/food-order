import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { coffeeMenu } from '../../constants'
import { container, variants, item } from '../../utils/motion'
import { textVariant2 } from '../../utils/motion'
import { styles } from '../../styles'

const CardComponent = ({ name, image, price }) => {
  return (
    <div
      className="border-[2px] rounded-[20px] bg-white w-full container flex flex-col sm:items-start items-center">

      <img
        className="object-contain rounded-[20px]"
        src={image}
        alt={name} />

      <div className="p-10">
        <h5
          className="mb-2 text-lg font-medium leading-tight text-black">
          {name}
        </h5>
        <button
          type="button"
          className="inline-block rounded bg-secondary px-6 pb-2 pt-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] hover:bg-tertiary"
          data-te-ripple-init
          data-te-ripple-color="light">
          Add to basket - {price}
        </button>
      </div>




    </div>
  )
}


const Menu = () => {
  const [show, setShow] = useState(false);
  const [info, setInfo] = useState();


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