import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

const wrapper = shallow(<App />);

describe('LoginComponent Render', () => {
    it('should render login component', () => {
        //console.log(wrapper);
    });
});