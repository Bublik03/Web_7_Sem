import citiesReducer from "./citiesReducer";


export default function (state, action) {


    console.log(action);
    switch (action.type) {
        case "UPDATE_LIST":
            return {
                cities: action.list,
                download: false,
                error: false
            };
        case "LIST_LOAD_ERROR":
            return {
                cities: {},
                download: false,
                error: true,
                errorText : action.errorText
            };
        default:
            return {
                cities: citiesReducer(state.cities, action),
                error : false,
                download : false
            }
    }
}
