let secretNumber = generateNumber ();
console.log(secretNumber);
let tries = 1

function showTextInScreen (tag, text) {
    let field = document.querySelector(tag);
    field.innerHTML = text;
    
}
showTextInScreen('h1', 'Jogo do Número Secreto');
showTextInScreen('p', 'Escolha um número entre 1 e 10');

function verifyGuess() {
    let guess = document.querySelector ('input').value;
    
   
    if (guess == secretNumber) {
        showTextInScreen('h1', 'Acertou!');
        let triesWord = tries > 1 ? 'tentativas' : 
        'tentativa' ;
        let messageTries = `Você descobriu o número secreto com ${tries} ${triesWord}`;
        showTextInScreen('p', messageTries);
   
    }  else {
        if (guess> secretNumber) {
            showTextInScreen('h1', 'Tente novamente'); 
            showTextInScreen('p', 'O número é menor');
        }  else {
            showTextInScreen('h1', 'Tente novamente');
            showTextInScreen('p', 'O número é maior');
            tries ++
        }
    }
}

function generateNumber() {
    return parseInt(Math.random() *10 + 1) ;
    
}