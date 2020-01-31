import React from "react";

const User = props => {
  return (
    <div className="listHover">
      <ul className="list-group list-group-horizontal-lg mt-2">
        <li className="list-group-item col-1 ">{props.user.id}</li>
        <li className="list-group-item col-2 ">{props.user.name}</li>
        <li className="list-group-item col-2 ">{props.user.surname}</li>
        <li className="list-group-item col-1 ">{props.user.city}</li>
        <li className="list-group-item col-3 ">{props.user.email}</li>
        <li className="list-group-item col-1 ">{props.user.password}</li>
        <li className="list-group-item col-2">
          <div className="d-flex justify-content-between">
            <button
              onClick={() => props.changeUser(props.user.id)}
              type="button"
              className="btn btn-primary mr-5 "
            >
              Edytuj
            </button>

            <button
              onClick={() => props.deletUser(props.user.id)}
              type="button"
              className="btn btn-danger deletUserBtn"
            >
              Usuń
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default User;
