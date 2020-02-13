import UpdateList from "./UpdateList";
import ErrorLoadList from "./ErrorLoadList";

export default function () {
    return fetch("http://localhost:4000/favorite")
        .then(res => {
            if (!res.ok)
                throw res.statusText;
            else
                return res.json()
        })
        .then(list => UpdateList(list))
        .catch((err) => ErrorLoadList(err.toString()))
}