import React, { Component } from "react";
import { connect } from "react-redux";
import {
  removeSubscription,
} from "../../Action/profileAction";

class RemoveSubButton extends Component {
  handleRemove = () => {
    this.props.removeSubscription(this.props.profile.id, this.props.index);
  };

  render() {
    return (
      <button type="button" className="removeButton" onClick={this.handleRemove}>
        X
      </button>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.userState.profile,
  loadingProfile: state.userState.loadingProfile,
});

export default connect(mapStateToProps, {
  removeSubscription,
})(RemoveSubButton);
