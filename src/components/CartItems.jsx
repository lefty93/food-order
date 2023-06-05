import React from 'react'
import { useStateValue } from '../context/StateProvider'
import { BsFillTrashFill, BsPlusCircleFill, BsDashCircleFill } from "react-icons/bs";



const CartItems = ({ id, name, image, price, count, item }) => {
  const [, dispatch] = useStateValue();
  const removeFromCart = () => {
    dispatch({ type: "REMOVE_FROM_CART", id: id })
  }
  const handleIncrease = () => {
    dispatch({ type: "INCREASE_COUNT", id });
  };

  const handleDecrease = () => {
    dispatch({ type: "DECREASE_COUNT", id });
  };

  return (
    <div className='mt-4 flex md:flex-row w-full flex-col border-b-[1px] border-grey-100 shadow-md'>
      <div className='flex flex-row w-3/4 md:mb-8'>
        <img src={image} alt="" className='object-contain md:w-44 md:h-44 h-32 w-32' />
        <div>
          <p className='text-sm md:text-xl font-semibold md:font-extrabold'>{name}</p>
          <p className='mt-2'>
            <small>$</small>
            <strong>{price}</strong>
          </p>
        </div>
      </div>
      <div className='flex md:flex-col items-center gap-32 mb-8'>
        <BsFillTrashFill onClick={removeFromCart} className='cursor-pointer h-6 w-6 mx-5' />
        <div className='flex border-2 border-secondary h-8 rounded-full'>
          <BsDashCircleFill onClick={handleDecrease} className='h-8 w-8 text-secondary hover:text-tertiary -translate-y-[1.5px] -translate-x-[1px] cursor-pointer' />
          <p className='p-1 mx-2 flex justify-center w-5'>{count}</p>
          <BsPlusCircleFill onClick={handleIncrease} className='h-8 w-8 text-secondary hover:text-tertiary -translate-y-[1.5px] translate-x-[1px] cursor-pointer' />
        </div>
      </div>

    </div>
  )
}

export default CartItems