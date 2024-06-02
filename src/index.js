const { compile } = require('json-schema-to-typescript');

const options = {
  declareExternallyReferenced: true,
  enableConstEnums: true,
  unreachableDefinitions: false,
  strictIndexSignatures: false
};

// expose options for advance users
window.options = options;

window.addEventListener('DOMContentLoaded', async () => {
  console.info("Welcome! If you'd like to play around with more advance options,", "you can mutate the 'options' object assigned to window :)");

  // Attach DOM event listeners
  getLeftInput().addEventListener('input', update);
  document.getElementById('formatButton').addEventListener('click', format);

  // Init app
  loadFromURI();
  await update();
  initOptions();
});

function loadFromURI() {
  const hash = window.location.hash.slice(1);
  if (!hash.startsWith('schema=')) {
    return;
  }
  getLeftInput().value = window.decodeURI(hash.slice(7));
}

function initOptions() {
  Object.keys(options).forEach(option => {
    const optionCheckbox = document.getElementById(option);
    options[option] = optionCheckbox.checked;
    optionCheckbox.addEventListener('change', async () => {
      options[option] = optionCheckbox.checked;
      await update();
    });
  });
}

async function update() {
  const input = getInput();
  if (input === undefined) {
    return;
  }

  // save input to local storage
  save();

  // re-compile TS
  try {
    const ts = await compile(input, 'Demo', options);
    getRightOutput().value = ts;
    clearError();
  } catch (e) {
    setError(e);
  }
}

function clearError() {
  getErrorIcon().style.display = 'none';
}

function setError(e) {
  console.error(e);
  getErrorIcon().title = e;
  getErrorIcon().style.display = null;
}

function format() {
  const input = getInput();
  if (input === undefined) {
    return;
  }

  getLeftInput().value = JSON.stringify(input, null, 2);
  save();
}

function save() {
  window.location.hash = 'schema=' + window.encodeURI(getLeftInput().value);
}

function getInput() {
  try {
    const input = JSON.parse(getLeftInput().value);
    clearError();
    return input;
  } catch (e) {
    setError(e);
    return undefined;
  }
}

function getLeftInput() {
  return document.querySelector('#leftInput textarea');
}
function getRightOutput() {
  return document.querySelector('#rightOutput textarea');
}
function getErrorIcon() {
  return document.getElementById('errorIcon');
}
