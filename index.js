const leftInput = document.querySelector('#leftInput textarea')
const rightOutput = document.querySelector('#rightOutput textarea')

leftInput.addEventListener('input', compile)

// initial compile
compile()

function compile() {
  const json = eval('(' + leftInput.value + ')')
  window.jstt.compile(json, 'Demo')
    .then(ts => {
      rightOutput.value = ts
    })
    .catch(e => {
      console.error(e)
    })
}
