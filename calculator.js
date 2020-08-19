export default class Calculator {
    constructor(displayElement) {
        this.displayElement = displayElement;
        this.clear();
    }
    //this method clears the display element innertext//
    allClear() {
        this.displayElement.innerHTML = '0';
        this.currentOperand = '';
        this.previousOperand = ''
        this.operation = '';
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = ''
        this.operation = '';
    }
    // this method is for appending the number in a row for calculation//

    appendNumberToDisplay(number) {
        // when there is already a decimal typed in and next decimal is passed then stop processing this code! 
        if (number === '.' && this.currentOperand.includes('.')) return;
        //otherwise append any consecutive number passed through keypad//
        this.currentOperand = this.currentOperand.toString() + number.toString();
        return this.currentOperand;


    }


    checkOperation(operation) {
        console.log(operation);
        /*if there is no number passed before hitting the operator (+,-,*,÷)  or a operators are hit back to back without passing operand then stop! */
        if (this.currentOperand === '') return;
        /*below else if condition is used to check for concatenated operations like - 2+2=4*3=12-2  alongwith normal single calculation*/
        else if (this.previousOperand !== '') {
            this.compute();
        }
        /*clear off the currentOperand and populate previousOperand and operation when we only have the currentOperand but no previous cached value for calculation */
        this.operation = operation;
        this.previousOperand = this.currentOperand + this.operation;
        console.log(this.previousOperand);
        this.currentOperand = '';
    }

    /* This method is where the real calculation happen*/
    compute() {
        /*Initiate a variable that will hold the calculation value*/

        let computation;
        /* Convert the previous and current operand into float for decimal point calculations */
        const previous = parseFloat(this.previousOperand);
        console.log(previous);
        const current = parseFloat(this.currentOperand);
        console.log(current);
        /* If the previous and current operands are not a number then Stop!*/
        if (isNaN(previous) || isNaN(current)) return;
        /*otherwise check of the switch cases - go to the one and execute based on the operations variable*/
        switch (this.operation) {
            case '+':
                computation = previous + current;
                break;
            case '-':
                computation = previous - current;
                break;
            case 'x':
                computation = previous * current;
                break;
            case '÷':
                computation = previous / current;
                break;
            default:
                return;
        }
        /*populate the value of the variables for updatedisplay method and clear off the previousOperand*/

        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = '';
        return this.currentOperand;

    }


    /*This method keeps updating the diplay of the calculator as an when any calculation happen or any input is provided by calculator key */
    updateDisplay() {
        if (this.currentOperand === '' && this.previousOperand !== '') {
            this.displayElement.innerText = this.previousOperand;
        }

        else if (this.currentOperand !== '') {
            this.displayElement.innerText = this.currentOperand;
        }
        else {
            this.displayElement.innerText = '0';

        }
    }
}