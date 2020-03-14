import React, { Component } from "react";
import AddUserForm from "./components/AddUserForm";
import User from "./components/User";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }

  addUser = newUser => {
    this.setState({
      users: [...this.state.users, newUser]
    });
  };

  render() {
    const users = this.state.users.map((person, index) => {
      return (
        <User
          key={index}
          name={person.name}
          email={person.email}
          gen={person.gen}
        />
      );
    });

    return (
      <div className="App">
        <div className="form-container">
          <h1>ADD NEW USER</h1>
          <AddUserForm addNewUser={this.addUser} />
        </div>
        <div className="users-container">
          <h1>USERS:</h1>
          {users}
        </div>
      </div>
    );
  }
}

export default App;
