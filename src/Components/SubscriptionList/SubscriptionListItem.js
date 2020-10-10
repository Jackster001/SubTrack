import React, { Component, Fragment } from "react";
import RemoveSubButton from "./RemoveSubButton";
import EditModalContainer from "../EditModal/EditModalContainer";
import Fade from 'react-reveal';
import { get } from "mongoose";

//this component will also have the addSubscription and editSubscription buttons
class SubscriptionList extends Component {
  //Gets the 
  getDays() {
    let current = new Date();
    let subDay = ((this.props.sub.date).split("/"));
    let subDate = new Date(subDay[2],subDay[0],subDay[1]);
    console.log(subDate, current);
    let daysPassed = Math.abs(Math.floor(current - subDate));
    console.log("subtracted" + daysPassed)
    return Math.trunc(daysPassed/ (60*60*24*1000));
  }

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
              <h4 className="subListRemain">Days Remaining: {this.getDays()}</h4>
              <br/>
              <h4 className="subListDate">{this.props.sub.date}</h4>
              </div>
              </div>
            </div>
            <RemoveSubButton index={this.props.index} />
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
