//let title = document.querySelector('h1');
//title.innerHTML = 'Jogo Do Número Secreto';

//let instruction = document.querySelector ('p');
//instruction.innerHTML = 'Escolha um número entre 1 e 10';


let secretNumber = generateNumber ();

function showTextInScreen (tag, text) {
    let field = document.querySelector(tag);
    field.innerHTML = text;
}
showTextInScreen('h1', 'Jogo do Número Secreto');
showTextInScreen('p', 'Escolha um número entre 1 e 10');

function verifyGuess() {
    let guess = document.querySelector ('input').value;
    console.log (guess == secretNumber);

}

function generateNumber() {
    return parseInt(Math.random() *10 + 1) ;
    
}