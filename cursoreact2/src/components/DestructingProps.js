const DestructingProps = ({nome, preco, ingredientes}) => {
  return (
    <div>
        <div>
            <h1>
                Desestruturando Props
            </h1>
                <ul>
                    <li>Nome: {nome}</li>
                    <li>Preco: {preco}</li>
                    <li>Ingredientes: {ingredientes}</li>
                </ul>
        </div>
    </div>
  )
}

export default DestructingProps