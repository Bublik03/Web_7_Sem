import React from 'react';
import {FavoriteList} from '../src/components/Favorite/FavoriteList';
import {shallow} from 'enzyme'
import {shallowToJson} from "enzyme-to-json";

it('renders correctly', () => {
    const tree = shallow(<FavoriteList cities={
        {
            'a': {
                cityName: 'a',
                cityInfo: {
                    wind: "a",
                    pressure: "a",
                    clouds: "a",
                    humidity: "a"
                },
                cityHeader: {
                    name: 'a',
                    temp: 'a',
                    iconLink: 'a'
                },
                error: false,
                download: false
            }
        }}/>);
    expect(shallowToJson(tree)).toMatchSnapshot();
});

it('renders correctly', () => {
    const tree = shallow(<FavoriteList cities={
        {
            'a': {
                error: true,
                download: false
            }
        }}/>);
    expect(shallowToJson(tree)).toMatchSnapshot();
});

it('renders correctly', () => {
    const tree = shallow(<FavoriteList cities={
        {
            'a': {
                error: true,
                download: true
            }
        }}/>);
    expect(shallowToJson(tree)).toMatchSnapshot();
});