import React from 'react';
import {Current} from '../src/components/Current';
import {shallow} from 'enzyme'
import {shallowToJson} from "enzyme-to-json";

it('renders correctly', () => {
    const tree = shallow(<Current/>);
    expect(shallowToJson(tree)).toMatchSnapshot();
});