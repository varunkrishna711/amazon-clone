import React, {createContext, useContext, useReducer} from "react";

export const StateContext = createContext();

//Wrap our app and provide the Data layer. To use the data from wherever in the app.
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);