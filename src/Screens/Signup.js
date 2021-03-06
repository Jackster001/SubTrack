import React, { Component } from "react";
import { registerUser } from "../Action/authAction";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as routes from "../Routes/routes";
import Fade from "react-reveal";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      loading: false
    };
  }
  componentDidMount() {
    if (this.props.isAuthenticated) {
      this.setState({loading:false})
      this.props.history.push("/home");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.isAuthenticated) {
      this.props.history.push("/home");
    }
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };
  onSubmit = (event) => {
    event.preventDefault();
    const { firstName, lastName, email, password } = this.state;
    const userData = { firstName, lastName, email, password };
    this.setState({loading:true});
    this.props.registerUser(userData);
    this.setState({loading:false});
  };
  render() {
    return (
      <>
        {this.state.loading && (<div className="loaderContainer"><div className="loader"></div></div>)}
        <Fade top>
          <div className="signUpContainer">
            <div className="signupForm">
              <h2 className="SignUpTitle">Create an Account</h2>
              <form onSubmit={(e) => this.onSubmit(e)}>
                <br/>
                <input
                  type="firstName"
                  name="firstName"
                  placeholder="First Name"
                  onChange={this.handleInputChange}
                  required
                /><br/><br/>
                <input
                  type="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  onChange={this.handleInputChange}
                  required
                /><br/><br/>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={this.handleInputChange}
                  required
                /><br/><br/>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={this.handleInputChange}
                  required
                />
                <br/><br/>
                <center>
                  <button className="submitButton">Sign Up</button>
                </center>
              </form>
              <center>
                <br />
                <br />
                <p>
                  Already have an account? <Link to={routes.LOGIN}>Login</Link>
                </p>
              </center>
            </div>
          </div>
        </Fade>
        <Fade bottom>
          <img src="/undraw_ideas_flow_cy7b.svg" className="botLeftFlip" />
        </Fade>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.authState.isAuthenticated,
});

export default connect(mapStateToProps, { registerUser })(SignUp);
