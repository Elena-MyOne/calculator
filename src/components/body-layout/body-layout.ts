import { populateDisplay } from "../../models/populateDisplay";
import { changeColorTheme, setTheme} from "../../models/animations";

const body = document.querySelector('body');

export function renderBody() {
  const root = document.createElement('div');
  root.classList.add('root');

  const theme = localStorage.getItem('theme') || 'dark';

  root.innerHTML = `
    <header class="header">
      <nav class="nav">
        <ul class="nav__items">
          <li class="nav__item nav__item-shortcuts text">Keyboard shortcuts</li>
          <li class="nav__item nav__item-img"><img src="../../assets/icons/${(theme === 'dark') ? 'light' : 'dark'}.svg"></li>
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
  window.addEventListener('keydown', populateDisplay);
  window.addEventListener('load', setTheme);
}


