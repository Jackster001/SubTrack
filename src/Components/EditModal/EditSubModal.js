import React, { Component } from "react";
import { updateSubscription } from "../../Action/profileAction";
import { disableUserProfileLoading } from "../../Action/profileAction";
import { connect } from "react-redux";
import Slide from "react-reveal";
//Will return to the date later, maybe implement calendar library?
class EditSubModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      price: "",
      date: "",
    };
    this.modalRef = React.createRef();
  }

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };

  onSubmit(event) {
    event.preventDefault();
    const subData = {
      title: this.state.title,
      price: this.state.price,
      date: this.state.date,
    };
    this.props.updateSubscription(
      this.props.profile._id,
      subData,
      this.props.index
    );
    this.setState({
      title: "",
      price: "",
      date: "",
    });
    this.props.toggleModal();
  }

  componentDidUpdate() {
    if (this.props.loadingProfile) {
      this.props.disableUserProfileLoading();
    }
  }

  handleClickClose = () => {
    this.props.toggleModal();
  };

  render() {
    return (
      <Slide right>
        <div className="editSubModal" ref={this.modalRef}>
          <div className="editSubModalInner">
            <div className="seperateRow">
                <button
                  type="button"
                  className="quitButton"
                  onClick={this.handleClickClose}
                >
                  X
                </button>
            </div>
            <h1>Edit a subscription.</h1>
            <form onSubmit={(e) => this.onSubmit(e)}>
              <input
                type="title"
                name="title"
                placeholder="Name"
                onChange={this.handleInputChange}
                value={this.state.title}
                required
              /><br/><br/>
              <input
                type="price"
                name="price"
                placeholder="Price"
                onChange={this.handleInputChange}
                value={this.state.price}
                required
              /><br/><br/>
              <input
                type="date"
                name="date"
                placeholder="mm/dd/yyyy"
                onChange={this.handleInputChange}
                value={this.state.date}
                pattern="(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d"
                required
              /><br/><br/>
              <center>
                <button type="submit" className="submitModalButton">
                  Change
                </button>
              </center>
            </form>
            </div>
        </div>
      </Slide>
    );
  }
}

const mapStateToProps = (state) => ({
  loadingProfile: state.userState.loadingProfile,
  profile: state.userState.profile,
});

export default connect(mapStateToProps, {
  updateSubscription,
  disableUserProfileLoading,
})(EditSubModal);
