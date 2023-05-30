// import React, { createContext, useContext, useReducer } from "react";


// export const StateContext = createContext();

// export const StateProvider = ({ reducer, initialState, children }) => (
//     <StateContext.Provider value={useReducer(reducer, initialState)}>
//         {children}
//     </StateContext.Provider>
// )
// export const useStateValue = () => useContext(StateContext)

import React, { createContext, useContext, useReducer } from 'react';

// Create the StateContext
const StateContext = createContext();

// Define the StateProvider component
const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Define the custom hook useStateValue
const useStateValue = () => useContext(StateContext);

export { StateProvider, useStateValue };
