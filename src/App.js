import React, { Component } from 'react';
import PersonalInformation from './Components/PersonalInformation.js'

class App extends Component {
  constructor() {
    super();

    this.state = {
      personalInformation: {firstName: '', lastName: ''},
    }
  }

  handleChange = (e) => {
    let personalInformation = this.state.personalInformation;
    personalInformation[e.target.name] = e.target.value;
    this.setState({personalInformation});
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <div className="personal-information">
          <p>Personal information</p>
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="firstName" value = { this.state.personalInformation.firstName } onChange = { this.handleChange } />
            <input type="text" name="lastName" value = { this.state.personalInformation.lastName } onChange = { this.handleChange } />
            <button type="submit">Add</button>
          </form>
          <PersonalInformation {...this.state.personalInformation} />
        </div>
      </div>
    )
  }

}

export default App;

// Add default value;
{/* <input type="text" name="title" value = { this.state.personalInformation.title } onChange = { this.handleChange } /> */}
