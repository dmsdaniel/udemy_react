import React, {useState} from 'react'
import PassoForm from '../contador/PassoForm';
export default props => {
    const [numeros, setNumeros] = useState([]);
    const [qtde, setQtde] = useState(props.qtde);
    const lista = numeros.map( (numero) => {
        return (
            <span> {numero} </span>
        )
    })

    function geraNumeroNaoContido(array) {
        const aleatorio = parseInt(Math.random() * 60 + 1);
        return array.includes(aleatorio) ? geraNumeroNaoContido(array) : aleatorio
    }
    
    function gerarNumeros() {
        const numeros = Array(qtde)
            .fill(0)
            .reduce((nums) => {
                const novoNumero = geraNumeroNaoContido(nums);
                return [...nums, novoNumero];
            }, []).sort((n1, n2) => n1 - n2);
        setNumeros(numeros);
    }

    function gerarNumero() {
        let sorteados = [];
        let achados = 0;
        for (let index = 0; index < qtde; index++) {
            let numero = parseInt(Math.random() * (60)) + 1
            sorteados.find(element => element === numero) ? index-- : sorteados.push(numero);
        }

        setNumeros(sorteados.sort((a, b) => a - b));
    }

    function changePasso(qtde) {
        setQtde(qtde);
        gerarNumeros();
    }

    return (
        <div>
            <div>Numeros Gerados</div>
            <div>{lista}</div>
            <PassoForm min={6} max={17} setPasso={changePasso} passoInicial={qtde}/>
            <button onClick={gerarNumeros}>Gerar Números</button>
        </div>
    )
}