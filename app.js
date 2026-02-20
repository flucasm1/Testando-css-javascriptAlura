let secretNumber = generateNumber ();

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
        showTextInScreen('p', 'Você descobriu o número secreto');
   
    }  else {
        if (guess> secretNumber) {
            showTextInScreen('h1', 'Tente novamente'); 
            showTextInScreen('p', 'O número é menor');
        }  else {
            showTextInScreen('h1', 'Tente novamente');
            showTextInScreen('p', 'O número é maior');
        }
    }
}

function generateNumber() {
    return parseInt(Math.random() *10 + 1) ;
    
}