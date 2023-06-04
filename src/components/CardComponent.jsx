import React from 'react'
import { useStateValue } from '../context/StateProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CardComponent = ({ id, name, image, price }) => {
    const [{ cart }, dispatch] = useStateValue();
    const addToCart = () => {
        console.log("Dispatching ADD_TO_CART action");

        dispatch({
            type: "ADD_TO_CART",
            coffee: {
                id: id,
                name: name,
                image: image,
                price: price,
            }

        });
        toast.success("You have add a drink.");
    }

    return (
        <div className="rounded-lg border border-gray-300 flex flex-col">
            <div className="sm:p-4 p-1">
                <div className='mb-8'>
                    <img
                        className="object-contain"
                        src={image}
                        alt={name} />
                    <h3
                        className="text-sm font-bold ml-4 md:ml:0'">
                        {name}
                    </h3>
                </div>
                
                <div className='flex items-center gap-5 mt-5 mb-3'>
                    <span className='ml-4 md:ml:0'>${price}</span>
                    <button
                        type="button"
                        className="rounded bg-secondary px-3 pb-3 pt-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] hover:bg-tertiary"
                        onClick={addToCart}
                    >
                        Add to basket
                    </button>
                </div>
            </div>
        </div>
            
        
    )
}


export default CardComponent