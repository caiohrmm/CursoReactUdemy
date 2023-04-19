import Challenge from "./Challenge"
import Events from "./Events"
const Apresentacao = (/*argumentos*/) => {
    return(
        <div>
            <h1>
                Olá, meu nome é Caio Henrique
            </h1>
            <h3>
                Esse é meu primeiro componente em React !
                <Events/>
            </h3>
            <br/><br/><br/><br/>
            <Challenge/>

        </div>
    )
}

export default Apresentacao
