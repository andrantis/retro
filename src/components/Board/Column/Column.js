import React, { Component } from "react";
import "./Column.css";

import Card from "./Card/Card";

export default class Column extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  handleClick() {
    alert('tay');
  }

  render() {
    return (
      <div className="column">
        <h2>{this.props.name}</h2>
        <div>
          {this.props.cards && this.props.cards.map((card,index) => {
            return <Card key={index} {...card} />
          })}
        </div>
        <button className="add-new-card" onClick={this.handleClick}>Add new card...</button>
      </div>
    );
  }
}
