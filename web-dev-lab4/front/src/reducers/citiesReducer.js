


export default function (cities = {}, action) {
    let newState;
    switch (action.type) {
        case "ADD_CITY":
            if (!(action.cityName in cities)) {
                return {...cities, [action.cityName]: {cityHeader: null, cityInfo: null, error: false, download: true}};
            } else {
                return cities
            }
        case "DELETE_CITY":
            newState = {...cities};
            delete newState[action.cityName];
            return newState;
        case "UPDATE_CITY":
            newState = {...cities};
            newState[action.cityName].error = false;
            newState[action.cityName].download = true;
            return newState;
        case "UPDATE_CITY_INFO":
            newState = {...cities};
            newState[action.city.cityName] = action.city;
            newState[action.city.cityName].error = false;
            newState[action.city.cityName].download = false;
            return newState;
        case "ERROR_CITY":
            newState = {...cities};
            newState[action.cityName].error = true;
            newState[action.cityName].errorText =action.errorText;
            newState[action.cityName].download = false;
            return newState;
        case "CITY_NOT_LOADED":
            newState = {...cities};
            newState[action.cityName].error = true;
            newState[action.cityName].errorText = "The city was not saved on the server";
            newState[action.cityName].download = false;
            return newState;
        default:
            return cities
    }
}