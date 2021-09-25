import './App.css'
import ReactDOM from 'react-dom'
import Card from './components/layouts/Card';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import NumeroAleatorio from './components/basicos/Aleatorio';
export default _ =>
    <div className="App">
        <h1>Fundamento React Arrow</h1>
        <div className="Cards">

            <Card titulo="#04 - Desafio Aleatório" color="#C0C0C0">
                <NumeroAleatorio min={1} max={60} />
            </Card>
            <Card titulo="#03 - Fragmento" color="#FF0000">
                <Fragmento />
            </Card>
            <Card titulo="#02 - Com Parametro" color="#FFFF00" >
                <ComParametro
                    titulo="Situação do Aluno"
                    nome="Daniel"
                    nota={9.3} />

            </Card>
            <Card titulo="#01 - Primeiro Componente" color="#008080">
                <Primeiro />
            </Card>
        </div>
    </div>

