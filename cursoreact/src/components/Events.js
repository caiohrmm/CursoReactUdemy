const Events = () => {
    const handleFazerDownload = () => {
        /*Criada minha arrow function */
        console.log("Fazendo download...")
    }
    return (
        /**Meu JSX vem aqui */
        
        <div id="divpai">
            <div>
                <button onClick= {handleFazerDownload}>Clique para fazer download</button>
                <button onClick= {() => {console.log("Emitindo relatório...")}}>Clique para emitir relatório</button>
            </div>
        </div>
    )
}
export default Events