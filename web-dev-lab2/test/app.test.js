import React from 'react';
import App from '../src/App';
import {shallow} from 'enzyme'
import {shallowToJson} from "enzyme-to-json";

it('renders correctly', () => {
    const tree = shallow(<App/>);
    expect(shallowToJson(tree)).toMatchSnapshot();
});