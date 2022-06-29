// fazer um conversor de binário para decimal.
/*
→montar um for para percorrer o array
→Elevar o 2 de acordo com o array.
→inverter o array? será preciso?
*/
const coletaDado = function () {
  let dado = document.querySelector('.display')
  let pegaDado = document
    .querySelector('#botton')
    .addEventListener('click', event => {
      converteNum(dado.value)
    })
  let pressEnter = document.addEventListener('keyup', e => {
    if (e.keyCode == 13) {
      converteNum(dado.value)
    }
  })
}

const converteNum = function (num) {
  let decimal = 0
  let display = document.querySelector('.display')
  let bin = num.split('').reverse().join('')
  for (let index in bin) {
    if (bin[index] != '1' && bin[index] != '0') {
      alert('numero inválido, use apenas números binários')
    }
    bin[index] == '1' ? (decimal += 2 ** index) : (decimal += 0)
    console.log(decimal)
  }
  display.value = decimal
  display.addEventListener('click', () => (display.value = ''))
}

coletaDado()
