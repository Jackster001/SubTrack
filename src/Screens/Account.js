import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../Action/authAction";
import Fade from "react-reveal";
class Account extends Component {
  render() {
    return (
      <div style={{ height: `100%` }}>
        <Fade top>
          <center>
            <h1>My Account</h1>
          </center>
          <div className="ProfileContainer">
            <h3>Name:</h3>
            {this.props.profile.firstName}
            {this.props.profile.lastName}
            <h3>Email: </h3>
            {this.props.profile.email}
            <br />
            <br />
            <br />
            <center>
              <button
                className="submitModalButton"
                style={{ margin: `auto` }}
                onClick={() => this.props.logoutUser()}
              >
                Sign Out
              </button>
            </center>
          </div>
        </Fade>
        <Fade bottom>
          <img src="/undraw_Credit_card_re_blml.svg" className="botLeft" />
        </Fade>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  isAuthenticated: state.authState.isAuthenticated,
  profile: state.userState.profile,
});

export default connect(mapStateToProps, { logoutUser })(Account);
