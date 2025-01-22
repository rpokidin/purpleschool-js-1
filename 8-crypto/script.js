document.addEventListener("DOMContentLoaded", () => {

    function crypto(pass) {

        return pass[pass.length-1] + pass.slice(1, pass.length-1) + pass[0];
    
    }

    function cryptoCheck(passCrypto, pass) {

        let passCode = crypto(passCrypto)

        result = (passCode === pass) ? console.log(true) : console.log(false)

        return result

    }

    cryptoCheck('nomar', 'roman')
    
})