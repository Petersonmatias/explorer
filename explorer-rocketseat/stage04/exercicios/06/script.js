//JOGO DE ADVINHA 
let result = prompt ("Adivinhe o número que estou pensando? Está entre 0 e 10")
const randomNumber = Math.round(Math.random()* 10)


//match.random = usado para gerar numeros aleatorios de 0 á 1, numeros com vigula tipo 0.213677
//match.round = aredonda os numeros quanto pra baixo quanto pra cima

let xAttempts = 1

while(Number(result) != randomNumber){
    result = prompt("Você errou, tente novamente:")

    xAttempts ++ //esta fazendo a aplicação incrementar caso usuario erre a opção
}
if(xAttempts == 1){
    alert(`Parabens! O número que pensei foi ${randomNumber}. Você acertou em ${xAttempts} tentativa`)
}else {
    alert(`Parabens! O número que pensei foi ${randomNumber}. Você acertou em ${xAttempts} tentativas`)
}