import React from 'react';
import {FavoriteCity} from '../src/components/Favorite/FavoriteCity';
import {shallow} from 'enzyme'
import {shallowToJson} from "enzyme-to-json";

it('renders correctly', () => {
    const tree = shallow(<FavoriteCity name={'a'}
                                       cityHeader={{
                                           name: 'a',
                                           temp: 'a',
                                           iconLink: 'a'
                                       }}
                                       cityInfo={{
                                           wind: "a",
                                           pressure: "a",
                                           clouds: "a",
                                           humidity: "a"
                                       }}
                                       error={false}
                                       download={false}
                                       update={() => {}}
                                       delete={() => {}}
    />);
    expect(shallowToJson(tree)).toMatchSnapshot();
});

it('renders correctly', () => {
    const tree = shallow(<FavoriteCity error={true} download={false} update={() => {}} delete={() => {}}/>);
    expect(shallowToJson(tree)).toMatchSnapshot();
});

it('renders correctly', () => {
    const tree = shallow(<FavoriteCity error={false} download={true} update={() => {}} delete={() => {}}/>);
    expect(shallowToJson(tree)).toMatchSnapshot();
});