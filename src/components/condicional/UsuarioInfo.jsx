import If, { Else } from './If'
export default props => {
    const usuario = props.usuario || {}
    return (
        <div>
            <If test={usuario && usuario.nome}>
                <div>Seja bem vindo!  <strong> {usuario.nome} </strong></div>
                <Else >
                    <div>Seja bem vindo!  <strong> Amigao </strong></div>
                </Else>
            </If>

        </div>

    )
}

