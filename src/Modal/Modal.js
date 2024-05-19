import "./Modal.css";
import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    return (
      <div className="body">
        <div className="modalForm">
          <div className="modalContainer">
            <p className="title">{this.props.message}</p>
            <div className="spacer"></div>
          </div>
          <ul className="cd-buttons">
            <a href="#0" className="yesButton">
              Yes
            </a>

            <a href="#0" className="noButton">
              No
            </a>
          </ul>
        </div>
      </div>
    );
  }
}
