import citiesReducer from "./citiesReducer";


export default function (state, action) {
        return {
            cities : citiesReducer(state.cities, action)
        }
}