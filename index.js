alert('harkanbi welcome')
//starting to write my javascript code
//getting of html file by fetting it with the query selector
const keys = document.querySelector('.calculator_keys');
const display = document.querySelector('.calculator_display')
const calculator = document.querySelector('.calculator')



keys.addEventListener('click', event => {
    if (!event.target.closest('button')) return

    const key = event.target
    const keyValue = key.textContent
    const displayValue = display.textContent
    const type = key.dataset.type
    const previousKeyType = calculator.dataset.previousKeyType
    // display on the screen 
    // is this a number key? 
    if (type === 'number'){
        if(displayValue === '0'){
            display.textContent = keyValue
        }else if(previousKeyType === 'operator'){
            display.textContent = keyValue   
        }
        else{
            display.textContent = displayValue+keyValue
        }
        // calculator.dataset.previousKeyType = type
    }
    // is this a operator key?
    if (type === 'operator'){
        const operatorKeys = keys.querySelectorAll('[data-type="operator"]')
        operatorKeys.forEach(el => { el.dataset.state = ''})
        
        key.dataset.state = 'selected' 
        calculator.dataset.firstNumber = displayValue
        calculator.dataset.operator = key.dataset.key
    }
    if (type === 'equal'){
        const firstNumber = parseInt(calculator.dataset.firstNumber)
        const operator = calculator.dataset.operator
        
        const secondNumber = parseInt(displayValue)
        let result = ''
        if (operator === 'plus'){
            result = firstNumber + secondNumber
        }else if(operator === 'minus'){
            result = firstNumber - secondNumber
        }else if(operator === 'times'){
            result = firstNumber * secondNumber
        }else if(operator === 'divide'){
            result = firstNumber / secondNumber
         
        }display.textContent = result 
    }
    if (type === 'clear'){
        display.textContent = '0'
        delete calculator.dataset.firstNumber
        delete calculator.dataset.operator
    }
        calculator.dataset.previousKeyType = type
})
function clearCalculator () {
    const clearKey = document.querySelector('[data-type="clear"]')
    clearKey.click()
}

const one = document.querySelector('.one')

const displayValue = display.textContent
one.click()
console.assert(display.textContent === '1', 'Clicked One')
clearCalculator()
