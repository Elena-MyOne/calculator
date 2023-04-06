import { animateButton } from "./animations";
import { displayDigit, add, calculate, subtract, multiply, divide, clear, deleteSymbol, makeNegative, addDot, getPercent, square, getSquareRoot, getOneDivideByNumber, getFactorial } from "./mathFunctions";

export function populateDisplay(e: Event | KeyboardEvent): void {
  const input = document.querySelector('.display__input') as HTMLInputElement;
  const operationDisplay = document.querySelector('.display__operation') as HTMLInputElement;

  const target = e.target as HTMLElement;

  const keyboardEvent = <KeyboardEvent> e;
  const key = keyboardEvent.key as string;

  if(target || key) {
    animateButton(target);
    displayDigit(target, input, key);
    add('+', target, operationDisplay, input, key);
    subtract('-', target, operationDisplay, input, key);
    multiply('x', target, operationDisplay, input, key);
    divide('/', target, operationDisplay, input, key);
    clear(target, operationDisplay, input, key);
    deleteSymbol(target, input, key);
    calculate(target, operationDisplay, input);
    makeNegative(target, input, key);
    addDot(target, input, key);
    getPercent(target, operationDisplay, input, key);
    square(target, input);
    getSquareRoot(target, input);
    getOneDivideByNumber(target, operationDisplay, input);
    getFactorial(target, input);
  }
}
