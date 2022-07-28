//n1 e  n2 primeira e segunda nota
let name, surname, dBirth, mBirth, yBirth, n1, n2;
name = 'Leticia';
surname = 'Zattera';
dBirth = 06;
mBirth = 03;
yBirth = 1998;
n1 = 10; 
n2 = 10;
//pegar ano atual para calculo de data
const date = new Date();
const currentYear = date.getFullYear();

console.log('Nome Completo: '+name+' '+surname+'\nIdade: '+(currentYear%yBirth));
console.log('Data de Nascimento: '+dBirth+'/'+mBirth+'/'+yBirth+'\nMédia: '+(n1+n2)/2);
