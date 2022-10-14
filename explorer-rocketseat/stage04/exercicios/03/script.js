//operadores js
alert("Vamos fazer operações matemáticas: +, -, x, /,(% resto)")
let numberOne = prompt("Digite o primeiro numero")
let numberTwo = prompt("Digite o segundo numero")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)


//Number antes do valor serve para converter o valor de prompt de string para numero

const sun = numberOne + numberTwo
const sub = numberOne - numberTwo
const div = numberOne / numberTwo
const mult = numberOne * numberTwo
const rest = numberOne % numberTwo

alert("A some é :" + sun)
alert("A subtraçao é :" + sub)
alert("A divisão é :" + div)
alert("A multiplicação é :" + mult)
alert("O resto :" + rest)