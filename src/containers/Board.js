import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addColumn } from "../redux/actions";

import Board from "../components/Board/Board";

class BoardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnName: ""
    };
  }

  handleClickAddColumn = () => this.props.addColumn(this.state.columnName);

  handleClickAddCard = () => this.props.addColumn(this.state.columnName);

  handleColumnNameChange = event => {
    this.setState({ columnName: event.target.value });
  };

  render() {
    return (
      <Board
        name={this.props.board.name}
        onAddColumn={this.handleClickAddColumn}
        columns={this.props.columns}

      />
    );
  }
}

function mapStateToProps(state) {
  return {
    board: state.board,
    columns: state.board.columns
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ addColumn }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(BoardContainer);
