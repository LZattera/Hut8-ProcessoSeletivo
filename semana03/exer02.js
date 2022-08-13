/*Crie uma função que recebe uma string (com quatro possibilidades: “soma”,“subtrai”, “divide”, “multiplica”) e dois números. A função deve retornar a operação realizada informada pela string nos dois números. */
MyFunction('dividi')(2)(2)

function MyFunction(option){
    if(option=='soma'){
        return (numberOne)=>{ return function (numberTwo){console.log(numberOne + numberTwo);}}
    }else if(option == 'subtrai'){
        return function subtrai(numberOne){return function(numberTwo){console.log(numberOne - numberTwo);}}
    }else if(option == 'multiplica'){
        return function subtrai(numberOne){return function(numberTwo){console.log(numberOne * numberTwo);}}
    }else if(option == 'dividi'){
        return function subtrai(numberOne){return function(numberTwo){console.log(numberOne / numberTwo);}}
    }
}
