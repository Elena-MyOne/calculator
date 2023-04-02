export function add(target: HTMLElement, operation: HTMLElement, input: HTMLInputElement) {
  if (target.closest('.buttons__digit-add')) {
    const inputValue = input.value;
    const operationValue = operation.textContent;
    let result = 0;
    if (operationValue === '') {
      operation.textContent = `${inputValue} +`;
      result = +inputValue;
    } else {
      if (operationValue) {
        result += parseInt(operationValue) + +inputValue;
        operation.textContent = `${result} +`;
      }
      
    }
    input.value = '0';
    
  }
  
}

export function subtract(target: HTMLElement) {}

export function multiply(target: HTMLElement) {}

export function divide(target: HTMLElement) {}

export function calculate(target: HTMLElement, operation: HTMLElement, input: HTMLInputElement) {
  if (target.closest('.buttons__digit-equally')) {
    const operationValue = operation.textContent;
    const inputValue = input.value;
    let result = 0;

    if (operationValue) {
      if (operationValue.endsWith('+')) {
        result = parseInt(operationValue) + +inputValue
      }
      input.value = result.toString()
    } else {
      input.value = inputValue;
    }

    operation.textContent = '';
  }
}

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