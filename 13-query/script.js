document.addEventListener("DOMContentLoaded", () => {

    const queryObj = {
        options: {
            search: "Вася",
            take: 10,
            give: 5
        },
        transformURL: function () {

            let queryURL = '';

            for (const key in this.options) {

                if (queryURL !== '') {

                    queryURL += '&';

                }

                queryURL += `${key}=${this.options[key]}`;

            }

            return queryURL;

        }
    }

    console.log(queryObj.transformURL())

})