const Props = (props) => {
  return (
    <div>
        <div>
            <h1>Props</h1>
            <h2>Com váriavel</h2>
            <h3>Seu nome é {props.name}</h3>
        </div>
        <div>
            <h2>Com states</h2>
            <h3>Seu nome é {props.nomepessoa} e voce tem {props.idade} anos de idade.</h3>
        </div>
        
    </div>
  )
}

export default Props