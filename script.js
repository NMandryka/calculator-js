
const numberButtons = document.querySelectorAll('.numbers'),
      operatorButtons = document.querySelectorAll('.operators'),
      clearButton = document.querySelector('.clear'),
      deleteButton = document.querySelector('.delete'),
      equalsButton = document.querySelector('.equals'),
      previousOperandText = document.querySelector('.previous-operand'),
      currentOperandText = document.querySelector('.current-operand'),
      periodButton = document.querySelector('.point') 

numberButtons.forEach(button =>  {
    button.addEventListener('click' , () => {
        currentOperandText.innerHTML += button.innerHTML
    })
})


clearButton.addEventListener('click', () => {
    currentOperandText.innerHTML = ''
    previousOperandText.innerHTML = ''
})

deleteButton.addEventListener('click', () => {
    if(currentOperandText.innerHTML != '') {
        const currentOperandTextValue = currentOperandText.innerHTML.split('')
        currentOperandTextValue.pop()
        currentOperandText.innerHTML = currentOperandTextValue.join('')
    }
    else if (previousOperandText.innerHTML != '') {
        const previousValue = previousOperandText.innerHTML.split('')
        previousValue.pop()
        currentOperandText.innerHTML = previousValue.join('')
        previousOperandText.innerHTML = ''
    }
})

periodButton.addEventListener('click', () => {
    const currentOperandTextValue = currentOperandText.innerHTML.split('') 
    const values = currentOperandText.innerHTML.split('')
    if(values.indexOf('.') === -1) {
        currentOperandText.innerHTML += '.'
    }
})

operatorButtons.forEach(button => {

    button.addEventListener('click', () => {
        if(previousOperandText.innerHTML === '') {
            const lastValue = currentOperandText.innerHTML.split('')
            if(lastValue.length != 0 &&
            lastValue[lastValue.length - 1] != '÷' &&
            lastValue[lastValue.length - 1] != '*'&&
            lastValue[lastValue.length - 1] != '-' &&
            lastValue[lastValue.length - 1] != '+')  {
    
                previousOperandText.innerHTML = currentOperandText.innerHTML + button.innerHTML
                currentOperandText.innerHTML = ''
            }
        }
        else {
            const previousValue = previousOperandText.innerHTML.split('')
            const operator = previousValue[previousValue.length - 1]
            previousValue.pop()
            const curVal = Number(currentOperandText.innerHTML)
            
            switch(operator) {
                case '+':
                    previousOperandText.innerHTML =  curVal + Number(previousValue.join('')) + button.innerHTML
                    currentOperandText.innerHTML = ''
                    break
                case '-':
                    previousOperandText.innerHTML = +previousValue.join('') - curVal + button.innerHTML
                    currentOperandText.innerHTML = ''
                    break
                case "*":
                    previousOperandText.innerHTML *= +previousValue.join('') + button.innerHTML
                    currentOperandText.innerHTML = ''
                    break
                case '÷':
                    if(+previousValue.join('') / curVal < 0.01) {
                        previousOperandText.innerHTML = (+previousValue.join('') / curVal) + '÷'
                    currentOperandText.innerHTML = ''
                    } else {
                        previousOperandText.innerHTML = (+previousValue.join('') / curVal).toFixed(2) + '÷'
                        currentOperandText.innerHTML = ''
                    }
                    
                    break
                    
            }
        }
    })
})

equalsButton.addEventListener('click', () => {
    const previousValue = previousOperandText.innerHTML.split('')
    const operator = previousValue[previousValue.length - 1]
    previousValue.pop()
    const curVal = Number(currentOperandText.innerHTML)
    
    switch(operator) {
        case '+':
            currentOperandText.innerHTML =  curVal + Number(previousValue.join(''))
            previousOperandText.innerHTML = ''
            break
        case '-':
            currentOperandText.innerHTML = +previousValue.join('') - curVal
            previousOperandText.innerHTML = ''
            break
        case "*":
            currentOperandText.innerHTML *= +previousValue.join('')
            previousOperandText.innerHTML = ''
            break
        case '÷':
            if(+previousValue.join('') / curVal < 0.01) {
                previousOperandText.innerHTML = (+previousValue.join('') / curVal) + '÷'
            currentOperandText.innerHTML = ''
            } else {
                previousOperandText.innerHTML = (+previousValue.join('') / curVal).toFixed(2) + '÷'
                currentOperandText.innerHTML = ''
            }
            break
            
    }

})
