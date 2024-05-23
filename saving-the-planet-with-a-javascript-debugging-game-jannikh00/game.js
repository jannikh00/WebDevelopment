/*  JavaScript file that contains a game that tests the players awareness of climate change. The game is explained in the
    'Importing, Welcoming, Initializing' Section of the code. */

/*  
    Improvements:
    - split the basic function and created three more functions out of it to make code more readable and more modular
    - introduced a question counter (that gets displayed before every question) for a better 'user experience', makes it easier for the player to see where he's at in the game
    - inserted some spaces for better readability when running the code
*/

/******************************************* Importing, Welcoming, Initializing *******************************************/

// Importing modul to receive user input
const prompt = require("prompt-sync")();

// Expanded the Welcome message describing the game a little
console.log('\nWelcome to the Climate Change Awareness Game! You\'ll be asked 5 questions about how you can contribute to fighting');
console.log('climate change. For each right answer you\'ll earn one point. Your score will determine your awareness of this topic!\n');

// Initializing score
let score = 0;

// Initializing question count that keeps track of where the player is at in the game
let questionCounter = 1;

/******************************************* Functions *******************************************/

// Basis function that contains game logic using the function modules
function decisionScenario(question, options, correctAnswerIndex) {
    providingQuestion(question);
    answerOptions(options);
    // Asking user for input
    let playerAnswer = parseInt(prompt("Enter your choice (number): ")) - 1;
    answerCheck(playerAnswer, correctAnswerIndex, options);
}

// Asking the question the player should answer
function providingQuestion(question) {
    console.log(`\nQuestion ${questionCounter}: ${question}`);
    questionCounter++;
}

// Providing answer options
function answerOptions(options) {
    /*  Bug: j variable inside the loop resets itself with every iteration, so it doesn't have an impact 
        Fix: removed the j variable inside the loop, used the i index instead to count */
    /*  Bug: the '-1' in the for loop leads to the loop exiting one iteration before it should which results in the last answer option not being displayed
        Fix: removed the '-1' in the for loop to make it 'i < options.length' */
    for (let i = 0; i < options.length; i++) {
        console.log(`${i + 1}. ${options[i]}`);
    }
}

// Checking if answer is correct with accordingly answer and score increase (or not)
function answerCheck(playerAnswer, correctAnswerIndex, options) {
    /*  Bug: in if statement the '!==' leads to wrong answers being counted as right and vice versa
        Fix: replaced '!==' with '==' */
    /*  Bug: the 'score--' command leads to the score getting counted backwards
        Fix: replaced 'score--' with 'score++' so the score will be count in the right direction */
    if (playerAnswer == correctAnswerIndex) {
        console.log('Correct! You made an environment-friendly decision. +1 point.');
        score++;
    } else {
        console.log(`Incorrect! The better choice would be: ${options[correctAnswerIndex]}`);
    }
}

/******************************************* Scenarios *******************************************/
decisionScenario(
    'You are going to the supermarket. How do you choose to carry your groceries?',
    ['Plastic bags provided by the store', 'Bring your own reusable bags', 'Carry them without any bag'],
    1
);

// removed 'next line' command in beginning of question, because it's now included in function
decisionScenario(
    'You are buying a new car. Which type do you choose?',
    ['A gasoline-powered car', 'A hybrid car', 'An electric car'],
    2
);

// removed 'next line' command in beginning of question, because it's now included in function
decisionScenario(
    'You want to dispose of old electronics. What do you do?',
    ['Throw them in the regular trash', 'Sell or donate them', 'Take them to an e-waste recycling center'],
    2
);

/*  Bug: list contained second index that is not needed
    Fix: removed second index */
// removed 'next line' command in beginning of question, because it's now included in function
decisionScenario(
    'You want to dispose of old electronics. What do you do?',
    ['Throw them in the regular trash', 'Sell or donate them', 'Take them to an e-waste recycling center', 'Refurbish and continue using them'],
    2,
);

/*  Bug: list contained second index that is not needed
    Fix: removed second index */
// removed 'next line' command in beginning of question, because it's now included in function
decisionScenario(
    'How do you prefer to eat your meals?',
    ['Takeout from restaurants in disposable containers', 'Cooked at home with locally sourced ingredients', 'Processed and packaged meals', 'Home cooked meals with ingredients from your own garden'],
    1,
);

/******************************************* Game Over Message *******************************************/
console.log(`\nGame Over! Your total score is: ${score}. Thank you for playing.\n`);
