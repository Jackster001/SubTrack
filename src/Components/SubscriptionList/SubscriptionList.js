import React, { Component } from "react";
import { disableUserProfileLoading } from "../../Action/authAction";
import { connect } from "react-redux";
import SubscriptionListItem from "./SubscriptionListItem";

class SubscriptionList extends Component {
  //include AddSubButton and RemoveSubButton
  displaySubs = (subs) => {
    if (!subs) return [];
    return subs.map((sub, index) => {
      return <SubscriptionListItem sub={sub} index={index} key={index} />;
    });
  };

  componentDidUpdate() {
    if (this.props.loadingProfile) {
      this.props.disableUserProfileLoading();
    }
  }

  render() {
    return <div className="listHold">{this.displaySubs(this.props.subs)}</div>;
  }
}

const mapStateToProps = (state) => ({
  subs: state.userState.profile.subscriptions,
  loadingProfile: state.userState.loadingProfile,
});

export default connect(mapStateToProps, {
  disableUserProfileLoading,
})(SubscriptionList);
