import React, { Component } from "react";
import { getAllSubscriptions } from "../../Action/profileAction";
import { disableUserProfileLoading } from "../../Action/authAction";
import { connect } from "react-redux";
import SubscriptionListItem from "./SubscriptionListItem";

class SubscriptionList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exSubs: [{ title: "Netflix", price: "14.99", date: "12/03/20" }],
    };
  }

  //include AddSubButton and RemoveSubButton
  displaySubs = (subs) => {
    console.log(subs);
    if (!subs) return [];
    return (subs.map((sub, index) => {
      console.log("in one sub");
      return (
          <SubscriptionListItem sub={sub} index={index} />
      );
    }))
  };

  componentDidMount() {
    this.props.getAllSubscriptions(this.props.profile.id);
  }

  componentDidUpdate() {
    if (this.props.loadingProfile) {
      this.props.disableUserProfileLoading();
    }
  }

  render() {
    return <div className="listHold">{this.displaySubs(this.state.exSubs)}</div>;
  }
}

const mapStateToProps = (state) => ({
  profile: state.userState.profile,
  loadingProfile: state.userState.loadingProfile,
});

export default connect(mapStateToProps, {
  getAllSubscriptions,
  disableUserProfileLoading,
})(SubscriptionList);
