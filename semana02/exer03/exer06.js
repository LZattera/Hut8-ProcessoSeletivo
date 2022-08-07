const user01 = Math.floor(Math.random()*3);
const user02 = Math.floor(Math.random()*3);

function rockPaperScissorWinner(user01, user02){
    if(user01>user02){
        console.log("Usuario 01 ganhou");
    }else if(user01<user02){
        console.log("Usuario 02 ganhou");
    }else{
        console.log("Empate");
    }
    console.log(''.padEnd(70, "***"));
}
function showOnScreen(user01, user02){
    //Apresentaçãod o jogo
    console.log("****JOKENPO****");
    console.log('0 - Tesoura');
    console.log('1 - Papel');
    console.log('2 - Pedra');

    console.log(''.padEnd(70, "***"));
    //Jogadas dos usuarios
    console.log(`Usuario 01 escolheu // ${user01} // enquanto Usuario 02 escolheu // ${user02} //`);
}

showOnScreen(user01, user02);
rockPaperScissorWinner(user01, user02);
