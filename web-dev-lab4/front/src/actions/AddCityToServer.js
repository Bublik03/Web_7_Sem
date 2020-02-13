import LoadCity from "./LoadCity";
import PostCityOnServer from "./PostCityOnServer";
import ErrorCity from "./CityErrored";

export default function (name) {
    return LoadCity(name)
        .then( (city) => PostCityOnServer(city))
        .catch(err => ErrorCity(name, err.toString()));
}