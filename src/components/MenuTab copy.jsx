import React, { useState } from 'react'
import { coffeeMenu, frappuccinoMenu } from '../constants'
import CardComponent from './CardComponent'
const MenuTab = () => {
    const [selectedTab, setSelectedTab] = useState("coffee")

    const handleTabChange = (tab) => {
        setSelectedTab(tab);
    }
    return (
        <div className=''>
            <ul className='mx-auto grid w-full grid-cols-1 md:grid-cols-2 gap-5 px-8'>
                <li className='flex justify-center'>
                    <input
                        className="peer sr-only"
                        type="radio"
                        value="coffee"
                        name="answer"
                        id="coffee"
                        defaultChecked={selectedTab === 'coffee'}
                        onChange={() => handleTabChange('coffee')}
                    />

                    <label
                        className={`flex w-full md:w-2/3 justify-center cursor-pointer rounded-full border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none ${selectedTab === 'coffee' ? 'peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-indigo-500' : ''
                            } transition-all duration-500 ease-in-out`}
                        htmlFor="coffee"
                    >
                        Coffee & Espresso
                    </label>

                </li>

                <li className='flex justify-center'>
                    <input
                        className="peer sr-only"
                        type="radio"
                        value="frappuccino"
                        name="answer"
                        id="frappuccino"
                        defaultChecked={selectedTab === 'frappuccino'}
                        onChange={() => handleTabChange('frappuccino')}
                    />

                    <label
                        className={`flex w-full md:w-2/3 justify-center cursor-pointer rounded-full border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none ${selectedTab === 'frappuccino' ? 'peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-indigo-500' : ''
                            } transition-all duration-500 ease-in-out`}
                        htmlFor="frappuccino"
                    >Frapuccino</label>
                </li>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 absolute">
                    {selectedTab === 'coffee' &&
                        coffeeMenu.map((coffee, index) => (
                            <CardComponent {...coffee} key={index} />
                        ))}
                    {selectedTab === 'frappuccino' &&
                        frappuccinoMenu.map((coffee, index) => (
                            <CardComponent {...coffee} key={index} />
                        ))}
                </div>
                
            </ul>



        </div>

    )
}

export default MenuTab