import React, { Component } from 'react';
import Overview from './Components/Overview.js'

class App extends Component {
  constructor() {
    super();

    this.state = {
      _firstName: '',
      _lastName: '',
      firstName: '',
      lastName: '',
    }
  }

  storeFirstName = (e) => {
    this.setState({
      _firstName: e.target.value,
    })
  }

  storeLastName = (e) => {
    this.setState({
      _lastName: e.target.value,
      })
  }

  onSubmitInfo = (e) => {
    e.preventDefault();
    this.setState({
      firstName: this.state._firstName,
      lastName: this.state._lastName,
      })
  }

  render() {
    return (
      <div>
        <div className="personal-information">
          <h1>Personal information</h1>
          <form onSubmit={this.onSubmitInfo}>
            <input type="text" value = { this.state._firstName } onChange = { this.storeFirstName } />
            <input type="text" value = { this.state._lastName } onChange = { this.storeLastName } />
            <button type="submit">Add</button>
          </form>
          <Overview firstName={this.state.firstName} lastName={this.state.lastName} />
        </div>
      </div>
    )
  }

}

export default App;
