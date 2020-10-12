import React, { Component } from "react";
import EditSubModal from "./EditSubModal";
import EditSubModalButton from "./EditSubModalButton";
//import { CSSTransition } from "react-transition-group";

class EditModalContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editOpen: false,
    };
  }
  toggleModal = () => {
    this.setState({ editOpen: !this.state.editOpen });
  };
  render() {
    return (
      <div className="addHold">
        <EditSubModalButton toggleModal={this.toggleModal} />
        {this.state.editOpen && (
          <EditSubModal
            toggleModal={this.toggleModal}
            index={this.props.index}
          />
        )}
      </div>
    );
  }
}

export default EditModalContainer;
