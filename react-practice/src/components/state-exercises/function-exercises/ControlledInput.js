import React, { useState } from "react";

function ControlledInput() {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  function handleSubmit(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  return (
    <>
      <label>Name : </label>
      <input
        type="text"
        value={user.name}
        onChange={handleSubmit}
        name="name"
      />

      <br />
      <br />

      <label>Email : </label>
      <input
        type="email"
        value={user.email}
        onChange={handleSubmit}
        name="email"
      />

      <br />
      <br />

      <p>name : {user.name}</p>
      <p>email : {user.email}</p>
    </>
  );
}

export default ControlledInput;
