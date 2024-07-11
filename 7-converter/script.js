document.addEventListener("DOMContentLoaded", () => {

    const converter = (sum, originalCurrency = 'RUB', targetCurrency = 'USD') => {

        const RUB = 1
        const USD = 88
        const EUR = 95
        const BYN = 27

        switch (`${originalCurrency}-${targetCurrency}`) {
            case 'RUB-USD':
                return (sum * RUB) / USD
                break
            case 'USD-RUB':
                return (sum * USD) / RUB
                break
            case 'RUB-EUR':
                return (sum * RUB) / EUR
                break
            case 'EUR-RUB':
                return (sum * EUR) / RUB
                break
            case 'RUB-BYN':
                return (sum * RUB) / BYN
                break
            case 'BYN-RUB':
                return (sum * BYN) / RUB
                break
            default:
                return null
        }
   
    }

    console.log(converter(1000))
    //console.log(converter(1000, 'RUB', 'EUR'))

})