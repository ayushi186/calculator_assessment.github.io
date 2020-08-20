import Calculator from "./calculator";
//import fs from "fs";
//import path from "path";
//const html = fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");
let displayElement;
let testCalculator;

beforeEach(() => {
    document.body.innerHTML = `<div id ="container" >
    <div class="calculator">
      <div class="calculator__display" data-display id="mainDisplay">0</div>

      <div class="calculator__keys">
        <button class="key--operator" data-action="add" data-operation>
          +
        </button>
        <button class="key--operator" data-action="subtract" data-operation>
          -
        </button>
        <button class="key--operator" data-action="multiply" data-operation>
          x
        </button>
        <button class="key--operator" data-action="divide" data-operation>
          ÷
        </button>
        <button data-number>7</button>
        <button data-number>8</button>
        <button data-number>9</button>
        <button data-number>4</button>
        <button data-number>5</button>
        <button data-number>6</button>
        <button data-number>1</button>
        <button data-number>2</button>
        <button data-number>3</button>
        <button data-number>0</button>
        <button data-number data-action="decimal">.</button>
        <button data-clear id="clear">AC</button>
        <button class="key--equal" data-equals>=</button>
      </div>
    </div>
  </div>
`;
    displayElement = document.querySelector("#container .calculator__display");
    testCalculator = new Calculator(displayElement);

});



//positive tests for appendNumbernumber //
test('test works ', function () {
    var number = 2
    const result = testCalculator.appendNumberToDisplay(number);
    expect(result).toBe('2');
})
//positive tests for Compute method //
test('test the compute method for addition ', function () {

    testCalculator.previousOperand = "2";
    testCalculator.operation = "+"
    testCalculator.currentOperand = "4";
    const result1 = testCalculator.compute();
    expect(result1).toBe(6);
})

test('test the compute method for subtraction ', function () {

    testCalculator.previousOperand = "50";
    testCalculator.operation = "-"
    testCalculator.currentOperand = "6";
    const result2 = testCalculator.compute();
    expect(result2).toBe(44);
})

test('test the compute method for division ', function () {

    testCalculator.previousOperand = "50";
    testCalculator.operation = "÷"
    testCalculator.currentOperand = "10";
    const result3 = testCalculator.compute();
    expect(result3).toBe(5);
})


test('test the compute method for multiplication', function () {

    testCalculator.previousOperand = "50";
    testCalculator.operation = "x"
    testCalculator.currentOperand = "10";
    const result4 = testCalculator.compute();
    expect(result4).toBe(500);
})

//Negative Test//
test('test the compute method for division (negative test) when the value returned is a number not a string', function () {

    testCalculator.previousOperand = "50";
    testCalculator.operation = "÷"
    testCalculator.currentOperand = "10";
    const result3 = testCalculator.compute();
    expect(result3).not.toBe("5");
})

//tests for decimal number //
test('test the compute method for division when decimal number is returned ', function () {

    testCalculator.previousOperand = "49";
    testCalculator.operation = "÷"
    testCalculator.currentOperand = "10";
    const result5 = testCalculator.compute();
    expect(result5).toBe(4.9);
})

test('test the compute method for addition when decimal number is passed', function () {

    testCalculator.previousOperand = "2.5";
    testCalculator.operation = "+"
    testCalculator.currentOperand = "6";
    const result6 = testCalculator.compute();
    expect(result6).toBe(8.5);
})
test('test the compute method for subtraction when decimal number is passed', function () {

    testCalculator.previousOperand = "50.5";
    testCalculator.operation = "-"
    testCalculator.currentOperand = "2.7";
    const result7 = testCalculator.compute();
    expect(result7).toBe(47.8);
})

test('test the compute method for multiplication', function () {

    testCalculator.previousOperand = "52.4";
    testCalculator.operation = "x"
    testCalculator.currentOperand = "0.4";
    const result8 = testCalculator.compute();
    expect(result8).toBe(20.96);
})

//test the All clear button//

test('test the allClear button', () => {
    testCalculator.allClear();
    expect(displayElement.innerHTML).toContain('0');
})







