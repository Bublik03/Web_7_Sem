export function getHeader(response) {
    return {
        name: response.name,
        temp: parseInt(response.main.temp - 273) + "°C",
        iconLink: "https://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png"
    }
}

export function getHeaderMini(response) {
    return {
        name: response.name,
        temp: parseInt(response.main.temp - 273) + "°C",
        iconLink: "https://openweathermap.org/img/wn/" + response.weather[0].icon + ".png"
    }
}

export function getInfo(response) {
    return {
        coord: response.coord.lon + ", " + response.coord.lat,
        wind: response.wind.speed + " m/s",
        humidity: response.main.humidity + " %",
        pressure: response.main.pressure + " hpa",
        clouds: response.weather[0].description
    }

}
