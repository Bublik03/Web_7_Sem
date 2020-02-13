import React, {Component} from 'react';
import FavoriteList from "./Favorite/FavoriteList";
import FavoriteHeader from "./Favorite/FavoriteHeader";
import {connect} from "react-redux";
import LoadList from "../actions/LoadList";

class Favorite extends Component {

    constructor(props) {
        super(props);
        props.update()
    }

    render() {
        return this.props.state.download ?
            <div><span className="spinner-border text-secondary ml-5 m-1 spin"/></div>
            : this.props.state.error ?
                <div className={"title-sm text-secondary ml-5"}>{"Error:" + (this.props.state.errorText || "Something went wrong...")}</div>
                : <div>
                    <FavoriteHeader/>
                    <FavoriteList/>
                </div>
    }

}

function mapDispatchToProps(dispatch) {
    return {
        update: () => (dispatch(LoadList()))
    }
}

function mapStateToProps(state) {
    return {
        state : state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);