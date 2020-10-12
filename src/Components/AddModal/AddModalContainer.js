import React, { Component } from "react";
import AddSubModal from "./AddSubModal";
import AddSubButton from "./AddSubButton";
//import { CSSTransition } from "react-transition-group";

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
      <div className="addHold">
        <AddSubButton toggleModal={this.toggleModal} />
        {this.state.addOpen && (
            <AddSubModal toggleModal={this.toggleModal} onClick={()=>this.props.onClick}/>
        )}
      </div>
    );
  }
}

export default AddModalContainer;
