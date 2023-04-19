const Challenge = () => {
    let n1 = 9
    let n2 = 10
    const handleSomar = () => {
        console.log(n1+n2)
    }
    return (
        <div>
            <div>
                <h1>
                    Vamos criar dois valores numéricos!
                </h1>
            </div>
            <div>
                <h3>
                    Valor 1 - {n1} <br/>
                    Valor 2 - {n2}
                </h3>
            </div>
            <div>
                <button onClick={handleSomar}>Somar valores</button>
                <button onClick={() => {console.log (n1+n2)}}>Somar valores</button>
            </div>
            
        </div>
    )
}
export default Challenge