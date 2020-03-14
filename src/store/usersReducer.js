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

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      const newUser = {
        name: action.payload.name,
        email: action.payload.email,
        gen: action.payload.gen
      };
      return { ...state, users: [...initialState, newUser] };
    default:
      return state;
  }
};

export default usersReducer;
