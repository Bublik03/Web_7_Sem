import React from 'react';
import {CurrentCity} from '../src/components/Current/CurrentCity';
import {shallow} from 'enzyme'
import {shallowToJson} from "enzyme-to-json";

it('renders correctly', () => {
    const tree = shallow(<CurrentCity position={{
            latitude: 55.75,
            longitude: 37.62
        }}/>);
    expect(shallowToJson(tree)).toMatchSnapshot();
});

it('renders correctly', () => {
    const tree = shallow(<CurrentCity position={{
            latitude: 55.75,
            longitude: 37.62
        }}/>);
    tree.setState({download : true, error : false});
    expect(shallowToJson(tree)).toMatchSnapshot();
});

it('renders correctly', () => {
    const tree = shallow(<CurrentCity position={{
            latitude: 55.75,
            longitude: 37.62
        }}/>);
    tree.setState({download : false, error : true});
    expect(shallowToJson(tree)).toMatchSnapshot();
});