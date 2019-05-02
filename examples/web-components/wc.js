class CharCount extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});

    this.shadowRoot.innerHTML = `
        <style>
            p.valid { background-color: green; }
            p.invalid { background-color: red; }
        </style>
        <div>
            <slot id="hallo" name="input"></slot>
            <p id="currentChars"></p>
        </div>
      `;

    this.input = this.shadowRoot.querySelector('[name="input"]');
    this.currentCharsNode = this.shadowRoot.getElementById('currentChars');
  }

  handleInput = e => {
    const currentChars = e.target.value.length;
    this.currentCharsNode.innerHTML = `${currentChars} characters`;

    if (currentChars <= this.maxChars) {
      this.currentCharsNode.classList.remove('invalid');
      this.currentCharsNode.classList.add('valid');
    } else {
      this.currentCharsNode.classList.remove('valid');
      this.currentCharsNode.classList.add('invalid');
    }
  };

  connectedCallback() {
    this.maxChars = this.getAttribute('max-chars');
    this.input.addEventListener('keyup', this.handleInput);
  }

  disconnectedCallback() {
    this.input.removeEventListener('keyup', this.handleInput);
  }
}

customElements.define('char-count', CharCount);
