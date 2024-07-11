document.addEventListener("DOMContentLoaded", () => {

    const driverAge = prompt('Сколько вам лет', '');
    const rightsAvto = confirm("У вас есть права?");
    const driverSobriety = confirm("Вы трезвый?");
    
    const result = (driverAge >= 18 && rightsAvto === true && driverSobriety === true) ? 'Может' : 'Не может'
    console.log(result)

})