function operateResults(operation: string, input: string): number {
  if (operation) {
    if (operation.endsWith('+')) {
      return parseInt(operation) + +input
    }
  
    if (operation.endsWith('-')) {
      return parseInt(operation) - +input
    }
  
    if (operation.endsWith('x')) {
      return parseInt(operation) * +input
    }
  
    if (operation.endsWith('/')) {
      return parseInt(operation) / +input
    }
  }
  return +input
}

function makeOperation(symbol: string, operation: HTMLElement, input: HTMLInputElement): void {
  const inputValue = input.value;
    const operationValue = operation.textContent;
    let result = 0;
    if (operationValue === '') {
      operation.textContent = `${inputValue} ${symbol}`;
      result = +inputValue;
    } else {
      if (operationValue) {
        result += operateResults(operationValue, inputValue)
        operation.textContent = `${result} ${symbol}`;
      }
    }
    input.value = '0';
}

export function add(symbol: string, target: HTMLElement, operation: HTMLElement, input: HTMLInputElement): void {
  if (target.closest('.buttons__digit-add')) {
    makeOperation(symbol, operation, input);
  }
}

export function subtract(symbol: string, target: HTMLElement, operation: HTMLElement, input: HTMLInputElement): void {
  if (target.closest('.buttons__digit-subtract')) {
    makeOperation(symbol, operation, input);
  }
}

export function multiply(symbol: string, target: HTMLElement, operation: HTMLElement, input: HTMLInputElement): void {
  if (target.closest('.buttons__digit-multiply')) {
    makeOperation(symbol, operation, input);
  }
}

export function divide(symbol: string, target: HTMLElement, operation: HTMLElement, input: HTMLInputElement): void {}

export function calculate(target: HTMLElement, operation: HTMLElement, input: HTMLInputElement) {
  if (target.closest('.buttons__digit-equally')) {
    const operationValue = operation.textContent;
    const inputValue = input.value;
    let result = 0;

    if (operationValue) {
      result = operateResults(operationValue, inputValue)
      input.value = result.toString()
    } else {
      input.value = inputValue;
    }
    operation.textContent = '';
  }
}

//TODO упростить add() и subtract()б выделить повторяющийся код в отдельную функцию

export function displayDigit(target: HTMLElement, input: HTMLInputElement): string {
  let memory = '0';

  if (target.closest('.buttons__digit-number')) {

    if(input) {
      let valueDisplay = input.value;
      if (valueDisplay === '0') {
        valueDisplay = ''
      }
      const result = valueDisplay + target.textContent;
      input.value = result;
      memory = result;
    }
  }
  return memory
}