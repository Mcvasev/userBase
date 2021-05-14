import React, { PureComponent } from "react";
import "./index.css";
import Users from "./Users";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { name: "Alex", age: 20, male: "male" },
        { name: "Eva", age: 30, male: "female" },
        { name: "Ivan", age: 31, male: "male" },
      ]
    };
  }
  handleDeleteUser = (user) => {
    const users = this.state.users.filter((item) => item.name !== user.name);
    this.setState({ users: users });
  };

  handleCreateUser = (user) => {
    // YOUR CODE HERE 2
    const users = [...this.state.users];
    users.push(user);
    this.setState({ users: users });
    console.log(user);
  };

  onClickFiltrMale = (e) => { 
    const users = this.state.users.filter((item) => item.male === "male");
    this.setState({ users: users });
  };

  onClickFiltrFemale = (e) => { 
    const users = this.state.users.filter((item) => item.male === "female");
    this.setState({ users: users });
  };

  onClickSearch1 = (arg) => { 
    // const users = this.state.users.filter((item) => item.male === "female");
    console.log("a")
    this.setState({ users: arg });
  };

  render() {
    console.log(this.state.users)
    return (
      <div className="app">
        <Users handleCreateUser={this.handleCreateUser} 
        onClickFiltrMale ={this.onClickFiltrMale}
        onClickFiltrFemale ={this.onClickFiltrFemale}
        onClickSearch1 ={this.onClickSearch1}
        arrUsersProps={this.state.users}/>
        {
        this.state.users.map(({ name, age, male }, idx) => (
          <div key={name} className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              
              <div className="card-text">
                <ul className="list-group">
                  <li className="list-group-item">Имя: {name}</li>
                  <hr />
                  <li className="list-group-item">age: {age}</li>
                  <hr />
                  <li className="list-group-item">пол: {male}</li>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => this.handleDeleteUser(this.state.users[idx])}>
                    Удалить пользователя
                  </button>
                  </ul>
              </div>
            </div>
          </div>
        ))
        }
      </div>
    );
  }
}

