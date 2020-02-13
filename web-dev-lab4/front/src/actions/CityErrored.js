
export default function (cityName, errorText) {
    return {
        type: 'ERROR_CITY',
        cityName: cityName,
        errorText : errorText
    }
}