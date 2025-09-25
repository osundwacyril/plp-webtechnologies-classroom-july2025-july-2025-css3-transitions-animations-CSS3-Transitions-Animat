/* ========================================================================= */
/* Part 2: JavaScript Functions - Scope, Parameters & Return Values          */
/* ========================================================================= */

// --- Function 1: Parameter and Return Value ---
// This function takes a number as a parameter, calculates its square, and returns the result.
function squareNumber(num) {
    // The 'result' variable has local scope, only accessible inside this function.
    const result = num * num; 
    return result;
}

const numberInput = document.getElementById('numberInput');
const calculateBtn = document.getElementById('calculateBtn');
const calculationResult = document.getElementById('calculationResult');

calculateBtn.addEventListener('click', function() {
    const number = parseFloat(numberInput.value);
    if (!isNaN(number)) {
        // Call the function with the user's input
        const squaredValue = squareNumber(number); 
        calculationResult.textContent = `Result: ${squaredValue}`;
    } else {
        calculationResult.textContent = 'Please enter a valid number.';
    }
});

// --- Function 2: Demonstrating Scope ---
let globalVariable = "I am a global variable."; // This variable has global scope.

function showScope() {
    let localVariable = "I am a local variable."; // This has local (function) scope.
    console.log(globalVariable); // You can access global variables from within a function.
    console.log(localVariable);  // You can access local variables within the function.
}

showScope(); 

// The following line would cause an error because localVariable is not in scope.
// console.log(localVariable); 

const scopeBtn = document.getElementById('scopeBtn');
scopeBtn.addEventListener('click', function() {
    showScope();
    console.log("Check the console to see the scope demo results.");
});


/* ========================================================================= */
/* Part 3: Combining CSS Animations with JavaScript                           */
/* ========================================================================= */

const triggerBtn = document.getElementById('triggerBtn');
const targetBox = document.getElementById('targetBox');

// Use a function to add the CSS class and trigger the animation.
function triggerAnimation() {
    // Add the CSS class that contains the keyframe animation.
    targetBox.classList.add('triggered');

    // Remove the class after the animation is complete so it can be re-triggered.
    // The animation duration is 1.5s, so we'll remove it after that time.
    setTimeout(function() {
        targetBox.classList.remove('triggered');
    }, 1500); // 1500 milliseconds = 1.5 seconds
}

// Add an event listener to the button to call the trigger function.
triggerBtn.addEventListener('click', triggerAnimation);
