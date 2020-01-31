// import React from "react";
import React, { Component } from "react";

class LoginForm extends Component {
  state = {
    login: "",
    password: ""
  };

  handleText = e => {
    const target = e.target;
    const name = target.name;
    this.setState({
      [name]: e.target.value
    });
  };
  handleClick = () => {
    const { login, password } = this.state;
    const added = this.props.logiIn(login, password);

    if (added) {
      this.setState({
        login: "",
        password: ""
      });
    }
  };

  render() {
    return (
      <>
        <div className="container ">
          <div className=" mx-auto text-center col">
            <h2 className="card-header">
              Panel Logowanie==> LOGIN: admin HASŁO: admin
            </h2>
            <form className="mx-auto" style={{ width: 350 }}>
              <input
                onChange={this.handleText}
                name="login"
                className=" mx-auto form-control m-2 "
                placeholder="E-MAIL"
              ></input>
              <input
                onChange={this.handleText}
                name="password"
                className=" mx-auto form-control m-2 w-100"
                placeholder="HASŁO"
                type="password"
              ></input>

              <a
                onClick={this.handleClick}
                href="#"
                className="btn btn-success pl-4 pr-4"
              >
                Zaloguj
              </a>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default LoginForm;
