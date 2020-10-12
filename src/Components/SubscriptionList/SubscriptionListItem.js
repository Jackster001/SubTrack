import React, { Component } from "react";
import RemoveSubButton from "./RemoveSubButton";
import EditModalContainer from "../EditModal/EditModalContainer";
import EmailButton from './EmailButton';
import Fade from 'react-reveal';
import { get } from "mongoose";

//this component will also have the addSubscription and editSubscription buttons
class SubscriptionList extends Component {
  render() {
    if (this.props.sub) {
      return (
        <div>
        <Fade top>
          <div className="listContain">
            <div className="subList">
              <img
                src={`${this.props.sub.title}-icon.png`}
                className="listThumb"
                alt="companyicon"
              />
              <div className="textHold">
              <div className="namePrice">
              <h3 className="subListHeader">{this.props.sub.title}</h3>
              <h4 className="subListPrice">${this.props.sub.price}</h4>
              </div>
              <div className="dateHold">
              <h4 className="subListRemain">Days Remaining: {this.props.sub.remain}</h4>
              <br/>
              <h4 className="subListDate">{this.props.sub.date}</h4>
              </div>
              </div>
            </div>
            <RemoveSubButton index={this.props.index} />
            <EmailButton index={this.props.index}/>
            <EditModalContainer index={this.props.index} />
          </div>
          </Fade>
          </div>
      );
    }
    return [];
  }
}

export default SubscriptionList;
