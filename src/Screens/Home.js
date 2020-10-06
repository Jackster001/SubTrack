import React, { Component } from 'react';
import {connect} from 'react-redux'; 
import {disableUserProfileLoading} from '../Action/authAction'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile:{}
    }
  }
  componentDidUpdate(){
    if(this.props.loadingProfile){
      this.props.disableUserProfileLoading()
      this.setState({...this.state, profile: this.props.profile})
    }
  }
  render() {
    return (
      <div>
        <h1>You are logged in!</h1>
      </div>
    );
  }
}
const mapStateToProps =(state) =>({
  loadingProfile: state.userState.loadingProfile,
  profile: state.userState.profile
})

export default connect(mapStateToProps,{disableUserProfileLoading})(Home);