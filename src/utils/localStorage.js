const initialState = {
  board: {
    name: "Team Stormer Beta development - first phase LOCAL",
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
          {
            id: 2,
            text: "As a user I want to create my personal account.",
            votes: 5
          },
          {
            id: 4,
            text: "As a user I want to delete my personal account.",
            votes: 5
          }
        ]
      },
      {
        id: 2,
        name: "DESIGN SPRINT#7",
        cards: [
          { id: 1, text: "Design for the landing page", votes: 1 },
          { id: 2, text: "Design for the My Account section", votes: 1 },
          {
            id: 3,
            text: "iOS Mobile App - Account Page",
            votes: 1,
            dragging: true
          },
          { id: 4, text: "Android App - Account Page", votes: 1 },
          { id: 5, text: "Dashboard Screen", votes: 1 }
        ]
      },
      {
        id: 3,
        name: "DEV SPRINT #13",
        cards: [
          {
            id: 1,
            text: "As an user I want to be able to create new post from My Dashboard",
            votes: 1
          },
          {
            id: 2,
            text: "As an administrator I want to be able to manage my users",
            votes: 1,
            dragging: true
          },
          {
            id: 3,
            text: "As a registered User I want to be able to connect with other potential clientes",
            votes: 1
          },
          { id: 4, text: "Test ticket", votes: 1 }
        ]
      },
      {
        id: 4,
        name: "Accepted",
        cards: [
          {
            id: 1,
            text: "As an user I want to be able to send a message",
            votes: 1
          },
          {
            id: 2,
            text: "As an administrator I want to be able to login, create new account, delete account or merge few accounts togheter.",
            votes: 1
          },
          {
            id: 3,
            text: "As an administrator I want to be able to manage all incoming expenses in Administrator Dashboar",
            votes: 1
          },
          {
            id: 4,
            text: "As an administrator I want to be able to delete all my created content by one click.",
            votes: 1
          }
        ]
      }
    ]
  }
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
