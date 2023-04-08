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
  const darkIcon = '<img src="../../assets/icons/dark.svg">';
  const lightIcon = '<img src="../../assets/icons/light.svg">';

  const image = document.querySelector('.nav__item-img');
  const root = document.querySelector('.root') as HTMLElement;

  if (target.closest('.nav__item-img')) {
    let theme = localStorage.getItem('theme') || 'dark';
    console.log('click icon: ', theme);

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
  const text = document.querySelector('.nav__item-shortcuts') as HTMLElement;
  const buttons = document.querySelector('.buttons__digits') as HTMLElement;
  const calcBody = document.querySelector('.calc__body') as HTMLElement;
  const digits = document.querySelectorAll('.buttons__digit') as NodeListOf<HTMLElement>;
  const input = document.querySelector('.display__input') as HTMLInputElement;
  const squareRootTop = document.querySelector('.buttons__square-root-top') as HTMLInputElement;
  root.style.backgroundColor = '#2A2A2A';
  text.style.color = '#EDEDED';
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
  const text = document.querySelector('.nav__item-shortcuts') as HTMLElement;
  const buttons = document.querySelector('.buttons__digits') as HTMLElement;
  const calcBody = document.querySelector('.calc__body') as HTMLElement;
  const digits = document.querySelectorAll('.buttons__digit') as NodeListOf<HTMLElement>;
  const input = document.querySelector('.display__input') as HTMLInputElement;
  const squareRootTop = document.querySelector('.buttons__square-root-top') as HTMLInputElement;
  root.style.backgroundColor = '#EDEDED';
  text.style.color = '#222222';
  buttons.style.color = '#222222';
  calcBody.style.backgroundColor = '#FCFCFC';
  input.style.backgroundColor = '#FCFCFC';
  input.style.color = '#222222';
  digits.forEach((item) => {
    item.style.boxShadow = 'rgba(0, 0, 0, 0.1) 0px 4px 12px'
  });
  squareRootTop.style.borderTop = '1px solid #222222';
}