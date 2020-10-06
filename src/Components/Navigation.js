import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import * as routes from '../Routes/routes';
import { connect } from 'react-redux';
import { logoutUser } from '../Action/authAction';

class Navigation extends Component{
    constructor(props){
        super(props)
        this.state={
            navigationType:"navigation",
            initials:""
        }
    }
    componentDidMount(){
        console.log(this.props.isAuthenticated)
    }
    NonAuthBar(){
        return(
            <div className="navBar">
                <div className="navLogoContainer">
                    <a className="logoLink" href="/"><h1 className="LogoText">App</h1></a>
                </div>
                <div className="navULContainer">
                    <ul className="navUL2">
                        <li><Link className="linkColor" to={routes.SIGNUP}>Sign Up</Link></li>
                        <li><Link className="linkColor" to={routes.LOGIN}>Sign In</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
    AuthBar(){
        return(
            <div className="navBar">
                <div className="navLogoContainer">
                    <a className="logoLink" href="/home"><h1 className="LogoText">App</h1></a>
                </div>

                <div className="navULContainer">
                    <ul className="navUL2">
                        <li><Link className="linkColor" to={routes.HOME}>Home</Link></li>
                        <li>
                            <Link className="linkAccount" to={routes.ACCOUNT}>Account</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
    render(){
        return (
            <div>
                {this.props.isAuthenticated ? this.AuthBar() : this.NonAuthBar()}
            </div>
        )
    }
}


const mapStateToProps =(state) =>({
    isAuthenticated: state.authState.isAuthenticated,
    profile: state.userState.profile
})
  
export default connect(mapStateToProps, {logoutUser})(Navigation);