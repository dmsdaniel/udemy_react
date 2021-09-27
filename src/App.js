import './App.css'
import Mega from './components/mega/Mega';
import Contador from './components/contador/Contador';
import Input from './components/formulario/Input';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import DiretaPai from './components/comunicacao/DiretaPai';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import ParOuImpar from './components/condicional/ParOuImpar';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import AlunosLista from './components/repeticao/AlunosLista';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import Card from './components/layouts/Card';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import NumeroAleatorio from './components/basicos/Aleatorio';

export default _ =>
    <div className="App">
        <h1>Fundamento React Arrow</h1>
        <div className="Cards">
            <Card titulo="#13 - Desafio Mega" color="#008080">
                <Mega qtde={10}  />
            </Card>
            <Card titulo="#12 - Contador" color="#008080">
                <Contador numeroInicial={20} />
            </Card>
            <Card titulo="#11 - Componentes Controlados (Input)" color="#008080">
                <Input />
            </Card>
            <Card titulo="#10 - Comunicacao Indireta" color="#008080">
                <IndiretaPai />
            </Card>
            <Card titulo="#09 - Comunicacao Direta" color="#008080">
                <DiretaPai />
            </Card>
            <Card titulo="#08 - Renderizacao Condicional" color="#008080">
                <ParOuImpar numero={2} />
                <UsuarioInfo usuario={{ "nome": "Daniel", "email": "email@email.com" }} />
                <UsuarioInfo usuario={{ "email": "email@email.com" }} />
                <UsuarioInfo usuario={{ "nome": "Pedro" }} />
            </Card>
            <Card titulo="#07 - Repeticoes 2" color="#F4E274">
                <TabelaProdutos />
            </Card>
            <Card titulo="#06 - Repeticoes" color="#f4b786">
                <AlunosLista />
            </Card>
            <Card titulo="#05 - Componentes Filho" color="#659db4">
                <Familia sobrenome="Silva">
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Davi" />
                    <FamiliaMembro nome="Daniel" />
                </Familia>
            </Card>
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

