function operateResults(operation: string, input: string): number {
  if (operation) {
    if (operation.endsWith('+')) {
      return parseFloat(operation) + +input
    }
  
    if (operation.endsWith('-')) {
      return parseFloat(operation) - +input
    }
  
    if (operation.endsWith('x')) {
      return parseFloat(operation) * +input
    }
  
    if (operation.endsWith('/')) {
      return parseFloat(operation) / +input
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

export function add(symbol: string, target: HTMLElement, operation: HTMLElement, input: HTMLInputElement, key: string): void {
  if (target.closest('.buttons__digit-add') || key === '+') {
    makeOperation(symbol, operation, input);
  }
}

export function subtract(symbol: string, target: HTMLElement, operation: HTMLElement, input: HTMLInputElement, key: string): void {
  if (target.closest('.buttons__digit-subtract') || key === '-') {
    makeOperation(symbol, operation, input);
  }
}

export function multiply(symbol: string, target: HTMLElement, operation: HTMLElement, input: HTMLInputElement, key: string): void {
  if (target.closest('.buttons__digit-multiply') || key === '*') {
    makeOperation(symbol, operation, input);
  }
}

export function divide(symbol: string, target: HTMLElement, operation: HTMLElement, input: HTMLInputElement, key: string): void {
  if (target.closest('.buttons__digit-division') || key === '/') {
    makeOperation(symbol, operation, input);
  }
}

export function clear(target: HTMLElement, operation: HTMLElement, input: HTMLInputElement, key: string): void {
  if(target.closest('.buttons__digit-clear') || key === 'Delete') {
    operation.textContent = '';
    input.value = '0';
  }
}

export function deleteSymbol(target: HTMLElement, input: HTMLInputElement, key: string): void {
  if(target.closest('.buttons__digit-del') || key === 'Backspace') {
    let valueDisplay = input.value;
    if (valueDisplay.length === 1) {
      input.value = '0';
      localStorage.setItem('inputValue', '0');
    } else {
      const newValue = valueDisplay.slice(0, -1);
      input.value = newValue;
    }
  }
}

export function makeNegative(target: HTMLElement, input: HTMLInputElement, key: string): void {
  if(target.closest('.buttons__digit-negative') || key === 'F9') {
    let valueDisplay = input.value;
    if (valueDisplay.startsWith('-')) {
      const newValue = valueDisplay.slice(1);
      input.value = newValue
    } else {
      input.value = `-${valueDisplay}`
    }
  }
}

export function addDot(target: HTMLElement, input: HTMLInputElement, key: string): void {
  if(target.closest('.buttons__digit-dot') || key === '.') {
    let valueDisplay = input.value;
    input.value = `${valueDisplay}.`
  }
}

export function getPercent(target: HTMLElement, operation: HTMLElement, input: HTMLInputElement, key: string): void {
  if(target.closest('.buttons__digit-percent') || key === '%') {
    let valueDisplay = input.value;
    const operationValue = operation.textContent;
    let percent = '0';
    if (operationValue) {
      if (operationValue === 'Cannot divide by zero') {
        input.value = percent;
        operation.textContent = '';
      } else {
        const number = parseFloat(operationValue);
        percent = (number * +valueDisplay / 100).toString();
      }
      
    }
    input.value = percent;
  }
}

export function square(target: HTMLElement, input: HTMLInputElement, key: string): void {
  if(target.closest('.buttons__digit-square') || key === 'Q' || key === 'q') {
    let valueDisplay = input.value;
    input.value = Math.pow(+valueDisplay, 2).toString();
  }
}

export function getSquareRoot(target: HTMLElement, input: HTMLInputElement, key: string): void {
  if(target.closest('.buttons__digit-square-root') || key === '@') {
    let valueDisplay = input.value;
    input.value = Math.sqrt(+valueDisplay).toString();
  }
}

export function getOneDivideByNumber(target: HTMLElement, operation: HTMLElement, input: HTMLInputElement, key: string): void {
  if(target.closest('.buttons__digit-one-divide') || key === 'R' || key === 'r') {
    let valueDisplay = input.value;
    if (valueDisplay === '0') {
      input.value = '0';
      operation.textContent = 'Cannot divide by zero'
    } else {
      input.value = (1 / +valueDisplay).toString();
    }
  }
}

export function getFactorial(target: HTMLElement, input: HTMLInputElement, key: string): void {
  if(target.closest('.buttons__digit-factorial') || key === '!') {
    let valueDisplay = input.value;
    let counter = +valueDisplay;
    let result = +valueDisplay;
    if(valueDisplay === '0' || valueDisplay === '1') {
      input.value = '1';
    }
    while (counter > 1) {
      counter -= 1;
      result *= counter;
    }
    input.value = result.toString();
  }
}

export function calculate(target: HTMLElement, operation: HTMLElement, input: HTMLInputElement, key: string) {
  if (target.closest('.buttons__digit-equally') || key === '=' || key === 'Enter') {
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

export function displayDigit(target: HTMLElement, input: HTMLInputElement, key: string): string {
  let memory = '0';

  function defineResult(value: string, inputText: string | null): string {
    const result = value + inputText;
    input.value = result;
    return result;
  }

  if (
    target.closest('.buttons__digit-number') ||
    key === '1' || key === '2' || key === '3' || key === '4' || key === '5' ||
    key === '6' || key === '7' || key === '8' || key === '9' || key === '0'
  ) {

    if(input) {
      let valueDisplay = input.value;
      if (valueDisplay === '0') {
        valueDisplay = ''
      }
      if (target) {
        memory = defineResult(valueDisplay, target.textContent);
      }
      if (key) {
        memory = defineResult(valueDisplay, key)
      }
    }
  }
  return memory
}