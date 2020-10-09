import React, { Component } from "react";
import { updateSubscription } from "../../Action/profileAction";
import { disableUserProfileLoading } from "../../Action/profileAction";
import { connect } from "react-redux";

//Will return to the date later, maybe implement calendar library?
class AddSubModal extends Component {
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
    this.props.updateSubscription(this.props.profile.id, subData, this.props.index);
    this.setState({
      title: "",
      price: "",
      date: "",
    });
    this.props.toggleModal();
  }

  componentDidMount() {
    document.addEventListener("click", this.handleClickOutside, false);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClickOutside, false);
  }

  componentDidUpdate() {
    if (this.props.loadingProfile) {
      this.props.disableUserProfileLoading();
    }
  }

  handleClickOutside = (event) => {
    if (!this.modalRef.current.contains(event.target)) this.props.toggleModal();
  };

  handleClickClose = () => {
    this.props.toggleModal();
  };

  render() {
    return (
      <div className="subModal" ref={this.modalRef}>
        <h1>Edit a subscription.</h1>
        <button
          type="button"
          className="quitButton"
          onClick={this.handleClickClose}
        >
          X
        </button>
        <form onSubmit={(e) => this.onSubmit(e)}>
          <input
            type="title"
            name="title"
            placeholder="Name"
            onChange={this.handleInputChange}
            value={this.state.title}
            required
          />
          <input
            type="price"
            name="price"
            placeholder="Price"
            onChange={this.handleInputChange}
            value={this.state.price}
            required
          />
          <input
            type="date"
            name="date"
            placeholder="Date"
            onChange={this.handleInputChange}
            value={this.state.date}
            required
          />
          <button type="submit" className="submitModalButton">
            Change
          </button>
        </form>
      </div>
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
})(AddSubModal);
