import React, { Component } from "react";
import "./Board.css";

import star from "../../assets/svg/ic_star_border_black_18px.svg";
import Column from "./../Column/Column";

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          id: 1,
          name: "Backlog",
          cards: [
            {
              id: 1,
              text: "As a user I want to create new account and delete blog posts.",
              votes: 1
            },
            { id: 2, text: "As a user I want to create my personal account.", votes: 5 },
            { id: 4, text: "As a user I want to delete my personal account.", votes: 5 }
          ]
        },
        {
          id: 2,
          name: "DESIGN SPRINT#7",
          cards: [
            { id: 1, text: "Design for the landing page", votes: 1 },
            { id: 2, text: "Design for the My Account section", votes: 1 },
            { id: 3, text: "iOS Mobile App - Account Page", votes: 1, dragging: true },
            { id: 4, text: "Android App - Account Page", votes: 1 },
            { id: 5, text: "Dashboard Screen", votes: 1 }
          ]
        },
        {
          id: 3,
          name: "DEV SPRINT #13",
          cards: [
            { id: 1, text: "As an user I want to be able to create new post from My Dashboard", votes: 1 },
            { id: 2, text: "As an administrator I want to be able to manage my users", votes: 1, dragging: true },
            { id: 3, text: "As a registered User I want to be able to connect with other potential clientes", votes: 1 },
            { id: 4, text: "Test ticket", votes: 1 }
          ]
        },
        {
          id: 4,
          name: "Accepted",
          cards: [
            { id: 1, text: "As an user I want to be able to send a message", votes: 1 },
            { id: 2, text: "As an administrator I want to be able to login, create new account, delete account or merge few accounts togheter.", votes: 1 },
            { id: 3, text: "As an administrator I want to be able to manage all incoming expenses in Administrator Dashboar", votes: 1},
            { id: 4, text: "As an administrator I want to be able to delete all my created content by one click.", votes: 1}
          ]
        }
      ],
      columnName: ""
    };
  }

  handleClickAdd = () =>
    this.setState(prevState => ({
      columns: [
        ...prevState.columns,
        { id: prevState.columns.length + 1, name: this.state.columnName } 
      ],
      columnName: ""
    }));

  handleClickReset = () =>
    this.setState({
      columns: [{ id: 1, name: "todo" }, { id: 2, name: "doing" }]
    });

  handleColumnNameChange = event => {
    this.setState({ columnName: event.target.value });
  };

  render() {
    return (
      <div className="board">
        <div className="top-navigation">
          <input
            type="text"
            placeholder="column name"
            onChange={this.handleColumnNameChange}
          />
          <button type="button" onClick={this.handleClickAdd}>
            Add column
          </button>
          <button type="button" onClick={this.handleClickReset}>Reset</button>
        </div>
        <div className="title">
          <img src={star} alt="star" />
          Team Stormer Beta development - first phase
        </div>
        <div className="columns">
          {this.state.columns.map(c => {
            return <Column key={c.id} name={c.name} cards={c.cards} />;
          })}
        </div>
      </div>
    );
  }
}
