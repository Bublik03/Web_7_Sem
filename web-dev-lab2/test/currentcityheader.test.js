import React from 'react';
import {CurrentCityHeader} from '../src/components/Current/CurrentCityHeader';
import {shallow} from 'enzyme'
import {shallowToJson} from "enzyme-to-json";

it('renders correctly', () => {
    const tree = shallow(<CurrentCityHeader data={{name : "a", temp : "5 C", iconLink : "a"}}/>);
    expect(shallowToJson(tree)).toMatchSnapshot();
});