import { populateDisplay } from "../../models/populateDisplay";

const body = document.querySelector('body');

export function renderBody() {
  const root = document.createElement('div');
  root.classList.add('root')

  root.innerHTML = `
    <div class="calc">
      <div class="calc__body">
        <div class="calc__display display">
          <div class="display__operation"></div>
          <input type="text" class="display__input" value="0" disabled/>
        </div>
        <div class="calc__buttons buttons">
          <ul class="buttons__digits">
            <li class="buttons__digit">%</li>
            <li class="buttons__digit ">x<sup>y</sup></li>
            <li class="buttons__digit buttons__digit-clear">AC</li>
            <li class="buttons__digit buttons__digit-del">DEL</li>
            <li class="buttons__digit">1/x</li>
            <li class="buttons__digit">x<sup>2</sup></li>
            <li class="buttons__digit"><span>&#8730;</span><span style="border-top: 1px solid black">x</span></li>
            <li class="buttons__digit">
              <img src="../../assets/icons/division.svg" alt="" />
            </li>
            <li class="buttons__digit buttons__digit-number">7</li>
            <li class="buttons__digit buttons__digit-number">8</li>
            <li class="buttons__digit buttons__digit-number">9</li>
            <li class="buttons__digit buttons__digit-multiply">
              <img src="../../assets/icons/multiply.svg" alt="" />
            </li>
            <li class="buttons__digit buttons__digit-number">4</li>
            <li class="buttons__digit buttons__digit-number">5</li>
            <li class="buttons__digit buttons__digit-number">6</li>
            <li class="buttons__digit buttons__digit-subtract">-</li>
            <li class="buttons__digit buttons__digit-number">1</li>
            <li class="buttons__digit buttons__digit-number">2</li>
            <li class="buttons__digit buttons__digit-number">3</li>
            <li class="buttons__digit buttons__digit-add">+</li>
            <li class="buttons__digit">+/-</li>
            <li class="buttons__digit buttons__digit-number">0</li>
            <li class="buttons__digit">.</li>
            <li class="buttons__digit buttons__digit-equally">=</li>
          </ul>
        </div>
      </div>
    </div>
  `

  if (body) {
    body.append(root);
  }

  (root.querySelector('.calc__body') as HTMLElement).onclick = populateDisplay;
}


