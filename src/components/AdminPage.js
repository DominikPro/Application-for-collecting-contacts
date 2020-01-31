import React from "react";
import User from "./User";

const AdminPage = props => {
  const users = props.users.map(user => (
    <User
      id={user.id}
      key={user.id}
      user={user}
      deletUser={props.deletUser}
      changeUser={props.changeUser}
    />
  ));

  return (
    <>
      <div className="nav nav-pills justify-content-end mr-5 ml-5 mt-1">
        <button
          onClick={props.logOut}
          type="button"
          className=" mt-2 btn btn-primary position-absolute sticky-top"
          data-toggle="button"
          aria-pressed="false"
          autoComplete="off"
        >
          Wyloguj
        </button>
      </div>
      <div className="card-body">
        <h3 className="card-title">
          Lista użytkowników -> {props.numberOfUsers}
        </h3>
        <ul className="list-group list-group-horizontal-lg">
          <li className="list-group-item col-1">ID</li>
          <li className="list-group-item col-2">IMIĘ</li>
          <li className="list-group-item col-2">NAZWISKO</li>
          <li className="list-group-item col-1">MIASTO</li>
          <li className="list-group-item col-3">E-MAIL</li>
          <li className="list-group-item col-1">HASŁO</li>
          <li className="list-group-item col-2">Educja</li>
        </ul>
        {users}
      </div>
    </>
  );
};

export default AdminPage;
