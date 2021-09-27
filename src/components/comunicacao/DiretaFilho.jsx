export default props => {
    return (
        <span>{props.nome} {props.idade} {props.nerd ? 'Verdadeiro' : 'Falso'} </span>
    )
}