import {applyMiddleware, createStore} from "redux";
import reducer from "../reducers/reducer"
import reduxpromise from "redux-promise"

let initialState = JSON.parse(localStorage.getItem("cityList")) || {cities : { }};
let store = createStore(reducer, initialState, applyMiddleware(reduxpromise));

store.subscribe(() => {
    localStorage.setItem("cityList", JSON.stringify(store.getState(), function (key, value) {
        if (key === "error" || key === "download") {
            return undefined
        } else {
            return value
        }
    }));
});

export default store