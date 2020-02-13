import React, {Component} from 'react';
import FavoriteList from "./Favorite/FavoriteList";
import FavoriteHeader from "./Favorite/FavoriteHeader";


export class Favorite extends Component {

    render() {
        return <div>
            <FavoriteHeader/>
            <FavoriteList/>
        </div>
    }

}
