import { animateButton } from "./animations";
import { displayDigit, add, calculate } from "./mathFunctions";

let memory = '';

export function populateDisplay(e: Event): void {
  const input = document.querySelector('.display__input') as HTMLInputElement;
  const operationDisplay = document.querySelector('.display__operation') as HTMLInputElement;

  const target = e.target as HTMLElement;
    if(target) {
      animateButton(target);
      displayDigit(target, input);
      add(target, operationDisplay, input);
      calculate(target, operationDisplay, input);
    }
    
    if(target.closest('.buttons__digit-clear')) {
      memory = '';
      operationDisplay.textContent = '';
      input.value = '0';
    }

    if(target.closest('.buttons__digit-clear-entry')) {
      operationDisplay.textContent = '';
      input.value = '0';
    }

    if(target.closest('.buttons__digit-del')) {
      let valueDisplay = input.value;
      if (valueDisplay.length === 1) {
        input.value = '0';
      } else {
        const newValue = valueDisplay.slice(0, -1);
        input.value = newValue;
        memory = newValue;
      }
      
    }

    // console.log('input', input.value);
    // console.log('memory', memory);
    // console.log(target);
}
