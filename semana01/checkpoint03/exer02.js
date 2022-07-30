/*Faça uma função que recebe a idade de um nadador e retorna a categoria dessenadador de acordo com a tabela abaixo:Idade - Categoria5 a 7 anos - Infantil A8 a 10 anos - Infantil B11 - 13 anos - Juvenil A14 - 17 anos - Juvenil BMaiores de 18 anos (inclusive) - Adulto*/
function getAge(age){
   if(age >= 5 && age <= 7){
        return 'INFANTIL A';
   }else if(age >= 8 && age <= 10){
        return 'INFANTIL B';
   }else if(age >= 11 && age <= 13){
        return 'JUVENIL A';
   }else if(age >=14 && age <= 17){
        return 'JUVENIL B';
   }else if(age >= 18){
        return 'ADULTO';
   }
}
//---------------------------------------------------------------------
let age = 19;
console.log(getAge(age));