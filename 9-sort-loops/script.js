document.addEventListener("DOMContentLoaded", () => {

    let arrNum = [1, 40, -5, 10, 0]

    function sortArr(arrNum) {

        for (let i = 0; i < arrNum.length; i++) {
            for (let j = 0; j < arrNum.length; j++){
                if (arrNum[i] < arrNum[j]) {
                    [arrNum[i],arrNum[j]] = [arrNum[j], arrNum[i]]
                }
            }
        }

        console.log(arrNum)

    }

    sortArr(arrNum)

})