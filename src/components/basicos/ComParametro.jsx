export default function ComParametro(props) {
    const status = props.nota > 7 ? 'Aprovado' : 'Em recuperação'
    return (
        <div>
            <h2>{props.titulo}</h2>
            <p>
                <h2>{props.nome} tem nota {props.nota}</h2>
                e esta <strong> {status} </strong>
                
            </p>
        </div>
    )
}