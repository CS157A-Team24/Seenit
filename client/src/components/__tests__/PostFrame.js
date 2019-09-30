import React from 'react';
import { shallow } from 'enzyme';
import PostFrame from '../PostFrame';

it('renders without crashing', () => {
    shallow(<PostFrame/>);
});
