import React from "react";

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
      <hr />
    </div>
  );
};

export default User;
