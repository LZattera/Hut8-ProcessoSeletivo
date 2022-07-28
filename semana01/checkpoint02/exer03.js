const op = 4;
let price = 10;

if(op === 1){
    console.log('À vista dinheiro ou Cheque -  desconto 10%');
    console.log('R$ '+(price-(price * 0.10)));
}else if(op === 2){
    console.log('À vista cartão de crédito -  desconto 15%');
    console.log('R$ '+(price-(price * 0.15)));
}else if(op === 3){
    console.log('2 vezes -  Sem juros');
    console.log('R$ '+price);
}else if(op === 4){
    console.log('3 vezes - juros 10%');
    console.log('R$ '+(price+(price * 0.10)));
}