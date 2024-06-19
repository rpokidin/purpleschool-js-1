document.addEventListener("DOMContentLoaded", () => {

    const positionLatitude = 55.737780
    const positionLongetude = 37.866505
    const distantionLatitude = 55.743725
    const distantionLongetude = 37.863459

    console.log(Math.sqrt(Math.pow((positionLatitude - positionLongetude), 2) + Math.pow((distantionLatitude - distantionLongetude), 2)))

})