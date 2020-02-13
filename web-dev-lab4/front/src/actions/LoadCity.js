import {getHeaderMini, getInfo} from "../util/City";

export default function (name) {
    return fetch(`http://localhost:4000/weather?name=${name}`)
        .then((response) => {
            if (!response.ok) {
                return response.text().then((text) => {throw text});
            }
            return response;
        })
        .then((response) => response.json())
        .then((response) => {
            return {"cityName": name, "cityHeader": getHeaderMini(response), "cityInfo": getInfo(response)};
        })
        .catch(err => {throw "Error loading city weather: " + err.toString()})
}