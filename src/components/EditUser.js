import React, { Component } from "react";

class EditUser extends Component {
  componentDidMount() {
    this.setState({
      id: this.props.changedUser.id,
      name: this.props.changedUser.name,
      surname: this.props.changedUser.surname,
      city: this.props.changedUser.city,
      email: this.props.changedUser.email,
      password: this.props.changedUser.password
    });
  }

  state = {
    id: 1000,
    name: "",
    surname: "",
    city: "",
    email: "",
    password: ""
  };

  handleText = e => {
    const target = e.target;
    const name = target.name;
    this.setState({
      [name]: e.target.value
    });
  };

  passwordGenerator = () => {
    console.log("działa");
    let userPasword = "";
    const passwordLength = 6;
    const avaliblechar =
      "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890";
    for (let i = 0; i <= passwordLength; i++) {
      userPasword =
        userPasword +
        avaliblechar.charAt(
          Math.floor(Math.random() * Math.floor(avaliblechar.length - 1))
        );
    }
    this.setState({
      password: userPasword
    });
  };

  handleClickSave = () => {
    const { id, name, surname, city, email, password } = this.state;
    this.props.saveUserChanges(id, name, surname, city, email, password);
  };

  render() {
    return (
      <>
        <div>
          <div className="sticky-top col align-self-center container card text-center">
            <div className="card-header">
              <h5 className="card-title text-left">
                Edytujesz użytkownika numer: {this.state.id}
              </h5>
            </div>
            <div className="card-body">
              <div className=" d-flex flex-column bd-highlight mb-4 card-body ">
                <p className="inputsEditingUser">imie</p>
                <input
                  name="name"
                  defaultValue={this.state.name}
                  onChange={this.handleText}
                  className="mx-auto d-flex flex-row col-3 form-control m-2"
                  type="text"
                  placeholder="Imie"
                ></input>
                <p className="inputsEditingUser">nazwisko</p>
                <input
                  name="surname"
                  onChange={this.handleText}
                  defaultValue={this.state.surname}
                  className="mx-auto d-flex flex-row col-3 form-control m-2"
                  type="text"
                  placeholder="Nazwisko"
                ></input>
                <p className="inputsEditingUser">miasto</p>
                <input
                  name="city"
                  onChange={this.handleText}
                  defaultValue={this.state.city}
                  className="mx-auto d-flex flex-row col-3 form-control m-2"
                  type="text"
                  placeholder="Miasto"
                ></input>
                <p className="inputsEditingUser">e-mail</p>
                <input
                  name="email"
                  onChange={this.handleText}
                  defaultValue={this.state.email}
                  className="mx-auto d-flex flex-row col-3 form-control m-2"
                  type="text"
                  placeholder="E-mail"
                ></input>
                <p className="inputsEditingUser">hasło</p>
                <input
                  name="password"
                  onChange={this.handleText}
                  defaultValue={this.state.password}
                  className="mx-auto d-flex flex-row col-3 form-control m-2"
                  type="text"
                  placeholder="Hasło"
                ></input>
              </div>

              <a
                onClick={this.props.cancelUserChange}
                href="#"
                className="m-3 btn btn-outline-warning"
              >
                Anuluj edycje
              </a>

              <a
                onClick={this.passwordGenerator}
                href="#"
                className="m-3 btn btn-outline-primary"
              >
                Generuj hasło
              </a>
              <a
                onClick={this.handleClickSave}
                href="#"
                className="m-3 btn btn btn-outline-success"
              >
                Zapisz zmiany
              </a>
            </div>
            <div className="card-footer text-muted"></div>
          </div>
        </div>
      </>
    );
  }
}

export default EditUser;
