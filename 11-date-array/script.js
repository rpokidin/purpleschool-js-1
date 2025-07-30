document.addEventListener("DOMContentLoaded", () => {

	const dateArr = ['10-02-2022', 'тест', '11/12/2023', '00/13/2022', '41/12/2023'];

	function isDateValid(arr) {

			let dateMap = dateArr.map(el =>  {

			const dateSplit = el.split(/[/-]+/)

			return dateSplit

		})


		const dateFilter = dateMap.filter(el => {

			return el.length > 1

		})


		const dateFormat = dateFilter.map(el =>  {

			const date = new Date(el)

			const dateD = (date.getDate() < 10) ? '0'+date.getDate() : date.getDate()
			const dateM = (date.getMonth() < 10) ? '0'+date.getMonth() : date.getMonth()
			const dateY = date.getFullYear()

			return `${dateD}/${dateM}/${dateY}`

		})

		const dateResult = dateFormat.filter(el => {

			const dateRegex = /^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}$/

			return dateRegex.test(el)

		})

		console.log(dateResult)
		
	}

	isDateValid(dateArr)

})