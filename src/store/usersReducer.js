// Create our initial state (Similar to this.state)
const initialState = {
  users: [
    {
      name: "Ahmed Zaky",
      email: "ahmed@email.com",
      gen: 1
    },
    {
      name: "Kwesi Arthur",
      email: "kwesi@email.com",
      gen: 6
    },
    {
      name: "Kuame Uegine",
      email: "kuame@email.com",
      gen: 3
    },
    {
      name: "King Promise",
      email: "king@email.com",
      gen: 3
    }
  ]
};

// We're creating our reducer function here
const usersReducer = (state = initialState, action) => {
  /* Evaluate the actions that are coming in and do
   certain things based on those actions */
  switch (action.type) {
    case "ADD_USER":
      // We create our new user object
      const newUser = {
        name: action.payload.name,
        email: action.payload.email,
        gen: action.payload.gen
      };
      // We update the state with new user (This is similar to setState)
      return { ...state, users: [...initialState, newUser] };
    default:
      // If action matches none, return the old state
      return state;
  }
};

export default usersReducer;
