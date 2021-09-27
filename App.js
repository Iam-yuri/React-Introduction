import logo from './logo.svg';
import './App.css';

function App() {

    var nome = 'Yuri';
    let novonome=nome.toUpperCase();
    let idade = 17
    let numero1 = 17
    let numero2 = 25
    let soma= numero1+numero2

    function sum(a,b){
        return a+b;
    }
    function sub(a,b){
        return a-b;
    }
    function mult(a,b){
        return a*b;
    }
    function div(a,b){
        return a/b
    }
    return ( 
        <div className = "App" >

        <h3>Exibição de uma saudação</h3> 
        <p>Olá, {novonome}</p>
        <br/>
        <h2>A sua idade é : {idade}</h2>
        <h2>Principais Operações</h2>
        <p>A soma de dois valores são : {7 + 8}</p>
        <p>A subtração de dois valores são : {9 - 3}</p>
        <p>A multiplicação de dois valores são : {5 * 5}</p>
        <p>A divisão de dois valores são : {8 / 4}</p>
        <h2>Funções</h2>
        <p>O resultado da função é igual a : {soma}</p>
        <p>A soma dos valores pela função é :{sum(1,2)}</p>
        <p>A subtração dos valores pela função é :{sub(5,2)}</p>
        <p>A multiplicação dos valores pela função é :{mult(7,2)}</p>
        <p>A divisão dos valores pela função é :{div(10,2)}</p>
        </div>
    );
}

export default App;