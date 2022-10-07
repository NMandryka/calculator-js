
const input = document.querySelector('input'),
      clear = document.querySelector('.clear'),
      divide = document.querySelector('.divide'),
      plus = document.querySelector('.plus'),
      minus = document.querySelector('.minus'),
      multiply = document.querySelector('.multiply'),
      numbers = document.querySelectorAll('.numbers'),
      operators = document.querySelectorAll('.operators')


clear.addEventListener('click', () => {
    input.value = ''
})

numbers.forEach(item => {
    item.addEventListener('click', () => {
        input.value += item.innerHTML
    })
})

operators.forEach(item => {

    item.addEventListener('click', () => {
        const a = input.value.split('')
        console.log('+' - '+')

        if (a.length !== 0 && a[a.length - 1] != '+' && a[a.length - 1] != '-' && a[a.length - 1] != '×' && a[a.length - 1] != '÷') {
            input.value += item.innerHTML
        } else if(a.length !== 0) {
            input.value = input.value - a[a.length - 1] + item.innerHTML
        }
        
    })
})






