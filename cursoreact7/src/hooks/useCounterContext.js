/* Imports necessários para consumir o contexto */
import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

/* Agora, irei exportá-lo para usar na minha aplicação. */
export const useCounterContext = () => {

    const context = useContext(CounterContext)

    if (!context) {
        console.log("Contexto inválido")
    }
    
    return context
}