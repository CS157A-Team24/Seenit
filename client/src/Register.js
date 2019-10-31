import React, { Component } from 'react'
import { register } from './UserFunctions.js'
import { Link, Redirect} from 'react-router-dom';
import {Style} from './Style';

class Register extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            email: '',
            password: '',
            errors: {}
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()

        const newUser = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }

        register(newUser).then(res => {
            this.props.history.push(`/login`)
        })
    }

    render() {
        return (
            <Style>
            <div className="container">
                <div className="box">
                    <h1 class="center">REGISTER</h1>
                        <form noValidate onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Username</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="username"
                                    placeholder="Enter username"
                                    value={this.state.username}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    placeholder="Enter email"
                                    value={this.state.email}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div>
                            <button
                                type="submit"
                                className="btn btn-lg btn-primary btn-block">
                                Sign up!
                            </button>
                            </div>
                            <div>
                                <span className="signup-link">Already have an account yet? <Link to="/login">Log in!</Link></span>
                            </div>  
                        </form>
                    </div>
            </div>
            </Style>
        )
    }
}

export default Register
