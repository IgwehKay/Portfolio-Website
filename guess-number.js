
// Assignment
// Create a random number generator. 
// The user has to guess the random number by entering the number.
//If the user doesn't enter a number, display: Please enter a number before submittig.
//You can log the random number
//the user has 5 tries


// If the user enters a lesser number compared to the random number, alert:
// Oops! Try a greater Number, you have 4 entries left

// If the user enters a greater number, alert:
// Oops! Try a lesser number, and reduce the entries left by 1.

// If the user guesses the number correctly, alert: 
// Congratulations! You have won the game;

// Each time the user tries and alert is displayed, clear the input.


// Note
// The output of an empty string when converted to a number is 0 
// let number = "";
// let convertedNumber = Number(number);
// console.log(convertedNumber)

// function getUserEntry (){
//     let userEntry = (document.getElementById('userEntry').value);
//     // userInputDisplay = document.getElementById('userInputDisplay');
//     userInputDisplay.innerHTML = userEntry;

// }



let trials = 5;
let randonNumber = Math.floor(Math.random()* 10 ) + 1;



function canGuess(){
    console.log(randonNumber);
    let userEntry = (document.getElementById('userEntry').value);
    let submitBtn = document.getElementById('submitBtn');
    
    // console.log(userEntry);
    // randomNumberDisplay.innerHTML = randonNumber;

    if (userEntry === "") {
        alert("Please enter a number before submitting");
        return;
    }

    trials--;    //the user is only penalized if he enters a value into the input

    if (randonNumber == Number(userEntry)){
        alert("Congratulations! You have won the game.");
        // userEntry.disabled = true;
        // submitBtn.disabled = true;
        resetGame();
        return;
    }

    else if (randonNumber > Number(userEntry) && trials > 0){
        alert(`Oops! Try a greater number. You have ${trials} entries left`);
        document.getElementById('userEntry').value = "";
        // document.getElementById('userInputDisplay').innerHTML = "";
        // document.getElementById('randomNumberDisplay').innerHTML= "";

    }

    else if (randonNumber < Number(userEntry) && trials > 0){
        alert(`Oops! Try a lesser number. You have ${trials} entries left`); 
        document.getElementById('userEntry').value = "";
        // document.getElementById('userInputDisplay').innerHTML= "";
        // document.getElementById('randomNumberDisplay').innerHTML= "";
    }

    else {
        alert("Game over! No attempts left.");
        resetGame();
    }
    
}

function resetGame(){
    trials = 5;
    randonNumber = Math.floor(Math.random() * 10) + 1;
    document.getElementById('userEntry').value = "";
    // document.getElementById('userInputDisplay').innerHTML = "";
    // document.getElementById('randomNumberDisplay').innerHTML= "";
}
