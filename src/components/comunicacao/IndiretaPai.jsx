import React, {useState} from 'react'
import IndiretaFilho from './IndiretaFilho'
export default props => {
    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)
    function mandaInformaçoes(nome, idade, nerd) {
        setNome(nome);
        setIdade(idade);
        setNerd(nerd);
    }
    return (
        <div>
            <span>{nome} {idade} {nerd ? 'Verdadeiro' : 'Falso'}</span>
            <IndiretaFilho onClick={mandaInformaçoes} />
        </div>
    )
}
