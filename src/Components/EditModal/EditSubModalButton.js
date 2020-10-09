import React, { Component } from "react";

class EditSubModalButton extends Component {
  constructor(props) {
    super(props);
  }

  handleClickOpen = () => {
    this.props.toggleModal();
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClickOpen} className="removeButton">
          Edit
        </button>
      </div>
    );
  }
}

export default EditSubModalButton;
