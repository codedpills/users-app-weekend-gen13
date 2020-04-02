import { v4 as uuid } from 'uuid';

// Create our initial state (Similar to this.state)
const initialState = {
  users: [
    {
      id: 'ad323-dsksd-2323',
      name: "Ahmed Zaky",
      email: "ahmed@email.com",
      gen: 1
    },
    {
      id: '043sd-sdl34-sdlf34',
      name: "Kwesi Arthur",
      email: "kwesi@email.com",
      gen: 6
    },
    {
      id: 'df09fd-3443kjk-43lk3',
      name: "Kuame Uegine",
      email: "kuame@email.com",
      gen: 3
    },
    {
      id: 'sl43l-34lkj34-4klj54l',
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
        id: uuid(),
        name: action.payload.name,
        email: action.payload.email,
        gen: action.payload.gen
      };
      // We update the state with new user (This is similar to setState)
      return { ...state, users: [...state.users, newUser] };
    case "DELETE_USER":
      const filteredUsers = state.users.filter(
        user => action.payload !== user.id
      );
      return { ...state, users: filteredUsers };
    case "EDIT_USER":
      const editedUsers = state.users.map(user => {
        if (user.id === action.user_id) {
          return {...user, ...action.updated_info};
        } else {
          return user;
        }
      });
      return {...state, users: editedUsers}
    default:
      // If action matches none, return the old state
      return state;
  }
};

export default usersReducer;
