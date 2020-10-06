import React, { Component } from 'react';
import {connect} from 'react-redux';

class Landing extends Component {
    componentDidMount() {
        if (this.props.isAuthenticated) {
          this.props.history.push('/home');
        }
      }
    componentWillReceiveProps(nextProps) {
        if (nextProps.isAuthenticated) {
          this.props.history.push('/home');
        }
    }
    render() {
        return (
        <div>
          <h1>Landing Page</h1>
        </div>
        );
    }
}
const mapStateToProps =(state) =>({
    isAuthenticated: state.authState.isAuthenticated
})

export default connect(mapStateToProps)(Landing);