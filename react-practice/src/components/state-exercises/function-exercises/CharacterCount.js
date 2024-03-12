import React, { useState } from "react";

function CharacterCount() {
  const [count, setCount] = useState(0);

  function handleCount(e) {
    setCount(e.target.value);
  }

  return (
    <>
      <textarea cols="30" rows="10" onChange={handleCount}></textarea>
      <p>Character Count : {count.length} </p>
    </>
  );
}

export default CharacterCount;
