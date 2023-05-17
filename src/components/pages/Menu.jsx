import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { coffeeMenu } from '../../constants'
import { container, variants, item } from '../../utils/motion'
import { textVariant2 } from '../../utils/motion'
import { styles } from '../../styles'


// TODO make card component that include image, title, price and 'add' button
const CardComponent = ({ name, image, price }) => {
  return (
    <div
      className="rounded-[20px] bg-white py-5 px-12 min-h-[230px] shadow-card w-full">
      <a href="#!">
        <img
          className="object-contain"
          src={image}
          alt="" />
      </a>
      <div className="p-7">
        <h5
          className="mb-2 text-sm font-medium leading-tight text-primary">
          {name}
        </h5>
        <p>{price}</p>
        <button
          type="button"
          className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          data-te-ripple-init
          data-te-ripple-color="light">
          Button
        </button>
      </div>
    </div>
  )
}


const Menu = () => {
  const [show, setShow] = useState(false);
  const [info, setInfo] = useState();


  return (
    <section className='mx-[120px]'>
      <div className='mt-[120px] flex flex-col' >

        <motion.div animate="show" initial="hidden" variants={textVariant2()} className='mb-6'>
          <h2 className={`${styles.sectionHeadText}`}>MENU</h2>
          <p className={`${styles.sectionSubText}`}>Amazing Coffee And Handcrafted Beverages To Discover And Enjoy</p>
        </motion.div>

        <div className='grid sm:grid-cols-3 grid-rows-3 items-center gap-5'>
          {coffeeMenu.map((coffee) => (
            <CardComponent {...coffee} />
          ))}
        </div>
      </div>

    </section>


  )
}

export default Menu