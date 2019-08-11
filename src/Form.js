import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      name: '',
      className: ''
    };

    this.state = this.initialState;
  }

  // fired whenever use makes change to input in form
  handleChange = event => {
    // ES6 property shorthand to create a variables that contain event.target.name and event.target.value
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  }

  render() {
    const { name, className } = this.state;

    return (
      <form>
        <br></br>
        <h4>Add new Strategy</h4>  
        <label>Name</label>
        <input type="text" name="name" value={name} onChange={this.handleChange} />
        <label>Class</label>
        <input type="text" name="className" value={className} onChange={this.handleChange} />
        <input type="button" value="Add" onClick={this.submitForm} />
      </form>
    );
  }
}

export default Form;
