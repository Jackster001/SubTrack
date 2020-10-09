import React, { Component } from "react";
import { disableUserProfileLoading } from "../../Action/authAction";
import { connect } from "react-redux";
import SubscriptionListItem from "./SubscriptionListItem";

class SubscriptionList extends Component {
  constructor(props) {
    super(props);
  }

  //include AddSubButton and RemoveSubButton
  displaySubs = (subs) => {
    if (!subs) return [];
    return subs.map((sub, index) => {
      return <SubscriptionListItem sub={sub} index={index} key={sub.title}/>;
    });
  };

  componentDidUpdate() {
    if (this.props.loadingProfile) {
      this.props.disableUserProfileLoading();
    }
  }
  //
  render() {
    return (
      <div className="listHold">{this.displaySubs(this.props.profile.subscriptions)}</div>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.userState.profile,
  loadingProfile: state.userState.loadingProfile,
});

export default connect(mapStateToProps, {
  disableUserProfileLoading,
})(SubscriptionList);
