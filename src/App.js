import React, { Component } from "react";
import { connect } from 'react-redux';
import { addUser } from './store/userActions';
import AddUserForm from "./components/AddUserForm";
import User from "./components/User";
import "./App.css";

class App extends Component {

  addUser = newUser => {
    this.props.addUser(newUser);
  };

  render() {
    const users = this.props.users.map((person, index) => {
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

const mapStateToProps = (state) => ({
  users: state.users
});

const mapDispatchToProps = {
  addUser: addUser
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
