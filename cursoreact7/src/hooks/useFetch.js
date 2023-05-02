/* Importo os hooks necessários para meu custom hook */
import { useState, useEffect } from "react"

/* Preciso exportá-la */
/* Preciso de uma URL pois é aonde encontrarei meus dados. */
export const useFetch = (url) => {
    /* Preciso de um state para armazenar os dados que vem da API, porém eu não sei qual o tipo de dado. 
    Por isso, utilizarei o parametro null */
    const [Dados, setDados] = useState(null)
    /* Primeiramente eu preciso de um lugar para armazenar meus dados de configuração -> method and headers */
    const [Config, setConfig] = useState(null)
    const [Method, setMethod] = useState(null)
    const [CallFetch, setCallFetch] = useState(false)
    const [urlDelete, setUrlDelete] = useState(null)
    /* Esse CallFetch trabalhará como dependencia do meu useEffect de GET pois, quando ele mudar, eu quero receber dados. */

    /* Criarei meu loading */
    const [loading, setLoading] = useState(false)

    /* Criarei meu state de erro */
    const [error, setError] = useState(null)

    /* Agora, utilizarei o useEffect para fazer minha req assincrona. */

    useEffect(() => {
        async function fetchData() {
            setLoading(true)
            try {
                /* GET */
                const res = await fetch(url)
                /* Transformando JSON em objeto JS */
                const dados = await res.json()
                setDados(dados)
            } catch (erro) {
                setError("Erro!. Não foi possível carregar os dados.")
            }

            setLoading(false)
        }
        fetchData()
    }, [url, CallFetch])
    /* Preciso da minha url como dependencia, pois, se ela mudar, a requisicao precisa ser feita novamente. */

    // Refatorando o POST

    /* Como preciso da minha Config adicionada para o POST funcionar e é ruim fazer ela na pagina principal */
    // Criarei a função aqui.

    const httpConfig = (data, method) => {
        if (method === "POST") {
            setConfig({
                method,
                headers: { "Content-Type": "Application/json" },
                body: JSON.stringify(data),
            })
            setMethod(method)
        }
    }
    const httpConfigDelete = (urldelete, method) => {
        if (method === "DELETE") {
            setConfig({
                method,
                headers: { "Content-Type": "Application/json" },
            })
            setMethod(method)
            setUrlDelete(urldelete)
        }
    }

    useEffect(() => {
        const httpRequest = async () => {
            let json
            if (Method === "POST") {

                let fetchOptions = [url, Config]
                const res = await fetch(...fetchOptions)
                json = await res.json()


            } else if (Method === "DELETE") {

                const res = await fetch(urlDelete, Config)
                json = await res.json()
            }
            setCallFetch(json)
        }

        httpRequest()
    }, [Config, Method, url, urlDelete])


    // Agora, preciso somente retornar os dados que irei utilizar na minha aplicação.
    return { Dados, httpConfig, loading, error, httpConfigDelete }


}