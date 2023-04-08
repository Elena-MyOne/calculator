export function animateButton(target: HTMLElement): void {
  if (target.closest('.buttons__digit-equally')) {
    target.style.backgroundColor = '#B8005C';
    setTimeout(() => {
      target.style.backgroundColor = '#AA0055'
    }, 300)
  } 
  if(target.closest('.buttons__digit')) {
    target.style.opacity = '0.6';
    setTimeout(() => {
      target.style.opacity = '1';
    }, 300)
  }
}

export function setTheme(): void {
  let theme = localStorage.getItem('theme') || 'dark';
  const root = document.querySelector('.root') as HTMLElement;

  if(root) {
    if(theme === 'light') {
      styleLightTheme(root)
    }
    if(theme === 'dark') {
      styleDarkTheme(root)
    }
  }
}

export function changeColorTheme (e: Event) {
  const target = e.target as HTMLElement;
  if(target) {
    changeIcon(target);
  }
}

export function changeIcon(target: HTMLElement): void {
  const darkIcon = '<svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 96 960 960" width="24"><path d="M524 995.999q-79.804 0-149.632-30.27-69.829-30.269-121.829-82.268-51.999-52-82.268-121.829-30.27-69.828-30.27-149.632 0-131.384 80.115-234.037Q300.23 275.31 427.306 243.31q-11.076 96.307 19.847 186.768 30.923 90.462 99.615 159.154t159.154 99.615q90.461 30.923 186.768 19.847-31.385 127.076-134.346 207.19Q655.384 995.999 524 995.999ZM524 936q88 0 163-44t118-121.107q-86-8.011-163-43.56-77-35.549-138-96.633-61-61.085-97-137.892Q371 416 364 330q-77 43-120.5 118.5T200 612q0 135 94.5 229.5T524 936Zm-20-305.385Z"/></svg>';
  const lightIcon = '<svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 96 960 960" width="24" fill="#EDEDED"><path d="M450.001 304.462V156.771h59.998v147.691h-59.998Zm242.921 100.769-41.153-41.153L754.922 257.54l42.538 43.153-104.538 104.538Zm58.616 200.768v-59.998h147.691v59.998H751.538Zm-301.537 389.23V847.922h59.998v147.307h-59.998ZM267.847 403.615 161.54 301.078l43.538-42.153 104.537 104.153-41.768 40.537Zm486.46 490.845L651.769 787.922l40.538-40.153 104.768 101.923-42.768 44.768ZM60.771 605.999v-59.998h147.691v59.998H60.771ZM204.693 894.46l-41.768-43.538 103.153-103.153 21.692 20.461 22.076 21.077L204.693 894.46Zm275.398-98.461q-91.629 0-155.859-64.14-64.231-64.14-64.231-155.768 0-91.629 64.14-155.859 64.14-64.231 155.768-64.231 91.629 0 155.859 64.14 64.231 64.14 64.231 155.768 0 91.629-64.14 155.859-64.14 64.231-155.768 64.231ZM480 736q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0-160Z"/></svg>';

  const image = document.querySelector('.nav__item-img');
  const root = document.querySelector('.root') as HTMLElement;

  if (target.closest('.nav__item-img')) {
    let theme = localStorage.getItem('theme') || 'dark';

    if (theme === 'dark') {
      if (image) {
        image.innerHTML = darkIcon;
      }
      if (root) {
        styleLightTheme(root)
        
      }
      localStorage.setItem('theme', 'light');
    } 

    if (theme === 'light') {
      if (image) {
        image.innerHTML = lightIcon;
      }
      if (root) {
        styleDarkTheme(root)
      }
      localStorage.setItem('theme', 'dark');
    }
  }
}

function styleDarkTheme(root: HTMLElement) {
  const text = document.querySelectorAll('.text') as NodeListOf<HTMLElement>;
  const buttons = document.querySelector('.buttons__digits') as HTMLElement;
  const calcBody = document.querySelector('.calc__body') as HTMLElement;
  const digits = document.querySelectorAll('.buttons__digit') as NodeListOf<HTMLElement>;
  const input = document.querySelector('.display__input') as HTMLInputElement;
  const squareRootTop = document.querySelector('.buttons__square-root-top') as HTMLInputElement;
  root.style.backgroundColor = '#2A2A2A';
  text.forEach((item) => {
    item.style.color = '#EDEDED'
  })
  buttons.style.color = '#EDEDED';
  calcBody.style.backgroundColor = '#414141';
  input.style.backgroundColor = '#414141';
  input.style.color = '#EDEDED';
  digits.forEach((item) => {
    item.style.boxShadow = 'rgba(0, 0, 0, 0.4) 0px 4px 12px'
  })
  squareRootTop.style.borderTop = '1px solid #EDEDED';
}

function styleLightTheme(root: HTMLElement) {
  const text = document.querySelectorAll('.text') as NodeListOf<HTMLElement>;
  const buttons = document.querySelector('.buttons__digits') as HTMLElement;
  const calcBody = document.querySelector('.calc__body') as HTMLElement;
  const digits = document.querySelectorAll('.buttons__digit') as NodeListOf<HTMLElement>;
  const input = document.querySelector('.display__input') as HTMLInputElement;
  const squareRootTop = document.querySelector('.buttons__square-root-top') as HTMLInputElement;
  root.style.backgroundColor = '#EDEDED';
  text.forEach((item) => {
    item.style.color = '#222222'
  })
  buttons.style.color = '#222222';
  calcBody.style.backgroundColor = '#FCFCFC';
  input.style.backgroundColor = '#FCFCFC';
  input.style.color = '#222222';
  digits.forEach((item) => {
    item.style.boxShadow = 'rgba(0, 0, 0, 0.1) 0px 4px 12px'
  });
  squareRootTop.style.borderTop = '1px solid #222222';
}

export function showShortcuts(e: Event): void {
  const target = e.target as HTMLElement;

  function hidePopup() {
    const hiddenPopup = document.querySelector('.nav__item-hidden') as HTMLElement;
      if (hiddenPopup.classList.contains('hidden')) {
        hiddenPopup.classList.remove('hidden')
      } else {
        hiddenPopup.classList.add('hidden')
      }
  }

  if (target) {
    if(target.closest('.hidden__title')) {
      hidePopup()
    }
    if(target.closest('.close')) {
      hidePopup()
    }
  }
}