import React, { Component, Fragment } from "react";
import AddSubModal from "./AddSubModal";
import AddSubButton from "./AddSubButton";

class AddModalContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addOpen: false,
    };
  }
  toggleModal = () => {
    this.setState({ addOpen: !this.state.addOpen });
  };
  render() {
    return (
      <Fragment>
        <AddSubButton toggleModal={this.toggleModal} />
        {this.state.addOpen && <AddSubModal toggleModal={this.toggleModal} />}
      </Fragment>
    );
  }
}

export default AddModalContainer;
