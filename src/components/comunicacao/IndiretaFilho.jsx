
export default props => {
    const gerarIdade = () => parseInt(Math.random() * (20)) + 50 
    const isNerd = () => Math.random() > 0.5
    return (
        <div>
            <div>Filho</div>
            <button onClick={_ => props.onClick('Daniel', gerarIdade(), isNerd())}>Fornecer Informação</button>
        </div>
    )
}