import React from 'react'
import { useStateValue } from '../context/StateProvider';

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
                    
                >
                    Add to basket - {price}
                </button>
            </div>
        </div>
    )
}


export default CardComponent