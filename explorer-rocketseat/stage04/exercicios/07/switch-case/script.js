//Interagindo com menu de operações

let option;
let items = [];

while (option !=3){

    option = Number(prompt(`    
    Olá usuário! Digite o número da opção desejada:
    
    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
    `))
    // switch/case e bom para tomar decisões. Caso seje uma faça, caso outra faça.
    switch(option){
        case 1 :
            let item = prompt("Digite um item na lista")
            items.push(item) //push serve para adicionar itens dentro do array sem precisar declarar uma variavel de controle
        break

        case 2 : 
        if(items.length == 0){  // .length serve para saber a quantidade de intens no array
            alert("Não existem itens cadastrados")
        }else {
            alert(items)        
        }
        break

        case 3 :
            alert("Goodbye")
        break

        default :
            alert("Opção inválida. Tente novamente")
    }
}



   