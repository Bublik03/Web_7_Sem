import React from 'react';
import {FavoriteCityHeader} from '../src/components/Favorite/FavoriteCityHeader';
import {shallow} from 'enzyme'
import {shallowToJson} from "enzyme-to-json";

it('renders correctly', () => {
    const tree = shallow(<FavoriteCityHeader name={'a'}
                                             data={{
                                                 name: 'a',
                                                 temp: 'a',
                                                 iconLink: 'a'
                                             }}
                                             error={false}
                                             download={false}
    />);
    expect(shallowToJson(tree)).toMatchSnapshot();
});

it('renders correctly', () => {
    const tree = shallow(<FavoriteCityHeader error={true} download={false}/>);
    expect(shallowToJson(tree)).toMatchSnapshot();
});

it('renders correctly', () => {
    const tree = shallow(<FavoriteCityHeader error={false} download={true}/>);
    expect(shallowToJson(tree)).toMatchSnapshot();
});