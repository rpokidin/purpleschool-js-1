document.addEventListener("DOMContentLoaded", () => {

    const arrNum = [3, 6, 9, 2]

    function filterNum(fn, array) {
        const filterArr = []
        for (let i = 0; i < array.length; i++) {
            if (fn(array[i])) {
                filterArr.push(array[i])
            }
        }
        return filterArr;
    }

    function isLess(number) {
        return number < 4
    }

    function isMore(number) {
        return number > 4
    }

    console.log(filterNum(isLess, arrNum))
    console.log(filterNum(isMore, arrNum))

})