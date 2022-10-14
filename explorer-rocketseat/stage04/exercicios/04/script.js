//Calcular media 
alert("Vamos calcular media de 3 notas do aluno")

let students = prompt("Qual o nome do aluno")
let nota1 = prompt("Qual a sua primeira nota da prova")
let nota2 = prompt("Qual a sua segunda nota da prova")
let nota3 = prompt("Qual a sua terceira nota da prova")

let media = (Number(nota1) + Number(nota2) + Number(nota3)) / 3


//Number antes do valor serve para converter o valor de prompt de string para numero

media = media.toFixed(1)
if (media < 6) {
    alert(`${students} se dedique e estude mais para a prova de recuperção!!! A sua media é: ${media} `)
 } 

 else {
    alert(`Parabéns ${students} você passou de ano.   A sua media é: ${media}`)    
 }