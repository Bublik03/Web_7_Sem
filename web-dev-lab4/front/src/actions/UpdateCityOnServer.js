import LoadCity from "./LoadCity";
import PutCityOnServer from "./PutCityOnServer";
import ErrorCity from "./CityErrored";

export default function (name) {
    return LoadCity(name)
        .then(city => {
            city.cityName = name;
            return PutCityOnServer(city)
        })
        .catch(err => ErrorCity(name, err.toString()));
}