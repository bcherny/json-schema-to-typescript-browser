const { compile } = require('json-schema-to-typescript');

const leftInput = document.querySelector('#leftInput textarea');
const rightOutput = document.querySelector('#rightOutput textarea');
const errorIcon = document.getElementById('errorIcon');

leftInput.addEventListener('input', update);

const localStorageKey = 'json-schema-to-typescript';
const content = localStorage.getItem(localStorageKey);

if (content) {
  leftInput.value = content;
}

const options = {
  declareExternallyReferenced: true,
  enableConstEnums: true,
  unreachableDefinitions: false,
  strictIndexSignatures: false
};

// expose options for advance users
window.options = options;

console.info("Welcome! If you'd like to play around with more advance options,", "you can mutate the 'options' object assigned to window :)");

Object.keys(options).forEach(option => {
  const optionCheckbox = document.getElementById(option);

  if (!(optionCheckbox instanceof HTMLInputElement)) {
    console.warn(`"${option}" is missing an config element`);

    return;
  }

  options[option] = optionCheckbox.checked;
  optionCheckbox.addEventListener('change', () => {
    options[option] = optionCheckbox.checked;
    update();
  });
});

// initial compile
update();

function update() {
  localStorage.setItem(localStorageKey, leftInput.value);

  Promise.resolve()
    .then(() => JSON.parse(leftInput.value))
    .then(json => compile(json, 'Demo', options))
    .then(ts => (rightOutput.value = ts))
    .then(() => (errorIcon.style.display = 'none'))
    .catch(e => {
      console.error(e);

      errorIcon.style.display = null;
    });
}

document.getElementById('formatButton').addEventListener('click', format);

function format() {
  leftInput.value = prettier.format(leftInput.value, { parser: 'json-stringify' });
}
