/*Crie uma função que recebe um objeto usuário e imprime se ele é maior de idade,utilize os conhecimentos da aula para melhorar o código. DESESTRUTURAÇÃO*/
const user = {name:'Leticia',idade: 20};

MaiorDeIdade(user);

function MaiorDeIdade(user){
    const {idade:age} = user;
    age>=18? console.log('Maior de Idade') : console.log('Menor de Idade');
}

