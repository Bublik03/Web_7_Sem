import React, {Component} from 'react';

const COORD = "Coordinates: ";
const WIND = "Wind: ";
const HUMIDITY = "Humidity: ";
const PRESSURE = "Pressure: ";
const CLOUDS = "Clouds: ";

export class CityInfo extends Component{
    render() {
        let coord = this.props.data.coord;
        let wind = this.props.data.wind;
        let humidity = this.props.data.humidity;
        let pressure = this.props.data.pressure;
        let clouds = this.props.data.clouds;

        return <div>
            <div className = "info-row m-1 d-flex">
                <span>{WIND}</span>
                <span className={"ml-auto"}>{wind}</span>
            </div>
            <div className = "info-row m-1 d-flex">
                <span>{CLOUDS}</span>
                <span className={"ml-auto"}>{clouds}</span>
            </div>
            <div className = "info-row m-1 d-flex">
                <span>{PRESSURE}</span>
                <span className={"ml-auto"}>{pressure}</span>
            </div>
            <div className = "info-row m-1 d-flex">
                <span>{HUMIDITY}</span>
                <span className={"ml-auto"}>{humidity}</span>
            </div>
            <div className = "info-row m-1 d-flex">
                <span>{COORD}</span>
                <span className={"ml-auto"}>{coord}</span>
            </div>
        </div>

    }
}
