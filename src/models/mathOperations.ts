let memory = '';

export function populateDisplay(e: Event) {
  const input = document.querySelector('.display__input') as HTMLInputElement;

  const target = e.target as HTMLElement;
    if (target.closest('.buttons__digit-number')) {

        if(input) {
          let displayValue = input.value;
          if (displayValue === '0') {
            displayValue = ''
          }
          const result = displayValue + target.textContent;
          input.value = result;
          memory = result;
        }
    } 
    
    if(target.closest('.buttons__digit-clear')) {
      memory = '';
      input.value = '0';
    }
    if(target.closest('.buttons__digit-clear-entry')) {
      input.value = '0';
    }

    if(target.closest('.buttons__digit-del')) {
      let displayValue = input.value;
      if (displayValue.length === 1) {
        input.value = '0';
      } else {
        const newValue = displayValue.slice(0, -1);
        input.value = newValue;
        memory = newValue;
      }
      
    }

    console.log('input', input.value);
    console.log('memory', memory);
}

