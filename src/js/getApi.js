const $ = require('jquery')

var settings = {
    "url": "https://api.coincap.io/v2/assets",
    "method": "GET",
    "timeout": 0,
};



export default $.ajax(settings).done(function (response) {
    for (let i = 0; i < response.data.length; i++) {
        let container = document.createElement("div")
        container.classList.add('field__card')
        let name = document.createElement('h2')
        name.classList.add("card__symbol")
        name.innerHTML = `${response.data[i].symbol} | `
        let spanName = document.createElement('span')
        spanName.classList.add('card__name')
        spanName.innerHTML = `${response.data[i].name}`
        name.append(spanName)

        let price = document.createElement('p')
        price.classList.add("card__price")
        price.innerHTML = `Price: ${response.data[i].priceUsd.substr(0,10)}$`

        let volume = document.createElement('p')
        volume.classList.add("card__volume")
        volume.innerHTML = `Volume USD 24HR: ${response.data[i].volumeUsd24Hr.substr(0,10)}$`

        let vwap24Hr = document.createElement('p')
        vwap24Hr.classList.add("card__vwap24hr")
        vwap24Hr.innerHTML = `Intraday settlement: ${response.data[i].vwap24Hr}$`


        container.append(name)
        container.append(price)
        container.append(volume)
        container.append(vwap24Hr)
        document.querySelector('.main__field').append(container)
    }
});
