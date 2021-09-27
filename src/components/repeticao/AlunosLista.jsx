import alunos from "../../data/alunos";
export default () => {
    const lista = alunos.map( (aluno) => {
        return (
            <li key={aluno.id} style={{listStyle: "none"}}> {aluno.id} - {aluno.nome} - {aluno.nota} </li>
        )
    })
    return (
        <lu>
            {lista}
        </lu>
    )
}