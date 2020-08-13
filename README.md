# calculator_assessment.github.io

Calculator Assessment

The calculator brain .

1. The JS consists of a claculator class that has all the methods namely :allClear() , appendNumberToDisplay(), checkOperation() , compute() and updateDisplay()
2. at the very first an instance is created for the calculator class using new keyword .
3. Under the constructor of the class the allClear method is called . So that while creating the instance of the class it clears off all the variable value .
4. All the number buttons having the attribute (data-number) in html are first selected using querySelectorAll and then using foreach an eventlistner 'click' is attached to every number button which calls the appendNumberToDisplay() method . This method has an additional check for the '.' (period) that it must occur in a number only once (decimal numbers). if user clicks so many '.' then it will not return anything or will stop porcessing . This method then add the number typed to the 'currentOperand' variable , if in case user types in some other digit then it appends it to the previously typed number(that is why toString() has been used because we want to 'append' the number not 'add' them).
5. Now when user is done typing in the operands it's time for passing an operator(+,-,\*,÷) . All the operator button have attribute - data-operation. an event listener has been attached to the same which calls the method checkOperation(). checkOperation() first checks if there are any operands or not? meaning if user has clicked on any operator without passing any operand . method stops processing as soon as there are no operands found .otherwise it checks if there were some operands passed - in case of chained calculation and executes the method named- compute() where the real calculation takes place.
6. compute() method is called when user click on '=' button as well as when there are chained calculations as discussed in point 5 . this method first convert the previous and current operand into float so as to handle the decimal calculations as well as normal calculations. it also checks for the previous and current operand whether those are Not a number , if yes it stops processing.else it goes to the switch case based on the operation passed by the user using the button having the attribute data-operation.
7. after every method is called the updateDisplay() is called so that user can check the values and results in realtime.
8. on clicking the AC button the allclear() method is called which clears all the variables used and resets the innertext of the diplayElement back to '0'
