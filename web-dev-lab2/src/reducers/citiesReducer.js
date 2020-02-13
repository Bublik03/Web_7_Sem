


export default function (cities, action) {
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
            newState[action.cityName].cityHeader = action.cityHeader;
            newState[action.cityName].cityInfo = action.cityInfo;
            newState[action.cityName].error = false;
            newState[action.cityName].download = false;
            return newState;
        case "ERROR_CITY":
            newState = {...cities};
            newState[action.cityName].error = true;
            newState[action.cityName].download = false;
            return newState;
        default:
            return cities
    }
}