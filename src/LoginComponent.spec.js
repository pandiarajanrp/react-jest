import React from 'react';
import { shallow } from 'enzyme';

import LoginComponent from './LoginComponent';

const wrapper = shallow(<LoginComponent />);

const initialState = {
    username: "",
    password: "",
    usernameError: "",
    passwordError: ""
};

describe('LoginComponent Render', () => {
    it('should render login component', () => {
        expect(wrapper.find('.login-container').length).toEqual(1);
    });
});

describe('LoginComponent UserInteractions', () => {
    it('should set username error state', () => {
        wrapper.find('#btn-submit').simulate('click', {preventDefault: () => {}});
        expect(wrapper.state().usernameError).toEqual("This field is required");
    });
    it('username change will update data in state', () => {
        wrapper.find('#username').simulate('change', {target: { name: "username", value:"testusername"} });
        expect(wrapper.state().username).toEqual("testusername");
    });
});