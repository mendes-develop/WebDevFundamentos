// VARIAVEIS E CONSTANTES

// Variáveis são espaços na memória do computador onde você pode armazenar dados. 
// Você começa declarando uma variável com a palavra-chave let ou const, seguida por qualquer nome que você queira chamá-la:
let name = "Javascript"

let num1 = 1
let num2 = 2
let num3 = num1 + num2

const pi = 3.1416


// TIPOS DE DADOS

// STRINGS
// Uma sequência de texto é conhecida como uma string. Para mostrar que o valor é uma string, você deve envolvê-la em aspas.
let firstName = 'Bob';
let lastName = "Souza"


// NUMBERS
// Um número. Números não tem aspas ao redor deles.
let meuNumero = 10;
let idade = 25;


// BOLEANS
// Um valor verdadeiro ou falso. As palavras true e false são palavras-chaves especiais em JS e não precisam de aspas.
let jaFoiVacinado = true
let isUserLogged = false


// Arrays
// Uma estrutura que permite armazenar vários valores em uma única variável.
let minhaArray = [1, 'Bob', 'Steve', 10]
let listaCompras = ["Mamäo", "Abacate", "Pêra"]


// OBJECT
// Basicamente, qualquer coisa. Tudo em JavaScript é um objeto e pode ser armazenado em uma variável. 
// Tenha isso em mente enquanto aprende.
let pessoa1 = {
    name: "Flavio",
    idade: 34,
    vacinado: false,
    linguas: ["Portugues", "ingles", "Espanhol"]
}

let pessoa2 = {
    name: "Bruno",
    idade: 26,
    vacinado: true,
    linguas: ["Portugues", "ingles", "Espanhol", "Russo"]
}


// Operadores (Mais importantes para nossa aplicacao hoje)
// ATRIBUICAO   =
// ADIÇĀO       +
// IGUALDADE    ===
// NEGACAO      !
// NAO IGUAL    !==

const name = "Julio"

(3 + 5)
(3 === 3)

let verdadeiro = true
let falso = !verdadeiro

(3 !== 2)



// CONDICIONAIS
// Condicionais são estruturas de código que te permitem testar se uma expressão retorna verdadeiro ou não,
// executando um código alternativo revelado por seu resultado. 
// Uma forma muito comum de condicional é a instrução if ... else. Por exemplo:
let sorvete = 'chocolate';
if (sorvete === 'chocolate') {
  console.log('Opa, Eu amo sorvete de chocolate!');
} else {
  console.log('Ahh, mas chocolate é o meu favorito...');
}



// Funções
// Funções são uma maneira de encapsular funcionalidades que você deseja reutilizar. 
// Quando você precisa de um procedimento, você pode chamar a função com um nome, em vez de reescrever o código inteiro a cada vez. 
// Você já viu alguns usos de uma funcao acima, por exemplo:

console.log("Ola")

function multiple(numA, numB){


}

function multipleAndReturn(numA, numB){
    

}





// Interaçao com Arrays

