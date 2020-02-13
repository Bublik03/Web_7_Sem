import React from 'react';
import {Page} from '../src/components/Page';
import {shallow} from 'enzyme'
import {shallowToJson} from "enzyme-to-json";

it('renders correctly', () => {
    const tree = shallow(<Page/>);
    expect(shallowToJson(tree)).toMatchSnapshot();
});