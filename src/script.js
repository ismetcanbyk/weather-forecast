const url = 'https://api.openweathermap.org/data/2.5/'
const key = '36f229bac579805ddca6efb882bd1f9e'

const searchBar = document.getElementById('searchBar')
const searchButton = document.getElementById('searchButton')



const setQuery = (e) => {
    if (e.keyCode == '13') {
        getResult(searchBar.value)
        searchBar.value = ''
    }
}

const tryQuery = () => {
    getResult(searchBar.value)
    searchBar.value = ''
}



let getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    fetch(query)
        .then(weather => {
            return weather.json()
        })
        .then(displayResult)
}

const displayResult = (result) => {
    console.log(result)
    let city = document.querySelector('.city')
    let cityArray = result.name.split(" ")
    city.innerText = `${cityArray[0]}    ${result.sys.country}`

    let temp = document.querySelector('.temp')
    temp.innerText = `${Math.round(result.main.temp)}°C`

    let desc = document.querySelector('.desc')
    desc.innerText = result.weather[0].description

    let minmax = document.querySelector('.minmax')
    minmax.innerText = `${Math.round(result.main.temp_min)}°C/${Math.round(result.main.temp_max)}°C`
}



searchBar.addEventListener('keypress', setQuery)
searchButton.addEventListener('click', tryQuery)





