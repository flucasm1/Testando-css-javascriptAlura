let secretNumber = generateNumber ();
console.log(secretNumber);
let tries = 1

function showTextInScreen (tag, text) {
    let field = document.querySelector(tag);
    field.innerHTML = text;
    
}
function showInitialMessage() {
showTextInScreen('h1', 'Jogo do Número Secreto');
showTextInScreen('p', 'Escolha um número entre 1 e 10');
}
showInitialMessage();

function verifyGuess() {
    let guess = document.querySelector ('input').value;
    
    
   
    if (guess == secretNumber) {
        showTextInScreen('h1', 'Acertou!');
        let triesWord = tries > 1 ? 'tentativas' : 
        'tentativa' ;
        let messageTries = `Você descobriu o número secreto com ${tries} ${triesWord}`;
        showTextInScreen('p', messageTries);
        document.getElementById('reiniciar').removeAttribute('disabled');
   
    }  else {
        if (guess> secretNumber) {
            showTextInScreen('h1', 'Tente novamente'); 
            showTextInScreen('p', 'O número é menor');
        }  else {
            showTextInScreen('h1', 'Tente novamente');
            showTextInScreen('p', 'O número é maior');
            tries ++
            cleanField();
        }
    }
}

function generateNumber() {
    return parseInt(Math.random() *10 + 1) ;
    
}
function cleanField() {
    guess = document.querySelector('input')
    guess.value = '';
}
function restartGame() {
    secretNumber = generateNumber();
    cleanField();
    console.log (secretNumber); 
    tries= 1;
    showInitialMessage();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}