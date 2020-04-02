import React, { Component } from "react";
import { connect } from 'react-redux';
import { addUser, deleteUser } from './store/userActions';
import AddUserForm from "./components/AddUserForm";
import User from "./components/User";
import "./App.css";

class App extends Component {

  addUser = newUser => {
    this.props.addUser(newUser);
  };

  deleteUser = (user_id) => {
    this.props.deleteUser(user_id);
  }

  editUser = (user_id, updated_info) => {
    this.props.editUser(user_id, updated_info);
  }

  render() {
    const users = this.props.users.map((person) => {
      return (
        <User
          key={person.id}
          id={person.id}
          name={person.name}
          email={person.email}
          gen={person.gen}
          removeUser={this.deleteUser}
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
  addUser: addUser,
  deleteUser: deleteUser
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
