import React from 'react'
import { motion } from 'framer-motion'
import { textVariant2 } from '../../utils/motion'
import { styles } from '../../styles'
import { useStateValue } from '../../context/StateProvider'
import CartItems from '../CartItems'
import SubTotal from '../SubTotal'





//TODO Can show items that added to cart on left side, can show total price on right side


const Order = () => {
    const [{ cart }, dispatch] = useStateValue();

    return (
        <section className='mx-auto container mb-10'>
            <div className='mt-[120px] flex flex-col'>
                <motion.div animate="show" initial="hidden" variants={textVariant2(0.5)} className='mb-6 mx-5 xl:mx-12'>
                    <h2 className={`${styles.sectionHeadText}`}>SHOPPING CART</h2>
                    <p className={`${styles.sectionSubText}`}>Check before proceed</p>
                </motion.div>
            </div>

            <div className='mx-auto md:mx-12 max-w-full justify-center px-6 md:flex md:space-x-6 xl:px-0 gap-11'>
                <div className='rounded-lg md:w-2/3 '>
                    <div className='justify-between mb-6 rounded-lg bg-white h-full shadow-md sm:flex sm:justify-start flex flex-col'>
                        {cart?.length === 0 ? (
                            <p className='p-8'>
                                You have no items in your cart. To buy one or more, click "Add to basket" next to the item.
                            </p>
                        ) : (
                            cart.map((item, index) => (
                                <CartItems
                                    id={item.id}
                                    name={item.name}
                                    image={item.image}
                                    price={item.price}
                                    count={item.count}
                                    key={item.id}

                                />
                            ))
                        )}

                    </div>
                </div>
                {/* Sub total */}
                <SubTotal />
            </div>
        </section>
    )
}

export default Order