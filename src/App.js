import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {
  state = {
    strategies: [
      {
        name: 'EMA',
        className: 'com.strategies.Ema.java'
      },
      {
        name: 'Scalper',
        className: 'com.strategies.Scalper.java'
      },
      {
        name: 'MACD',
        className: 'com.strategies.Macd.java'
      }
    ]
  };

  removeStrategy = index => {
    // ES6 property shorthand to create a variable that contains this.state.strategies
    const { strategies } = this.state;

    // You must use this.setState() to modify an array - inbuilt react function.
    // Simply applying a new value to this.state.strategies will not work.
    this.setState({
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
      strategies: strategies.filter((strategy, i) => {
        return i !== index; // return non matching indexes, does not mutate, returns new array/copy
      })
    });
  };

  // Will update the state by taking the existing this.state.strategies and
  // adding the new strategy parameter, using the ES6 spread operator.
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
  handleSubmit = strategy => {
    this.setState({ strategies: [...this.state.strategies, strategy] });
  };

  render() {
    const { strategies } = this.state;
    return (
      <div className="container">
        <h1>Trading Strategies</h1>
        <Table strategies={strategies} removeStrategy={this.removeStrategy} />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
