const leftInput = document.querySelector('#leftInput textarea');
const rightOutput = document.querySelector('#rightOutput textarea');

leftInput.addEventListener('input', compile);

const localStorageKey = 'json-schema-to-typescript';
const content = localStorage.getItem(localStorageKey);

if (content) {
  leftInput.value = content;
}

const options = {
  // bannerComment: '',
  declareExternallyReferenced: true,
  enableConstEnums: true,
  // style: { /* prettier config */ },
  unreachableDefinitions: false,
  strictIndexSignatures: false
  // $refOptions: {}
};

// expose options for advance users
window.options = options;

Object.keys(options).forEach(option => {
  const optionCheckbox = document.getElementById(option);

  if (!(optionCheckbox instanceof HTMLInputElement)) {
    console.warn(`"${option}" is missing an config element`);

    return;
  }

  options[option] = optionCheckbox.checked;
  optionCheckbox.addEventListener('change', () => {
    options[option] = optionCheckbox.checked;
    compile();
  });
});

// initial compile
compile();

function compile() {
  localStorage.setItem(localStorageKey, leftInput.value);
  const json = eval('(' + leftInput.value + ')');
  window.jstt
    .compile(json, 'Demo', options)
    .then(ts => {
      rightOutput.value = ts;
    })
    .catch(e => {
      console.error(e);
    });
}
