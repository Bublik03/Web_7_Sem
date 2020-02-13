import React, {Component, Fragment} from 'react';


export class FavoriteCityHeader extends Component {

    render() {
        let temp, img;
        if (!this.props.download && ! this.props.error) {
            temp = <span className={"p-2 ml-auto mini-temp"}>
                {this.props.data.temp}
            </span>;
            img = <img className={"p-2 ml-auto"} alt="icon" src={this.props.data.iconLink}/>
        }
        return <Fragment>
            <span className={"title-sm"} >
                {this.props.name}
            </span>
            {temp}
            {img}
        </Fragment>
    }

}
