let numberList = [];
let maxNumberlist = 10;
let secretNumber = generateNumber ();
console.log(secretNumber);
let tries = 1


function showTextInScreen (tag, text) {
    let field = document.querySelector(tag);
    field.innerHTML = text;
    responsiveVoice.speak(text, 'Brazilian Portuguese Female', {rate:1.2});
    
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
    let chosenNumber = parseInt(Math.random() *maxNumberlist + 1) ;
    let elementsnumber = numberList.length
    if (elementsnumber == maxNumberlist) {
        numberList = [];
    }

    if(numberList.includes(chosenNumber)) {
        return generateNumber();
    }  else { 
        numberList.push(chosenNumber);
        console.log(numberList);
        return chosenNumber;
        }
    }
    

function cleanField() {
    guess = document.querySelector('input');
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