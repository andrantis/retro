const initialState = {
columns: []
};

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("retro");
    if (serializedState === null) {
      return initialState;
    }

    return JSON.parse(serializedState);
  } catch (err) {
    return initialState;
  }
};

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("retro", serializedState);
  } catch (err) {
    console.error("Failed to save to localStorage");
  }
};
