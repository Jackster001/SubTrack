import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as routes from "../Routes/routes";
import { connect } from "react-redux";
import { logoutUser } from "../Action/authAction";
import Spin from "react-reveal/Spin";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigationType: "navigation",
      initials: "",
    };
  }
  componentDidMount() {
    console.log(this.props.isAuthenticated);
  }
  NonAuthBar() {
    return (
      <div className="navBar">
        <div className="navLogoContainer">
          <a className="logoLink" href="/">
            <h1 className="LogoText">SubTrack</h1>
          </a>
        </div>
        <div className="navULContainer">
          <ul className="navUL2">
            <li>
              <Link className="linkColor" to={routes.SIGNUP} style={{marginRight:`2vh`}}>
                Sign Up
              </Link>
            </li>
            <li>
              <Link className="linkColor" to={routes.LOGIN}>
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  AuthBar() {
    return (
      <div className="navBar">
        <div className="navLogoContainer">
          <a className="logoLink" href="/home">
            <h1 className="LogoText">SubTrack</h1>
          </a>
        </div>

        <div className="navULContainer">
          <ul className="navUL2">
            <li>
              <Link className="linkAccount" to={routes.ACCOUNT}>
                <img src="profileIcon.svg"/>
              </Link>
            </li>
            <Spin spy={this.props.loadingProfile}>
              <li>
                <Link className="linkAccount" to={routes.HOME}>
                  <img src="dashIcon.svg" />
                </Link>
              </li>
            </Spin>
          </ul>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div>
        {this.props.isAuthenticated ? this.AuthBar() : this.NonAuthBar()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.authState.isAuthenticated,
  profile: state.userState.profile,
  loadingProfile: state.userState.loadingProfile,
});

export default connect(mapStateToProps, { logoutUser })(Navigation);
