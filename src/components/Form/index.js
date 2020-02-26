import React, { Component } from "react";
import "./style.css";
import axios from 'axios';

class Form extends Component {
  // Setting the component's initial state
  state = {
    username: "",
    password: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    if (name === "password") {
      value = value.substring(0, 15);
    }
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!this.state.username ) {
      alert("Fill out your username please!");
    } else if (this.state.password.length < 6) {
      alert(
        `Choose a more secure password ${this.state.username}`
      );
    } 
    console.log(this.state);
    axios.post('http://localhost:3001/api/register', {username: this.state.username, password: this.state.password} )
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.setState({
          username: "",
          password: ""
        })
      }).catch(error => {
        console.log(error)
      }) 

  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <p>
          Hello {this.state.username} 
        </p>
        <form className="form">
          <input
            value={this.state.username}
            name= "username"
            onChange={this.handleInputChange}
            type="text"
            placeholder= "username"
          />
          <input
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="password"
            placeholder="Password"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
