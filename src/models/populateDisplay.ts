import { animateButton } from "./animations";
import { displayDigit, add, calculate, subtract, multiply, divide, clear, deleteSymbol, makeNegative } from "./mathFunctions";

export function populateDisplay(e: Event): void {
  const input = document.querySelector('.display__input') as HTMLInputElement;
  const operationDisplay = document.querySelector('.display__operation') as HTMLInputElement;

  const target = e.target as HTMLElement;
    if(target) {
      animateButton(target);
      displayDigit(target, input);
      add('+', target, operationDisplay, input);
      subtract('-', target, operationDisplay, input);
      multiply('x', target, operationDisplay, input);
      divide('/', target, operationDisplay, input);
      clear(target, operationDisplay, input);
      deleteSymbol(target, input);
      calculate(target, operationDisplay, input);
      makeNegative(target, input);
    }

    // console.log('input', input.value);
    // console.log('memory', memory);
    // console.log(target);
}
