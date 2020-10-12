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
      <Slide left>
        <div>
          <h1>Landing Page</h1>
        </div>
      </Slide>
    );
  }
}
const mapStateToProps = (state) => ({
  isAuthenticated: state.authState.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
