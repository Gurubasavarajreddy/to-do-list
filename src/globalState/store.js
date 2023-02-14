import {React,createContext,useReducer} from 'react'
import {todoReducer,intstialState} from './reducer'

 export const GlobalContext=createContext()

export default function Context({children}) {
    return (
        <GlobalContext.Provider value={useReducer(todoReducer,intstialState)}>
    {children}
    </GlobalContext.Provider>
    )
}