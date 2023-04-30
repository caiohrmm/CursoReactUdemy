import './App.css';

// Hooks
import { useState, useEffect } from 'react'

// Importando custom hook
import { useFetch } from './hooks/useFetch';

function App() {
  /* Consumindo dados da API através do useState, useEffect e FetchAPI */
  const [products, setProducts] = useState([])
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [id, setID] = useState("")
  const url = 'http://localhost:3000/products'

  // /* Fazendo a requisição */
  //    useEffect(() => {
  //   async function fetchData() {
  //     /* GET */
  //     const res = await fetch(url)

  //     /* Transformando JSON em objeto JS */
  //     const dados = await res.json()
  //     setProducts(dados)
  //   }
  //   fetchData()
  // }, [])

  /* Fazendo requisição com o custom hook */
  const { Dados, httpConfig, loading, error, httpConfigDelete } = useFetch(url)


  /* Mandando dados para minha API */
  const handleSubmit = async (e) => {
    e.preventDefault()

    /* Definir o objeto que será enviado */
    const product = {
      name,
      price,
    }
    setName("")
    setPrice("")
    console.log(product)

    httpConfig(product, "POST")
    /* Preciso mandar meu objeto, mas, invés de fazer o GET irei fazer o POST, pois irei adicionar dados invés de somente pegar */

    
    /* POST */
    /* No caso do POST, eu preciso definir algumas alterações para ele ser tratado como post nos parametros. */
    // const res = await fetch(url, {
    //   method:"POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(product)
    // })


    /* method -> Método POST ou GET */
    /* headers -> Define o tipo de dado que será trafegado. (JSON) */
    /* body -> O body serve para enviar meu objeto js em formato JSON com o stringify */

    /* Alterar os dados dinâmicamente no JSX utilizando requests */

    /* Salvo o ultimo produto adicionado como um objeto. */
    //   const adicionarProduto = await res.json()

    //   setProducts((prevProducts) => [...prevProducts, adicionarProduto])
    //
  }
  const handleSubmitDelete = async(e) => {
    e.preventDefault()
    console.log(url+"/"+id)
    setID("")
    httpConfigDelete(url+"/"+id, "DELETE")
  }
  
  return (
    <div>
      <div>
        {/* Mostrar meus dados da API na tela. */}
        {loading && <h1>Aguarde.<br /> Carregando dados</h1>}
        {!loading && !error ? (<ul>{Dados && Dados.map((produto) => (
          <li key={produto.id}>ID: {produto.id} - Nome do produto: {produto.name} - Preço: {produto.price} </li>
        ))}</ul>) : (error)}

      </div>
      <div>
        <form onSubmit={handleSubmit} className='form'>
          <label>
            Nome do produto:
            <input type="text" name='nome' value={name} required onChange={(e) => setName(e.target.value)} />
          </label>
          <label>Preço do produto:
            <input type="number" name='preco' value={price} required onChange={(e) => setPrice(e.target.value)} />
          </label>
          {loading && <input type="submit" value="AGUARDE" id='enviar' disabled/> }
          {!loading && <input type="submit" value="ENVIAR" id='enviar'/> }
        </form>
        <div>
          <form className='form' onSubmit={handleSubmitDelete} >
            <label>
              Digite o ID do produto que você deseja deletar: 
              <input type="number" value={id} onChange={(e) => setID(e.target.value)}/>
            </label>
            <input type="submit" value="DELETAR" />

          </form>
        </div>
      </div>

    </div>
  );
}

export default App;
