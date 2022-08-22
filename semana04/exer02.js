/*Troque todas as vírgulas na string abaixo por ponto final:a.“Olá, mundo, meu, nome, é, Juca*/

let str = "Olá, mundo, meu, nome, é, Juca";
let newStr = str.replace(/,/g, ".");
console.log(newStr);