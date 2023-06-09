import { populateDisplay } from "../../models/populateDisplay";
import { changeColorTheme, setTheme, showShortcuts} from "../../models/animations";

const body = document.querySelector('body');

export function renderBody() {
  const root = document.createElement('div');
  root.classList.add('root');

  const theme = localStorage.getItem('theme') || 'dark';

  root.innerHTML = `
    <header class="header">
      <nav class="nav">
        <ul class="nav__items">
          <li class="nav__item nav__item-shortcuts text">
            <div class="hidden__title">Keyboard shortcuts</div>
            <div class="nav__item-hidden hidden">
              <ul>
                <li class="hidden__item text-right"><span class="hidden__shortcut close">+</span></li>
                <li class="hidden__item"><span class="hidden__shortcut">+</span> - to add input values</li>
                <li class="hidden__item"><span class="hidden__shortcut">-</span> - to subtract input values</li>
                <li class="hidden__item"><span class="hidden__shortcut">*</span> - to multiplicate input values</li>
                <li class="hidden__item"><span class="hidden__shortcut">/</span> - to divide input values</li>
                <li class="hidden__item"><span class="hidden__shortcut">Delete</span> - to clear up input display</li>
                <li class="hidden__item"><span class="hidden__shortcut">Backspace</span> - to delete one symbol from the input display</li>
                <li class="hidden__item"><span class="hidden__shortcut">F9</span> - to change input value from positive to negative and back</li>
                <li class="hidden__item"><span class="hidden__shortcut">.</span> - to add a dot to an input value</li>
                <li class="hidden__item"><span class="hidden__shortcut">Q</span> or <span class="hidden__shortcut">q</span> - to get a square of an input value</li>
                <li class="hidden__item"><span class="hidden__shortcut">@</span> - to get a square root of an input value</li>
                <li class="hidden__item"><span class="hidden__shortcut">R</span> or <span class="hidden__shortcut">r</span> - to divide 1 into an input value</li>
                <li class="hidden__item"><span class="hidden__shortcut">!</span> - to get factorial from an input value</li>
                <li class="hidden__item"><span class="hidden__shortcut">=</span> or <span class="hidden__shortcut">Enter</span> - to calculate the result</li>
                <li class="hidden__item">keys from <span class="hidden__shortcut">0</span> to <span class="hidden__shortcut">9</span> - to input numbers</li>
              </ul>
            </div>
          </li>
          <li class="nav__item nav__item-img"><img src="./assets/icons/${(theme === 'dark') ? 'light' : 'dark'}.svg"></li>
        </ul>
      </nav>
    </header>
    <main class="calc">
      <div class="calc__body">
        <div class="calc__display display">
          <div class="display__operation"></div>
          <input type="text" class="display__input" value="0" disabled/>
        </div>
        <div class="calc__buttons buttons">
          <ul class="buttons__digits">
            <li class="buttons__digit buttons__digit-percent">%</li>
            <li class="buttons__digit buttons__digit-factorial">x!</li>
            <li class="buttons__digit buttons__digit-clear">AC</li>
            <li class="buttons__digit buttons__digit-del">DEL</li>
            <li class="buttons__digit buttons__digit-one-divide">1/x</li>
            <li class="buttons__digit buttons__digit-square">x<sup>2</sup></li>
            <li class="buttons__digit buttons__digit-square-root"><span>&#8730;</span><span class="buttons__square-root-top">x</span></li>
            <li class="buttons__digit buttons__digit-division">/</li>
            <li class="buttons__digit buttons__digit-number">7</li>
            <li class="buttons__digit buttons__digit-number">8</li>
            <li class="buttons__digit buttons__digit-number">9</li>
            <li class="buttons__digit buttons__digit-multiply">x</li>
            <li class="buttons__digit buttons__digit-number">4</li>
            <li class="buttons__digit buttons__digit-number">5</li>
            <li class="buttons__digit buttons__digit-number">6</li>
            <li class="buttons__digit buttons__digit-subtract">-</li>
            <li class="buttons__digit buttons__digit-number">1</li>
            <li class="buttons__digit buttons__digit-number">2</li>
            <li class="buttons__digit buttons__digit-number">3</li>
            <li class="buttons__digit buttons__digit-add">+</li>
            <li class="buttons__digit buttons__digit-negative">+/-</li>
            <li class="buttons__digit buttons__digit-number">0</li>
            <li class="buttons__digit buttons__digit-dot">.</li>
            <li class="buttons__digit buttons__digit-equally">=</li>
          </ul>
        </div>
      </div>
    </main>
    <footer class="footer">
      <span class="footer__text text">&copy; Developed by</span>
      <a class="footer__link" href="https://github.com/Elena-MyOne" target="_blank">Elena-MyOne</a>
    </footer>
  `

  if (body) {
    body.append(root);
  }

  (root.querySelector('.calc__body') as HTMLElement).addEventListener('click', populateDisplay);
  (root.querySelector('.nav') as HTMLElement).addEventListener('click', changeColorTheme);
  (root.querySelector('.nav') as HTMLElement).addEventListener('click', showShortcuts);
  window.addEventListener('keydown', populateDisplay);
  window.addEventListener('load', setTheme);
}


