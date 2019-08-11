import React, { Component } from "react";

// Simple Component example.
const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Class</th>
      </tr>
    </thead>
  );
};

// Another Simple Component - arrow function that takes props as arg
// Cannot change props - they're read-only. Using state allows us to modify stuff...
const TableBody = props => {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  const rows = props.strategyList.map((row, index) => { // (current value, current index)
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.class}</td>
        <td>
          <button onClick={() => props.removeStrategy(index)}>Delete</button>
        </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

// Capitalized to differentiate from HTML table element
// This is a Class Component.
class Table extends Component {
  render() {
    // ES6 property shorthand to create variables that contains this.props.strategies
    // and this.props.removeStrategy
    const { strategies, removeStrategy } = this.props;
    return (
      <table>
        <TableHeader />
        <TableBody strategyList={strategies} removeStrategy={removeStrategy} />
      </table>
    );
  }
}

export default Table;
