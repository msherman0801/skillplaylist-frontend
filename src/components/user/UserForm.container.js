import React, { Component } from 'react'
import { connect } from 'react-redux'

import LoginForm from './login/LoginForm'
import RegisterForm from './register/RegisterForm'

class UserFormContainer extends Component {

    constructor() {
        super()
        this.state = {
            default: true
        }
    }

    toggleForm = () => {
        this.setState({
            default: !this.state.default
        })
    }

    render() {
        return (
            <div>
                <button onClick={() => this.toggleForm()}>Switch to {this.state.default ? "Registration" : "Login"}</button>
                {this.state.default ? <LoginForm /> : <RegisterForm />}
            </div>
        )
    }

};

export default UserFormContainer;