import React, { Component } from "react";
import { connect } from "react-redux";
import { Slide, Fade } from "react-reveal";

class Landing extends Component {
  componentDidMount() {
    if (this.props.isAuthenticated) {
      this.props.history.push("/home");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.isAuthenticated) {
      this.props.history.push("/home");
    }
  }
  render() {
    return (
      <div style={{ marginLeft: `10vh`, marginTop: `10vh` }}>
        <Fade left>
          <h1 style={{ fontSize: `3rem` }}>
            We keep track, so you don't have to.
          </h1>
          <p style={{ fontSize: `1.5rem` }}>
            {" "}
            Subscription services amass everyday for the average user. Now, you
            can stay updated from one email inbox.
            <br />
          </p>
          <p style={{ fontSize: `1.5rem`, marginTop: `40vh`, bottom: `0` }}>
            <br /> Don't miss recurring payments: stay on track, with SubTrack.
          </p>
        </Fade>
        <Fade bottom>
          <img src="/homefiles.svg" className="botRight" />
        </Fade>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  isAuthenticated: state.authState.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
