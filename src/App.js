import React, { Component } from "react";
import Table from "./Table";

class App extends Component {
  state = {
    strategies: [
      {
        name: "EMA",
        class: "com.strategies.Ema.java"
      },
      {
        name: "Scalper",
        class: "com.strategies.Scalper.java"
      },
      {
        name: "MACD",
        class: "com.strategies.Macd.java"
      }
    ]
  }

  removeStrategy = (index) => {
    // ES6 property shorthand to create a variable that contains this.state.strategies
    const { strategies } = this.state;

    // You must use this.setState() to modify an array - inbuilt react function.
    // Simply applying a new value to this.state.strategies will not work.
    this.setState({
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
      strategies: strategies.filter((strategy, i) => {
        return i !== index; // return non matching indexes, does not mutate, returns new array/copy
      }),
    })
  }

  render() {
    const { strategies } = this.state;    
    return (
      <div className="container">
        <h1>Trading Strategies</h1>
        <Table strategies={strategies} removeStrategy={this.removeStrategy} />
      </div>
    );
  }
}

export default App;
