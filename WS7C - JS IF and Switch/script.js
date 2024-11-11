let randomNumber = Math.floor(Math.random() * 20) + 1;
let attempt = 0;

function btnClick(){
    const guessInput = document.getElementById("numberGuess");
    const wizardImage = document.getElementById("wizardImage");
    const guessNotif = document.getElementById("numberGuessNotif");
    const guessButton = document.getElementById("btnGuess");
    const attempts  = document.getElementById("Counter");
    const guess = parseInt(guessInput.value);
    attempt++; 
    if (isNaN(guess) || guess < 1 || guess > 20) {
        guessNotif.textContent = "Invalid input: Please enter a number between 1 and 20";
        guessNotif.style.color = "red";
        wizardImage.style.backgroundColor = "gray";
        attempt--;
    }
    else if (guess < randomNumber) {
        guessNotif.textContent = "Your number is Lower";
        guessNotif.style.color = "Orange";
        wizardImage.style.backgroundColor = "green";   
    }
    else if (guess > randomNumber) {
        guessNotif.textContent = "Your number is Higher";
        guessNotif.style.color = "Orange";
        wizardImage.style.backgroundColor = "red";
    }
    else if (guess === randomNumber) {
        guessNotif.textContent = "You guessed the number!";
        guessNotif.style.color = "Green";
        wizardImage.style.backgroundColor = "yellow";
        
        guessInput.disabled = true;
        guessButton.disabled = true;
    }
    else {
        guessNotif.textContent = "Please check your input";
        wizardImage.style.backgroundColor = "lightgreen";
        attempt--;
    }

    attempts.textContent = "Number of attempts: " + attempt + " Random number: " + randomNumber;
}

//Using Switch statement
// function btnClick(){
//     const guessInput = document.getElementById("numberGuess");
//     const wizardImage = document.getElementById("wizardImage");
//     const guessNotif = document.getElementById("numberGuessNotif");
//     const guessButton = document.getElementById("btnGuess");
//     const attempts  = document.getElementById("Counter");
//     const guess = parseInt(guessInput.value);
//     attempt++; 

//     switch (true) {
//         case isNaN(guess) || guess < 1 || guess > 20:
//             guessNotif.textContent = "Invalid input: Please enter a number between 1 and 20";
//             guessNotif.style.color = "red";
//             wizardImage.style.backgroundColor = "gray";
//             attempt--;
//             break;
//         case guess < randomNumber:
//             guessNotif.textContent = "Your number is Lower";
//             guessNotif.style.color = "Orange";
//             wizardImage.style.backgroundColor = "green";   
//             break;
//         case guess > randomNumber:
//             guessNotif.textContent = "Your number is Higher";
//             guessNotif.style.color = "Orange";
//             wizardImage.style.backgroundColor = "red";
//             break;
//         case guess === randomNumber:
//             guessNotif.textContent = "You guessed the number!";
//             guessNotif.style.color = "Green";
//             wizardImage.style.backgroundColor = "yellow";
//             guessInput.disabled = true;
//             guessButton.disabled = true;
//             break;
//         default:
//             guessNotif.textContent = "Please check your input";
//             wizardImage.style.backgroundColor = "lightgreen";
//             attempt--;
//             break;
//     }

//     attempts.textContent = "Number of attempts: " + attempt + " Random number: " + randomNumber;
// }