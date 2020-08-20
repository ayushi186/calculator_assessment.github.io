import Calculator from "./calculator";

// select all the buttons and the textarea that displays the results using querySelector//
const numberBtns = document.querySelectorAll('[data-number]');
const operatorBtns = document.querySelectorAll('[data-operation]');
const equalsBtn = document.querySelector('[data-equals]');
const allClearBtn = document.querySelector('[data-clear]');
const displayElement = document.querySelector('[data-display]');
const checkelement = document.querySelector("#container .calculator__display");
console.log(checkelement);
//calculator class//


//create an instance of the calculator class //
const calculator1 = new Calculator(displayElement);

//loop through all the buttons for number keys and attach an event listener that first appends the number and then updates the display//
numberBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log(btn);
        calculator1.appendNumberToDisplay(btn.innerText);
        calculator1.updateDisplay();
    })
});
//loop through all the buttons for operator keys and attach an event listener that first choose the number and then updates the display//
operatorBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        calculator1.checkOperation(btn.innerText);
        calculator1.updateDisplay();
    })
})


//on clicking the '=' button output the result//
equalsBtn.addEventListener('click', () => {
    calculator1.compute();
    calculator1.updateDisplay();
})
//on clicking on the AC(all clear) button all the value resets //
allClearBtn.addEventListener('click', () => {
    calculator1.allClear();
})