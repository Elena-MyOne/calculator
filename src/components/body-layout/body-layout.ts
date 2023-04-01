const body = document.querySelector('body');

export function renderBody() {
  if (body) {
    body.append(root)
  }
}

const root = document.createElement('div');
root.classList.add('root')

root.innerHTML = `
  <div class="calc">
    <div class="calc__body">
      <div class="calc__display display">
        <input type="text" class="display__input" value="0" />
      </div>
      <div class="calc__buttons buttons">
        <ul class="buttons__digits">
          <li class="buttons__digit">%</li>
          <li class="buttons__digit">CE</li>
          <li class="buttons__digit">C</li>
          <li class="buttons__digit buttons__digit-top">DEL</li>
          <li class="buttons__digit">1/x</li>
          <li class="buttons__digit">x<sup>2</sup></li>
          <li class="buttons__digit"><span>&#8730;</span><span style="border-top: 1px solid black">x</span></li>
          <li class="buttons__digit">
            <img src="../../assets/icons/division.svg" alt="" />
          </li>
          <li class="buttons__digit">7</li>
          <li class="buttons__digit">8</li>
          <li class="buttons__digit">9</li>
          <li class="buttons__digit">
            <img src="../../assets/icons/multiply.svg" alt="" />
          </li>
          <li class="buttons__digit">4</li>
          <li class="buttons__digit">5</li>
          <li class="buttons__digit">6</li>
          <li class="buttons__digit">-</li>
          <li class="buttons__digit">1</li>
          <li class="buttons__digit">2</li>
          <li class="buttons__digit">3</li>
          <li class="buttons__digit">+</li>
          <li class="buttons__digit">+/-</li>
          <li class="buttons__digit">0</li>
          <li class="buttons__digit">.</li>
          <li class="buttons__digit buttons__digit-equally">=</li>
        </ul>
      </div>
    </div>
  </div>
`


