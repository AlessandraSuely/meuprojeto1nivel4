/*
Capturar os 2 números 
e fazer as operações matemáticas 
de soma, subtração, multiplicação, 
divisão e resto de dividão.  

E para cada operação, mostrar um alerta 
com o resultado.
*/

let firstNumber = (prompt('Digite o primeiro número'));
let secondNumber = (prompt('Digite o segundo número'));

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

alert('Soma: ' + sum)
alert('Subratração: ' + sub)
alert('Multiplicação: ' + multi)
alert('Divisão: ' + div)
alert('Resto da divisão: ' + restDiv)

if (firstNumber == secondNumber) {
    alert("Os dois números são iguais");
} else {
    alert("Os dois números são diferentes");
}

if (sum % 2 == 0) {
    alert('A soma dos números é Par');
} else {
    alert('A soma dos números é impar');
} 


