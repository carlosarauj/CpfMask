let input = document.querySelector('input') 

input.addEventListener('keypress', () => {
  let inputLength = input.value.length

  if(inputLength === 3){
    input.value += '.'
  }

  if(inputLength === 7){
    input.value += '.'
  }

  if(inputLength === 11){
    input.value += '-'
  }

})