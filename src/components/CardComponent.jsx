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

    // const notify = () => toast.success("Success Notification !", {
    //     position: toast.POSITION.TOP_CENTER
    // });


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
                    onClick={addToCart}

                >
                    Add to basket - {price}
                </button>
            </div>
            <ToastContainer autoClose={1200} />
        </div>
    )
}


export default CardComponent