import React from "react";

const User = ({name, email, gen}) => {
  return (
    <div>
      <h4>{name}</h4>
      <p>{email}</p>
      <p>{gen}</p>
    </div>
  );
};

export default User;
