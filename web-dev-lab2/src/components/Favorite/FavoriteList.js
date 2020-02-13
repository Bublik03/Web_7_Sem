import React, {Component} from 'react';
import FavoriteCity from "./FavoriteCity";
import {connect} from "react-redux";


export class FavoriteList extends Component {

    render() {
        return <div className={"row"}>
            {Object.entries(this.props.cities).map(([cityName, city]) => {
                return <div className={"col-6"} key={cityName}>
                    <FavoriteCity name={cityName} cityInfo={city.cityInfo} cityHeader={city.cityHeader} download={city.download} error={city.error}/>
                </div>
            })}
        </div>
    }

}

const mapStateToProps = (state) => {
    return {
        cities: state.cities,
    };
};

export default connect(mapStateToProps, null)(FavoriteList);