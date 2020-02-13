import React from 'react';
import {Favorite} from '../src/components/Favorite';
import {shallow} from 'enzyme'
import {shallowToJson} from "enzyme-to-json";

it('renders correctly', () => {
    const tree = shallow(<Favorite/>);
    expect(shallowToJson(tree)).toMatchSnapshot();
});