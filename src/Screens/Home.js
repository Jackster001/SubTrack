
import React, { Component } from "react";
import { connect } from "react-redux";
import { disableUserProfileLoading } from "../Action/authAction";
import AddModalContainer from "../Components/AddModal/AddModalContainer";
import SubscriptionList from '../Components/SubscriptionList/SubscriptionList';
import GlanceHeader from "../Components/GlanceHeader/GlanceHeader";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {},
      loading:false
    };
  }
  componentDidUpdate() {
    if (this.props.loadingProfile) {
      this.props.disableUserProfileLoading();
      this.setState({ ...this.state, profile: this.props.profile, loading:false });
    }
  }
  turnOnLoading(){
    this.setState({loading:true})
  }
  render() {
    return (
      <div>
        {this.state.loading && (<div className="loaderContainer"><div className="loader"></div></div>)}
        <GlanceHeader/>
        <SubscriptionList/>
        <AddModalContainer onClick={()=>this.turnOnLoading()}/>
        <br/>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  loadingProfile: state.userState.loadingProfile,
  profile: state.userState.profile,
});

export default connect(mapStateToProps, { disableUserProfileLoading })(Home);
