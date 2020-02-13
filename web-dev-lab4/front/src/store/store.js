import {applyMiddleware, createStore} from "redux";
import reducer from "../reducers/reducer"
import reduxpromise from "redux-promise"

let store = createStore(reducer, { cities : {}}, applyMiddleware(reduxpromise));

export default store