import React from 'react';
import {CityInfo} from '../src/components/CityCommon/CityInfo';
import {shallow} from 'enzyme'
import {shallowToJson} from "enzyme-to-json";

it('renders correctly', () => {
    const tree = shallow(<CityInfo data={{ wind : "a", pressure : "a", clouds : "a", humidity : "a"}}/>);
    expect(shallowToJson(tree)).toMatchSnapshot();
});