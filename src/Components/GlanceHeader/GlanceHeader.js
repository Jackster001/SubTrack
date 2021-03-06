import React, { Component } from "react";
import { connect } from "react-redux";
import CompareChart from "./CompareChart";
import Fade from 'react-reveal';

class GlanceHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
    };
  }
  getTotal = (subs) => {
    if (subs.length < 1) {
      return 0;
    }
    //fastest total for JS - rounds up
    let sum = 0;
    for (var i = subs.length; i--; ) {
      if (subs[i]) sum += Math.ceil(parseFloat(subs[i].price));
    }
    return sum;
  };
  handleClose = () => {
    this.setState({ isOpen: false });
  };
  render() {
    if (this.state.isOpen)
      return (
          <Fade top>
          {this.props.subs[0] ?
        <div className="glanceContain">
          <div className="sideText">
            <h1>At a Glance</h1>
            <h2 className="total">
              Monthly Total: ${this.getTotal(this.props.subs)}
            </h2>
            <p>Keep it up! Add more subscriptions and see your summary.</p>
          </div>
          <CompareChart />
          <button
            type="button"
            className="removeChartButton"
            onClick={this.handleClose}
          >
            X
          </button>
        </div>
        : 
        <div className="glanceContain" style={{height:`10vh`,}}>
       <h1 style={{flexGrow:`1`}}>
           You have no subscriptions yet. Let's get started.
       </h1>
       <button
            type="button"
            className="removeChartButton"
            style={{marginTop:`auto`,}}
            onClick={this.handleClose}
          >
            X
          </button>
       </div>
          }
          </Fade>
      )
      return [];
  }
}
const mapStateToProps = (state) => ({
  subs: state.userState.profile.subscriptions,
});

export default connect(mapStateToProps)(GlanceHeader);
