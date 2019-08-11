import React, { Component } from "react";
import Table from "./Table";

class App extends Component {
  render() {
    const strategies = [
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
    ];

    return (
      <div className="container">
        <h1>Trading Strategies</h1>
        <Table strategyList={strategies} />
      </div>
    );
  }
}

export default App;
