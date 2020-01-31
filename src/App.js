import React, { Component } from "react";

import "./css/maine.css";
import AdminPage from "./components/AdminPage";
import LoginForm from "./components/LoginForm";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";

class App extends Component {
  counter = 1006;
  state = {
    adminLogin: "admin",
    adminPaswword: "admin",
    loginStatus: false,
    editUser: false,
    changedUserId: "",
    usersWithActulaChang: "",
    userNumberInArray: "",

    editUserProperties: {
      id: "",
      name: "",
      surname: "",
      city: "",
      email: "",
      password: ""
    },

    users: [
      {
        id: 1000,
        name: "Jan",
        surname: "Kowlski",
        city: "Krakow",
        email: "jan.kowalski@gmail.com",
        password: ""
      },
      {
        id: 1002,
        name: "Karol",
        surname: "Krawczyk",
        city: "Warszawa",
        email: "karol.krawczyk@gmail.com",
        password: "ADA123"
      },
      {
        id: 1003,
        name: "Tadeusz",
        surname: "Norek",
        city: "Warszawa",
        email: "t.norek@gmail.com",
        password: "ADA123"
      },
      {
        id: 1004,
        name: "Halina",
        surname: "Norek",
        city: "Warszawa",
        email: "halinka.norek@gmail.com",
        password: "ADA123"
      },
      {
        id: 1005,
        name: "Cezary",
        surname: "Cezary",
        city: "Warszawa",
        email: "c.cezary@gmail.com",
        password: "1234"
      },
      {
        id: 1006,
        name: "Jan",
        surname: "Cezary",
        city: "Warszawa",
        email: "jan@gmail.com",
        password: "1234"
      }
    ]
  };

  // ----------------------------------------------------
  // ----------------------------------------------------
  // ----------------------------------------------------
  logiIn = (login, password) => {
    let checkIfTheLoginExistsInTheDatabase = this.state.users.find(user => {
      return user.email === login;
    });
    if (
      login === this.state.adminLogin &&
      password === this.state.adminPaswword
    ) {
      this.setState({
        loginStatus: true
      });
      return true;
    }
    if (checkIfTheLoginExistsInTheDatabase === undefined) {
      return alert("Błędne hasło lub login");
    }
    if (password === checkIfTheLoginExistsInTheDatabase.password) {
      return alert("Zalogowałeś się jako użytkownik");
    } else {
      alert("Błędne hasło lub login");
    }
  };
  logOut = () => {
    this.setState({
      loginStatus: false
    });
    console.log("Działa wyloguj");
  };

  deletUser = id => {
    const users = [...this.state.users];
    const index = users.findIndex(user => user.id === id);
    users.splice(index, 1);
    this.setState({
      users: users
    });
  };
  changeUser = id => {
    const findId = users => {
      return users.id === id;
    };
    const users = [...this.state.users];
    const userId = users.findIndex(findId);
    const changedUser = this.state.users[userId];

    this.setState({
      editUser: true,
      changedUserId: userId,
      editUserProperties: {
        id: changedUser.id,
        name: changedUser.name,
        surname: changedUser.surname,
        city: changedUser.city,
        email: changedUser.email,
        password: changedUser.password
      }
    });
  };
  cancelUserChange = () => {
    console.log(this.state.users[this.state.changedUserId]);
    this.setState({
      editUser: false
    });
  };
  addUser = (name, surname, city, email) => {
    const user = {
      id: this.counter,
      name: name, //wystarczy napisać raz name - zostawiam dla czytelności.
      surname: surname,
      city: city,
      email: email,
      password: ""
    };
    this.counter++;

    this.setState(prevState => ({
      users: [...prevState.users, user]
    }));
    return true;
  };
  // ----------------------------------------------------
  // ----------------------------------------------------
  // ----------------------------------------------------

  saveUserChanges = (id, name, surname, city, email, password) => {
    const findId = users => {
      return users.id === id;
    };
    let editUserProperties = {
      id: id, //wystarczy taki zapis "id" - przypisanie bedzie poprawne
      name: name,
      surname: surname,
      city: city,
      email: email,
      password: password
    };

    let users = [...this.state.users];
    const userNumberInArray = users.findIndex(findId);

    users.splice(userNumberInArray, 1, editUserProperties);

    console.log(users);
    this.setState({
      users: users,
      editUser: false
    });
  };

  // ----------------------------------------------------
  // ----------------------------------------------------
  // ----------------------------------------------------
  render() {
    let numberOfUsers = this.state.users.length;

    return (
      <>
        {this.state.loginStatus ? (
          <div>
            {this.state.editUser ? (
              <EditUser
                cancelUserChange={this.cancelUserChange}
                changedUser={this.state.editUserProperties}
                saveUserChanges={this.saveUserChanges}
              />
            ) : null}
            <AddUser addUser={this.addUser} user={this.user} />

            <AdminPage
              id={this.id}
              users={this.state.users}
              deletUser={this.deletUser}
              logOut={this.logOut}
              changeUser={this.changeUser}
              numberOfUsers={numberOfUsers}
            />
          </div>
        ) : (
          <LoginForm logiIn={this.logiIn} />
        )}
      </>
    );
  }
}

export default App;
