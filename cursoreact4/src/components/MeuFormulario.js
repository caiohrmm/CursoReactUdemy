import React, { useState } from 'react'
import './MeuFormulario.css'

const MeuFormulario = ({usuario}) => {
  /* Criando meus sets de estado para os meus atributos */
  const [Nome, setNome] = useState(usuario ? usuario.name : "")
  const [Idade, setIdade] = useState(usuario ? usuario.idade : "")
  const [Senha, setSenha] = useState(usuario ? usuario.senha : "")
  const [Sobre, setSobre] = useState("")
  const [Sexo, setSexo] = useState("")

  /* Recebe o e como parametro pois nele está contido todas as informaçoes do evento, assim como seu valor. */
  const handleNome = (e) => {
    setNome(e.target.value)
  }
  const handleIdade = (e) => {
    setIdade(e.target.value)
  }
  /* const handleSenha = (e) => {
    setSenha(e.target.value)
  } */

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(`${Nome} ${Idade} ${Senha} ${Sobre} ${Sexo}`)
    setNome("")
    setIdade("")
    setSenha("")
    setSobre("")
    setSexo("")
  }
    return (
      <div>
        {/* Criando meu primeiro formulário */}
        <h1>Meu formulário</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nome:</label>
            <input type="text" name='name' placeholder='Digite seu nome...' onChange={handleNome} value={Nome}/>
          </div>
          <div>
            <label htmlFor="age">Idade:</label>
            <input type="text" name='age' placeholder='Digite sua idade...' onChange={handleIdade} value={Idade}/>
          </div>
          <div>
            <label>
              <span>Sexo: </span>
              <select name="sexo" onChange={(e) => setSexo(e.target.value)} value={Sexo}>
                <option value="">Selecione o Sexo</option>
                <option value="M">Masculino</option>
                <option value="F">Feminino</option>
                <option value="X">Prefere não dizer</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              <span>Senha: </span>
              <input type="password" placeholder='Digite sua senha...' name='senha' onChange={(e) => setSenha(e.target.value)} value={Senha}/>
            </label>
          </div>
          <div>
            <label>
              <span>Sobre você: </span>
              <textarea name="sobre" placeholder='Digite sobre você' value={Sobre} onChange={(e) => setSobre(e.target.value)}></textarea>
            </label>
          </div>
          <input type="submit" value={"Enviar"}/>
        </form>
      </div>
    )
}


export default MeuFormulario