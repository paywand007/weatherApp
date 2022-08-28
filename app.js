let weather = {
    apiKey: 'd867f71b9ca5df4118ad0e2546e0c8e9',
    fetchWeather: function(city) {
        fetch(
                'https://api.openweathermap.org/data/2.5/weather?q=' +
                city +
                '&units=metric&appid=' +
                this.apiKey
            )
            .then((response) => response.json())
            .then((data) => this.privewWeather(data))
    },
    privewWeather: function(data) {
        const { name } = data
        const { icon, description } = data.weather[0]
        const { temp, humidity } = data.main
        const { country } = data.sys
        const { speed } = data.wind
        console.log(name, icon, description, temp, humidity, speed)
        document.querySelector('.city').innerHTML = `Weather In ${name} ${country}`
        document.querySelector('.temp').innerHTML = `${temp}°C `
        document.querySelector('.humidity').innerHTML = `Humidity: ${humidity}% `
        document.querySelector('.wind').innerHTML = ` Wind Speed: ${speed} Km/h`
        document.querySelector('.description').innerHTML = `   ${description}`
        document.querySelector(
                '.icon'
            ).src = `https://openweathermap.org/img/wn/${icon}.png`
            //Adding image backgroundImage to body
        document.body.style.backgroundImage =
            "url('https://source.unsplash.com/1600x900/?" + name + "')"
    },
    search: function() {
        const searchCity = document.querySelector('.val').value
        this.fetchWeather(searchCity)
    },
}
const curentDate = () => {
    //Adding dates
    const date = new Date()
    const day = date.getDate()
    const month = date.getMonth() + 1 // getMonth() returns month from 0 to 11
    const year = date.getFullYear()
    document.querySelector('.date').innerHTML = `${day}/${month}/${year}`
}
curentDate()