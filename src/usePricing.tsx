import React, { createContext, useContext, useReducer } from 'react';

const priceInitialState = { 
    paymentModel: "monthly",
    currency: "USD",
}
const StateContext = createContext(priceInitialState);

interface Props {
    
}

const priceReducer = (state,action) => { 
    switch (action.type) {
        case "GET_PAYMENT_MODEL":
            return state.paymentModel
        case "GET_CURRENCY":
            return state.currency
        case "SET_PAYMENT_MODEL":
            return state = { ...state, paymentModel: action.payload}
        case "SET_CURRENCY":
            return state = { ...state, currency: action.payload}
        default:
            return state
    }
}




export const StateProvider = ({ reducer = priceReducer, initialState = priceInitialState, children }) => (
  <StateContext.Provider value={useReducer(reducer,initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);