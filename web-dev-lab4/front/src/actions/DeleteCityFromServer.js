import DeleteCity from "./DeleteCity";
import ErrorLoadList from "./ErrorLoadList";

export default function (name) {
    return fetch("http://localhost:4000/favorite", {
        method: "DELETE",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name: name})
    })
        .then(response => {
            if (!response.ok && !response.status === 404)
                return response.text().then(text => {throw "City was not deleted: " + text});
        })
        .then(() => DeleteCity(name))
        .catch((err) => ErrorLoadList(err.toString()));
}