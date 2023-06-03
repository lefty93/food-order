import React from 'react'
import currency from 'currency.js'
import { useStateValue } from '../context/StateProvider'
// import { getCartTotal, getDeliveryFee } from '../context/reducer'
import { getCartTotalAndDeliveryFee } from '../context/reducer'


const SubTotal = () => {
  const [{ cart },] = useStateValue();
  // const price = currency(getCartTotal(cart), { separator: "," }).format();
  // const deliveryFee = currency(getDeliveryFee(cart), {separator: ""}).format();
  const cartItemsPrice = currency(getCartTotalAndDeliveryFee(cart).cartItems, { separator: "," }).format();
  const cartTotalPrice = currency(getCartTotalAndDeliveryFee(cart).cartTotal, { separator: "," }).format();
  const deliveryFee = currency(getCartTotalAndDeliveryFee(cart).deliveryFee, { separator: "," }).format();
  return (
    <div className='mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3'>
      <div className='mb-2 flex justify-between'>
        <p>Subtotal</p>
        <p>{cartItemsPrice}</p>
      </div>
      <div className='flex justify-between'>
        <p>Delivery Fee</p>
        <p>{deliveryFee}</p>
      </div>
      <hr className='my-4' />
      <div className='flex justify-between'>
        <p className='text-lg font-bold'>Total</p>
        <div>
          <p>{cartTotalPrice}</p>
          <p>including VAT</p>
        </div>
      </div>
      <button className='mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600'>Check out</button>
    </div>
  )
}

export default SubTotal