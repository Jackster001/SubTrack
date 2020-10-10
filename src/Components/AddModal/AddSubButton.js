import React, { Component } from "react";

class AddSubButton extends Component {
  constructor(props) {
    super(props);
  }

  handleClickOpen = () => {
    this.props.toggleModal();
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClickOpen} className="addToggleButton">+</button>
      </div>
    );
  }
}

export default AddSubButton;
