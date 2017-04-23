import React, { Component } from "react";
import "./Board.css";

import star from "../../assets/svg/ic_star_border_black_18px.svg";
// import Columns from "../../containers/Columns";

import Column from "./Column/Column";

export default class Board extends Component {
  // constructor(props) {
  //   super(props);
  // }

  // handleClickAdd = () =>
  //   this.setState(prevState => ({
  //     columns: [
  //       ...prevState.columns,
  //       { id: prevState.columns.length + 1, name: this.state.columnName } 
  //     ],
  //     columnName: ""
  //   }));

  // handleClickReset = () =>
  //   this.setState({
  //     columns: [{ id: 1, name: "todo" }, { id: 2, name: "doing" }]
  //   });

  // handleColumnNameChange = event => {
  //   this.setState({ columnName: event.target.value });
  // };

  render() {
    return (
      <div className="board">
        <div className="top-navigation">
          <input
            type="text"
            placeholder="column name"
            onChange={this.handleColumnNameChange}
          />
          <button type="button" onClick={this.props.onAddColumn}>
            Add column
          </button>
        </div>
        <div className="title">
          <img src={star} alt="star" />
          {this.props.name}
        </div>
        <div className="columns">
          {this.props.columns.map(c => {
            return <Column key={c.id} name={c.name} cards={c.cards} />;
          })}
        </div>        
      </div>
    );
  }
}
