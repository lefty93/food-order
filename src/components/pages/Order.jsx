import React from 'react'
import { motion } from 'framer-motion'
import { textVariant2 } from '../../utils/motion'
import { styles } from '../../styles'

//TODO Can show items that added to cart on left side, can show total price on right side


const Order = () => {


    return (
        <section className='mx-auto container mb-10'>
            <div className='mt-[120px] flex flex-col'>
                <motion.div animate="show" initial="hidden" variants={textVariant2(0.5)} className='mb-6 mx-5 xl:mx-12'>
                    <h2 className={`${styles.sectionHeadText}`}>SHOPPING CART</h2>
                    <p className={`${styles.sectionSubText}`}>Check before proceed</p>
                </motion.div>
            </div>
            <div className='mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0'>
                <div className='rounded-lg md:w-2/3'>
                    <div className='justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start'>
                        <img src="" alt="" className='w-full rounded-lg sm:w-40' />
                    </div>
                </div>
                {/* Sub total */}
                <div className='mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3'>
                    <div className='mb-2 flex justify-between'>
                        <p>Subtotal</p>
                        <p>Coffee Price</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>Shipping</p>
                        <p>Shipping Price</p>
                    </div>
                    <hr className='my-4' />
                    <div className='flex justify-between'>
                        <p className='text-lg font-bold'>Total</p>
                        <div>
                            <p>Total Price</p>
                            <p>including VAT</p>
                        </div>
                    </div>
                    <button className='mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600'>Check out</button>
                </div>
            </div>
        </section>
        // Sub total


    )
}

export default Order