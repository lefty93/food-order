import React from 'react'
import { useStateValue } from '../context/StateProvider'



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
    <div className='my-5 flex md:flex-row w-full flex-col'>
      <div className='flex flex-row w-full'>
        <img src={image} alt="" className='object-contain md:w-44 md:h-44 h-32 w-32' />
        <div>
          <p className='text-sm md:text-xl font-semibold md:font-extrabold'>{name}</p>
          <p className='mt-2'>
            <small>$</small>
            <strong>{price}</strong>
          </p>
        </div>

      </div>
      <div className='flex md:flex-row ml-[120px]'>
        <button onClick={removeFromCart}>Remove from basket</button>
        <button
          onClick={handleDecrease}
          className='px-2 py-1 h-8 w-8 bg-blue-500 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-xl font-semibold'>-</button>
        <p className='px-2 py-1'>{count}</p>
        <button
          onClick={handleIncrease}
          className='px-2 py-1 h-8 w-8 bg-blue-500 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-xl font-semibold'>+</button>
      </div>
    </div>
  )
}

export default CartItems