import './index.css'
import App from './App'
import ReactDOM from 'react-dom'
const el = document.getElementById('root')

const tag = <strong>Olá React!!!</strong>;
ReactDOM.render(
    <App/>
    ,
    el)

if (module.hot) {
    module.hot.accept();
}