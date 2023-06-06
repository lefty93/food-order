import React, { useState } from 'react'
import { coffeeMenu, frappuccinoMenu } from '../constants'
import CardComponent from './CardComponent'
const MenuTab = () => {
    const [selectedTab, setSelectedTab] = useState("coffee")

    const handleTabChange = (tab) => {
        setSelectedTab(tab);
    }
    return (
        <div className="flex justify-center mt-4">
            <ul className="grid grid-cols-1 gap-5 md:mx-24 mx-14 md:px-8">
                <li>
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
                        className={`flex items-center justify-center cursor-pointer rounded-full border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none ${selectedTab === 'coffee' ? 'peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-secondary' : ''} transition-all duration-500 ease-in-out`}
                        htmlFor="coffee"
                    >
                        Coffee & Espresso
                    </label>
                </li>
                <li>
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
                        className={`flex items-center justify-center cursor-pointer rounded-full border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none ${selectedTab === 'frappuccino' ? 'peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-secondary' : ''} transition-all duration-500 ease-in-out`}
                        htmlFor="frappuccino"
                    >
                        Frappuccino
                    </label>
                </li>
                <div className="flex justify-center mt-4 gap-10 flex-wrap md:grid md:grid-cols-3">
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