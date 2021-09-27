import './TabelaProdutos.css'
import produtos from '../../data/produtos'
export default () => {
    function getLista() {
        return produtos.map((produto, i) => {
            return (
                <tr className={i % 2 === 0 ? 'Par' : 'Impar'}>
                    <td>{produto.codigo}</td>
                    <td>{produto.produto}</td>
                    <td>{produto.preco}</td>
                </tr>
            )
        })
    }
    return (
        <div className="TabelaProdutos">

            <table >
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Produto</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>{getLista()}</tbody>
            </table>
        </div>
    )
}
