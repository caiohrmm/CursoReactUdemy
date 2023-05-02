// 1 - Criar context
import { createContext, useState } from 'react'  

export const CounterContext = createContext()

export const CounterContextProvider = ({children}) => {
    const [count, setCount] = useState()

    return (
        <CounterContext.Provider value={{count, setCount}}>{children}</CounterContext.Provider>
    )
}