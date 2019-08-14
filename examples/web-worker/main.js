const worker = new Worker('./worker.js');

const getAmount = () => document.getElementById('amount').value;
const possibleClasses = ['red', 'green'];

const calc = () => {
  const amount = getAmount();
  worker.postMessage(amount);
};

const changeClasses = e => {
  const classList = e.currentTarget.classList;
  possibleClasses.map(cssClass => classList.toggle(cssClass));
};

const init = () => {
  const divs = Array.prototype.slice.call(document.getElementsByTagName('div'));
  divs.map(div => div.addEventListener('click', changeClasses));

  worker.onmessage = event => {
    console.log('result: ', event.data);
  };
};

init();
