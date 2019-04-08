import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import {Link} from "react-router-dom";
import LoginComponent from './LoginComponent';

const wrapper = mount(<MemoryRouter><LoginComponent /></MemoryRouter>);

const initialState = {
    username: "",
    password: "",
    usernameError: "",
    passwordError: ""
};

// describe('LoginComponent Render', () => {
//     it('should render login component', () => {
//         expect(wrapper.find('.login-container').length).toEqual(1);
//     });
// });

// describe('LoginComponent UserInteractions', () => {
//     it('should set username error state', () => {
//         wrapper.find('#btn-submit').simulate('click', {preventDefault: () => {}});
//         expect(wrapper.state().usernameError).toEqual("This field is required");
//     });
//     it('username change will update data in state', () => {
//         wrapper.find('#username').simulate('change', {target: { name: "username", value:"testusername"} });
//         expect(wrapper.state().username).toEqual("testusername");
//     });
// });

// describe('LoginComponent Toggle Child nodes on hover', () => {
//     it('should set username error state', () => {
//         wrapper.find('#btn-toggle').simulate('mouseenter');
//         expect(wrapper.state().showChild).toEqual(true);
//         expect(wrapper.find(".childs li").length).toEqual(3);
//     });
//     it('username change will update data in state', () => {
//         wrapper.find('#btn-toggle').simulate('mouseleave');
//         expect(wrapper.state().showChild).toEqual(false);
//         expect(wrapper.find(".childs").length).toEqual(0);
//     });
// });

describe('LoginComponent Check Link Component href', () => {
    it('should return login page link', () => {
        expect(wrapper.find(Link).props().to).toEqual('/user-login');
    });
});