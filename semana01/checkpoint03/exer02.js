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