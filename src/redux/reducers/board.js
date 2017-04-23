const board = (state = {}, action) => {
  switch (action.type) {
    case "ADD_COLUMN":
      return {
        ...state,
        columns: [
          ...state.columns,
          { id: state.columns.length + 1, name: action.payload.name, cards: [] }
        ]
      };
    default:
      return state;
  }
};

export default board;
