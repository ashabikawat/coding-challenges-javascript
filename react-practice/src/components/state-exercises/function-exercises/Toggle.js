import React, { useState } from "react";

function Toggle() {
  const [toggle, setToggle] = useState("false");

  function handleToggle() {
    setToggle(!toggle);
  }

  return (
    <>
      <button onClick={handleToggle}>{toggle ? "hide" : "show"}</button>

      <p>{toggle ? "Toggle text" : ""}</p>
    </>
  );
}

export default Toggle;
