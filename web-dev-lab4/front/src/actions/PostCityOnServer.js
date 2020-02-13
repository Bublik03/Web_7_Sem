import UpdateCityInfo from "./UpdateCityInfo";
import {skipState} from "../util/City";

export default function (city) {
    return fetch("http://localhost:4000/favorite", {
        method : "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(city, skipState)
    })
        .then((response) => {
            if (!response.ok) {
                return response.text().then(text => {throw "City was not added: " + text});
            }
        })
        .then(() => UpdateCityInfo(city));
}