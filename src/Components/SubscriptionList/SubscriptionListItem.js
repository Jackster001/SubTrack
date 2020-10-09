import React, { Component, Fragment } from "react";
import RemoveSubButton from "./RemoveSubButton";
import EditModalContainer from '../EditModal/EditModalContainer';
//this component will also have the addSubscription and editSubscription buttons
class SubscriptionList extends Component {
  render() {
    if (this.props.sub) {
      return (
        <div className="listContain">
          <div className="subList">
            <img
              src={this.props.sub.iconUrl}
              className="listThumb"
              alt="companyicon"
            />
            <h3 className="subListHeader">{this.props.sub.title}</h3>
            <h4 className="subListPrice">${this.props.sub.price}</h4>
            <h4 className="subListDate">{this.props.sub.date}</h4>
          </div>
          <RemoveSubButton index={this.props.index} />
          <EditModalContainer index={this.props.index}/>
        </div>
      );
    }
    return [];
  }
}

export default SubscriptionList;
