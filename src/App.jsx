import React, { Component } from 'react';
import './App.css';
const githubURL = "https://api.github.com/users/maparsons83"

class App extends Component {

  state = {
    user: {},
    active: false
  }
  handleClick = () => {
    this.state.active === false ? this.setState({active: true}) : this.setState({active:false})
    fetch(githubURL)
    .then((res) => {return res.json() })
    .then((data) => {
      this.setState({
        user: data
      })
    })
  }
  render() {
    return (
      <div className="App">
        <br/>
        <br/>
        <button onClick={this.handleClick}>Toggle User</button>
        <br/>
        {this.state.active === true &&
          <div id="userInfo">
            <img alt="avatar" src={this.state.user.avatar_url} />
            <div id="Name">{this.state.user.name}</div>
            <div id="bio">{this.state.user.bio}</div>
            <div id="company">{this.state.user.company}</div>
          </div>
        }
      </div>
    );
  }
}

export default App;
