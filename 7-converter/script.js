document.addEventListener("DOMContentLoaded", () => {

    const amount = prompt('Сумма для конвертации')
    const original = prompt('Исходная валюта (RUB, USD, EUR)')
    const target = prompt('Целевая валюта (RUB, USD, EUR)')

    const currencyObj = {
        RUB: 1,
        USD: 103,
        EUR: 106,
    }

    let result = null

    if (currencyObj[original] == undefined || currencyObj[target] == undefined) {
        console.log(result)
        return
    }

    converter(amount, original, target)

    function converter(amount, original, target) {

        result = (amount * currencyObj[original]) / currencyObj[target]
        console.log(result)
        
    }

})