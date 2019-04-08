import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {Link} from 'react-router-dom';
import {getMoviesList} from "./actions/loginActions";

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            usernameError: "",
            passwordError: "",
            showChild: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleChild = this.toggleChild.bind(this);
        this.getData = this.getData.bind(this);
    }

    handleChange(e) {
        const {name, value} = e.target;
        const stateCopy = Object.assign({}, this.state);
        if (value) {
            stateCopy[name] = value;
            stateCopy[`${name}Error`] = "";
        } else {
            stateCopy[`${name}Error`] = "";
        }
        
        stateCopy[name] = value;
        this.setState(stateCopy);
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.isValid()) {
            return false;
        }
    }

    isValid() {
        if (!this.state.username) {
            this.setState({usernameError: "This field is required"});
            return false;
        } else if(!this.state.password) {
            this.setState({passwordError: "This field is required"});
            return false;
        }
        return true;
    }

    toggleChild() {
        this.setState({showChild: !this.state.showChild});
    }

    async getData() {
        const data = await getMoviesList();
        console.log("*********", data);
    }

    render() {
        const {username, password, usernameError, passwordError} = this.state;
        return(
            <div className="col-md-4 login-container">
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="text" name="username" id="username" placeholder="Username" onChange={this.handleChange} value={username}/>
                        {usernameError ? <span className="error">{usernameError}</span> : null}
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password" placeholder="Password" onChange={this.handleChange} value={password}/>
                        {passwordError ? <span className="error">{passwordError}</span> : null}
                    </FormGroup>
                    <Button id="btn-submit">Submit</Button>
                </Form>
                <div className="toggleChild">
                    <Button onMouseEnter={this.toggleChild} onMouseLeave={this.toggleChild} id="btn-toggle">Toggle Child</Button>
                    {this.state.showChild ? <ul className="childs">
                        <li>Child1</li>
                        <li>Child2</li>
                        <li>Child3</li>
                    </ul> : null }
                </div>
                <Link className="user-login" to="/user-login">Login</Link>
                <button onClick={this.getData}>GetMovies</button>
            </div>
        )
    }
}

export default LoginComponent;