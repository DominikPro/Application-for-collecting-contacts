import React, { Component } from "react";

class AddUser extends Component {
  state = {
    name: "",
    surname: "",
    city: "",
    email: "",
    password: ""
  };

  //opisac i zrobić notatke z dzialania handletext przechytywania kilku wartosci jednego inputa
  handleText = e => {
    const target = e.target;
    const name = target.name;
    this.setState({
      [name]: e.target.value
    });
  };

  handleClick = () => {
    const { name, surname, city, email } = this.state;
    if (
      name.length > 2 &&
      surname.length > 2 &&
      city.length > 2 &&
      email.length > 2
    ) {
      const added = this.props.addUser(name, surname, city, email);
      if (added) {
        this.setState({
          name: "",
          surname: "",
          city: "",
          email: "",
          password: ""
        });
      }
    } else {
      alert(
        "============>Błąd w polu formularza<============ Sprawdź czy wszystkie pola są uzupełnione poprawnie"
      );
    }
  };

  render() {
    return (
      <>
        <h3 className="card-header">Dodaj użytkownika</h3>
        <div className="container text-center mt-3 mb-3  w-100 card-header">
          <div className="d-flex flex-row card-body InputAddUser mx-auto ">
            <input
              className="d-flex flex-row col-2 form-control m-2"
              name="name"
              onChange={this.handleText}
              value={this.state.name}
              type="text"
              placeholder="Imię"
            ></input>
            <input
              name="surname"
              onChange={this.handleText}
              value={this.state.surname}
              type="text"
              className="d-flex flex-row col-sm form-control m-2"
              placeholder="Nazwisko"
            ></input>
            <input
              name="city"
              onChange={this.handleText}
              value={this.state.city}
              type="text"
              className="d-flex flex-row col-sm form-control m-2"
              placeholder="Miasto"
            ></input>
            <input
              name="email"
              onChange={this.handleText}
              value={this.state.email}
              type="email"
              className="d-flex flex-row col-3 form-control m-2"
              placeholder="e-mail"
            ></input>
            <a
              onClick={this.handleClick}
              href="#"
              className="btn btn-primary m-2 "
            >
              Dodaj użytkownika
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default AddUser;
