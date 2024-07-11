document.addEventListener("DOMContentLoaded", () => {

    const positionLatitude = 55.737780
    const positionLongetude = 37.866505
    const distantionLatitude = 55.743725
    const distantionLongetude = 37.863459

    const result = Math.sqrt((positionLatitude - positionLongetude) ** 2 + (distantionLatitude - distantionLongetude) ** 2)
    
    console.log(result)

})