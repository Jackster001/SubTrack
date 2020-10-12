import React, { Component } from "react";
import { connect } from "react-redux";
import {
    toggleEmail,
} from "../../Action/profileAction";

class EmailButton extends Component {
    handleEmail = () =>{
        this.props.toggleEmail(this.props.profile.id, this.props.index);
    }
    render() {
        return (
          <button type="button" className="removeButton" onClick={this.handleEmail}>
            <img src={`mail${this.props.profile.subscriptions[this.props.index].email}.svg`} style={{height:`4vh`, width:`4vh`}}/>
          </button>
        );
      }
};
const mapStateToProps = (state) => ({
    profile: state.userState.profile,
  });

export default connect(mapStateToProps,{toggleEmail})(EmailButton);