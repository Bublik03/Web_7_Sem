import React, {Component} from 'react';
import {FavoriteCityHeader} from "./FavoriteCityHeader";
import {CityInfo} from "../CityCommon/CityInfo";
import UpdateCity from "../../actions/UpdateCity"
import LoadCity from "../../actions/LoadCity";
import DeleteCity from "../../actions/DeleteCity";
import {connect} from "react-redux";


export class FavoriteCity extends Component {

    constructor(props) {
        super(props);
        this.state = {error: false, download: !Boolean(props.cityInfo)};
        if (!props.cityInfo) {
            props.update(props.name);
        }
    }

    render() {
        let cityInfo = this.state.error
            ? <div className={"title-sm text-secondary ml-5"}>Oops..</div>
            : !this.state.download
                ? <CityInfo data={this.props.cityInfo}/>
                : <div><span className="spinner-border text-secondary ml-5 m-1 spin"/></div>;
        return <div>
            <div className={"d-flex flex-row align-items-center"}>
                <FavoriteCityHeader name={this.props.name} data={this.props.cityHeader} download={this.state.download} error={this.state.error}/>
                <div className={"ml-auto"}>
                    <button className={"btn btn-circle btn-secondary"} onClick={this.props.update.bind(null, this.props.name)}>↺</button>
                    <button className={"btn btn-circle btn-secondary"} onClick={this.props.delete.bind(null, this.props.name)}>X</button>
                </div>
            </div>
            {cityInfo}
        </div>
    }

    static getDerivedStateFromProps(props, state) {
        return {error: Boolean(props.error), download: Boolean(props.download || !Boolean(props.cityInfo))}
    }
}

function mapDispatchToProps(dispatch) {
    return {
        update: (name) => {dispatch(UpdateCity(name));dispatch(LoadCity(name));},
        delete: (name) => dispatch(DeleteCity(name))
    }
}

export default connect(null, mapDispatchToProps)(FavoriteCity)