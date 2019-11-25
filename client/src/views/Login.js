import React, { Component } from "react";
import { login } from './UserFunctions';
import { Link} from 'react-router-dom';
import {Style} from './Style';

class Login extends Component {
    constructor() {
        super()
         this.state = {
             username: '',
             password: '',
             errors: {}
         }

        this.handleChange = this.handleChange.bind(this)
         this.handleSubmit = this.handleSubmit.bind(this)
     }

     handleChange(e) {
         this.setState({ [e.target.name]: e.target.value })
     }
     handleSubmit(e) {
         e.preventDefault()

         const user = {
             username: this.state.username,
             password: this.state.password
         }

         login(user).then(res => {
            this.props.history.push(`/login`)
         })
     }
    
     render() {
         return ( 
             <Style>
             <div className="container">                
                 <div className="box">   
                     <h1 class="center">LOGIN</h1>      
                     <form noValidate onSubmit={this.handleSubmit}>     
                         <div className="form-group">
                             <label htmlFor="username">Username</label>
                                 <input
                                     type="text"
                                     className="form-control"
                                     name="username"
                                     placeholder="Enter username"
                                     value={this.state.username}
                                     onChange={this.handleChange}/>
                         </div>
                         <div className="form-group">
                             <label htmlFor="password">Password</label>
                                 <input
                                     type="password"
                                     className="form control"
                                     name="password"
                                     placeholder="Enter password"
                                     value={this.state.password}
                                     onChange={this.handleChange}/>
                         </div>
                         <div>
                             <button
                                 type="submit"
                                 className="btn btn-lg btn-primary btn-block">
                                 Log in!
                             </button>
                         </div>
                         <div>
                             <span className="signup-link">Don't have an account yet? <Link to="/register">Sign up!</Link></span>
                         </div> 
    
                     </form>                        
                 </div>              
             </div>
             </Style> 
         )
     }
}
export default Login
