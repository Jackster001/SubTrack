import React, { Component } from "react";
import { connect } from "react-redux";
import CompareChart from "./CompareChart";

class GlanceHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
    };
  }
  getTotal = (subs) => {
    if (!subs.length < 2) return 0;
    let sum = subs.reduce((a, b) => a.price + b.price);
    return sum;
  };
  handleClose = () => {
    this.setState({ isOpen: false });
  };
  render() {
    if (this.state.isOpen)
      return (
        <div className="glanceContain">
          <div className="sideText">
            <h1>At a Glance</h1>
            <h2 className="total">
              Monthly Total: ${this.getTotal(this.props.subs)}
            </h2>
            <p>You are paying [AMOUNT] more than last month.</p>
          </div>
          <CompareChart />
          <button
            type="button"
            className="removeButton"
            onClick={this.handleClose}
          >
            X
          </button>
        </div>
      );
    return [];
  }
}
const mapStateToProps = (state) => ({
  subs: state.userState.profile.subscriptions,
});

export default connect(mapStateToProps)(GlanceHeader);
