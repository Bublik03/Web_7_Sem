import React from 'react';
import {FavoriteHeader} from '../src/components/Favorite/FavoriteHeader';
import {shallow} from 'enzyme'
import {shallowToJson} from "enzyme-to-json";

it('renders correctly', () => {
    const tree = shallow(<FavoriteHeader/>);
    expect(shallowToJson(tree)).toMatchSnapshot();
});