document.addEventListener("DOMContentLoaded", () => {

    const calcNum1 = document.querySelector('.num1')
    const calcNum2 = document.querySelector('.num2')
    const calcBtns = document.querySelectorAll('.btn-group .btn')
    let divResult = document.querySelector('.result')
    let calcResult

    calcBtns.forEach(elBtn => {

        elBtn.addEventListener('click', (e) => {

            divResult.innerText = ''
            const eTarget = e.target.getAttribute('data-event')
            const calcNum1Val = Number(calcNum1.value)
            const calcNum2Val = Number(calcNum2.value)

            switch (eTarget) {
            case 'plus':
                calcResult = calcNum1Val + calcNum2Val
                break
            case 'divide':
                calcResult = calcNum1Val / calcNum2Val
                break
            case 'minus':
                calcResult = calcNum1Val - calcNum2Val
                break
            case 'multiply':
                calcResult = calcNum1Val * calcNum2Val
                break
            }

            calcNum1.value = ''
            calcNum2.value = ''
            divResult.innerText = calcResult
            calcResult = 0

        })

    })
    
})