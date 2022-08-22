/*Através da string “Maria, Paulo, Moisés, Joel, Ana”, imprima todos os nomes um em cada linha no console*/

let str = 'Maria, Paulo, Moisés, Joel, Ana';

const newString = (str)=>{
    return str.split(",");
}

function ConsolePrint(){
    let newStr = newString(str);
    for(const key in newStr){
        console.log(newStr[key]);
    }
}

ConsolePrint();