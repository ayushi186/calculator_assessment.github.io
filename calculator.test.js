import Calculator from "./calculator";
import fs from "fs";
import path from "path";
const html = fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");

beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
});


afterEach(() => {
    // restore the original func after test
    jest.resetModules();
});


//positive tests for appendNumbernumber //
test('test works ', function () {
    const testCalc = new Calculator();
    var number = 2
    const result = testCalc.appendNumberToDisplay(number);
    expect(result).toBe('2');
})
//positive tests for Compute method //
test('test the compute method for addition ', function () {
    const testCalc = new Calculator();
    testCalc.previousOperand = "2";
    testCalc.operation = "+"
    testCalc.currentOperand = "4";
    const result1 = testCalc.compute();
    expect(result1).toBe(6);
})

test('test the compute method for subtraction ', function () {
    const testCalc = new Calculator();
    testCalc.previousOperand = "50";
    testCalc.operation = "-"
    testCalc.currentOperand = "6";
    const result2 = testCalc.compute();
    expect(result2).toBe(44);
})

test('test the compute method for division ', function () {
    const testCalc = new Calculator();
    testCalc.previousOperand = "50";
    testCalc.operation = "÷"
    testCalc.currentOperand = "10";
    const result3 = testCalc.compute();
    expect(result3).toBe(5);
})


test('test the compute method for multiplication', function () {
    const testCalc = new Calculator();
    testCalc.previousOperand = "50";
    testCalc.operation = "x"
    testCalc.currentOperand = "10";
    const result4 = testCalc.compute();
    expect(result4).toBe(500);
})

//Negative Test//
test('test the compute method for division (negative test) when the value returned is a number not a string', function () {
    const testCalc = new Calculator();
    testCalc.previousOperand = "50";
    testCalc.operation = "÷"
    testCalc.currentOperand = "10";
    const result3 = testCalc.compute();
    expect(result3).not.toBe("5");
})

//tests for decimal number //
test('test the compute method for division when decimal number is returned ', function () {
    const testCalc = new Calculator();
    testCalc.previousOperand = "49";
    testCalc.operation = "÷"
    testCalc.currentOperand = "10";
    const result5 = testCalc.compute();
    expect(result5).toBe(4.9);
})

test('test the compute method for addition when decimal number is passed', function () {
    const testCalc = new Calculator();
    testCalc.previousOperand = "2.5";
    testCalc.operation = "+"
    testCalc.currentOperand = "6";
    const result6 = testCalc.compute();
    expect(result6).toBe(8.5);
})
test('test the compute method for subtraction when decimal number is passed', function () {
    const testCalc = new Calculator();
    testCalc.previousOperand = "50.5";
    testCalc.operation = "-"
    testCalc.currentOperand = "2.7";
    const result7 = testCalc.compute();
    expect(result7).toBe(47.8);
})

test('test the compute method for multiplication', function () {
    const testCalc = new Calculator();
    testCalc.previousOperand = "52.4";
    testCalc.operation = "x"
    testCalc.currentOperand = "0.4";
    const result8 = testCalc.compute();
    expect(result8).toBe(20.96);
})







