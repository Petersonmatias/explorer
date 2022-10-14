//Digitar 10 itens e armazená-los em um array - depois imprimir em tela

alert('Vamos fazer um array para conter 10 elementos.')
let cesta = [];

for(let i = 0; i < 10; i++){
   let carrinho = prompt("Digite o intem numero" + (i + 1) )
   
   cesta[i] = carrinho
}

alert("Os itens são:  " + cesta)