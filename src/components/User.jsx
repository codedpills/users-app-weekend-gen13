import React from "react";
import { Link } from 'react-router-dom';

const User = ({name, email, gen, id, removeUser}) => {
  const handleRemove = () => {
    removeUser(id);
  }
  return (
    <div>
      <h4>{name}</h4>
      <p>{email}</p>
      <p>{gen}</p>
      <button onClick={handleRemove}>Remove user</button>
      <Link to={`/edit/${id}`}>Edit user</Link>
      <hr />
    </div>
  );
};

export default User;
