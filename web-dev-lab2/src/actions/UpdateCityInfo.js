
export default function (cityName, cityHeader, cityInfo) {
    return {
        type: 'UPDATE_CITY_INFO',
        cityName: cityName,
        cityHeader : cityHeader,
        cityInfo: cityInfo
    }
}