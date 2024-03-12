import { Component } from "react";

class Counter extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState((prev) => ({
      count: prev.count + 1,
    }));
  };

  decrement = () => {
    this.setState((prev) => ({
      count: prev.count - 1,
    }));
  };

  render() {
    return (
      <>
        <h1>Counter in class</h1>
        <button onClick={this.increment}>+</button>
        <h2>{this.state.count}</h2>
        <button onClick={this.decrement}>-</button>
      </>
    );
  }
}

export default Counter;
