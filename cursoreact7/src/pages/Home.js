import { useCounterContext } from "../hooks/useCounterContext"
import { useState } from "react"

const Home = () => {
  // Pegando o valor do contexto
  const { count, setCount } = useCounterContext()
  const [count1, setCount1] = useState()
  return (
    <>
      <h1 className="text-center text-3xl">Olá - {count} </h1>
      <form onSubmit={(e) => {
        e.preventDefault()
        setCount(count1)
      }}>
        <label>Digite seu nome: </label>
        <input type="text" onChange={(e) => {setCount1(e.target.value)}} value={count1} name="count"/>
        <input type="submit" value={"Alterar"} name="count" />
      </form>
    </>
  )
}

export default Home