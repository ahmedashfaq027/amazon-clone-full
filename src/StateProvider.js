import React, { createContext, useReducer, useContext } from "react";

// Prepares the dataLayer
export const StateContext = createContext();

// Wrap our app and provide the Data Layer
export const StateProvider = ({ reducer, initialState, children }) => (
  // eslint-disable-next-line no-unused-expressions
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull information from data layer
export const useStateValue = () => useContext(StateContext);
