export function animateButton(target: HTMLElement): void {
  if (target.closest('.buttons__digit-equally')) {
    target.style.backgroundColor = '#B8005C';
    setTimeout(() => {
      target.style.backgroundColor = '#AA0055'
    }, 300)
  } else {
    target.style.backgroundColor = '#F6F6F6';
    setTimeout(() => {
      target.style.backgroundColor = '#FCFCFC'
    }, 300)
  }
}
