import React, { Component } from "react";
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
      ],
      name: "",
      email: "",
      gen: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state.name);
  };

  handleSubmit = e => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      gen: this.state.gen
    };
    this.setState({
      users: [...this.state.users, newUser],
      name: "",
      email: "",
      gen: ""
    });
  };

  render() {
    const users = this.state.users.map((person, index) => {
      return (
        <div key={index}>
          <h4>{person.name}</h4>
          <p>{person.email}</p>
          <p>{person.gen}</p>
        </div>
      );
    });

    return (
      <div className="App">
        <div className="form-container">
          <h1>ADD NEW USER</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="form-control">
              <label>Full name</label>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-control">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-control">
              <label>Gen</label>
              <input
                type="number"
                name="gen"
                value={this.state.gen}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <button type="submit">Save user</button>
            </div>
          </form>
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
