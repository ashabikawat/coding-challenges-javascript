import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>Counter in function </h1>
      <button onClick={increment}>+</button>
      <h2>{counter}</h2>
      <button onClick={decrement}>-</button>
    </>
  );
}

export default Counter;
