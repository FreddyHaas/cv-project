import React, { Component } from 'react';
import PersonalInformation from './Components/PersonalInformation.js'
import PersonalDetails from './Components/PersonalDetails.js'
import Description from './Components/Description.js'
import Experience from './Components/Experience.js'
import Education from './Components/Education.js';
import './styles.css'



class App extends Component {
  constructor() {
    super();

    this.state = {
      personalInformation: {firstName: '', lastName: '', title:''},
      personalDetails: {adress: '', phoneNumber: '', email: ''},
      description: '',
      experience:[{position: '', company: '', city:'', from:'', to:''}],
      education:[{university: '', city:'', degree:'', subject:'', from:'', to:''}]
    }
  }

  updatePersonalInformation = (e) => {
    let personalInformation = this.state.personalInformation;
    personalInformation[e.target.name] = e.target.value;
    this.setState({personalInformation});
  }

  updatePersonalDetails = (e) => {
    let personalDetails = this.state.personalDetails;
    personalDetails[e.target.name] = e.target.value;
    this.setState({personalDetails});
  }

  updateExperience = (i, e) => {
    let experience = this.state.experience;
    experience[i][e.target.name] = e.target.value;
    this.setState({experience});
  }

  removeExperienceFields = (i) => {
    let experience = this.state.experience;
    experience.splice(i,1);
    this.setState({experience});
  }

  addExperienceFields = () => {
    this.setState({
      experience: [...this.state.experience, {position: '', company: '', city:'', from:'', to:''}]
    })
  }

  addEducationFields = () => {
    this.setState({
      education: [...this.state.education, {university: '', city:'', degree:'', subject:'', from:'', to:''}]
    })
  }

  removeEducationFields = (i) => {
    let education = this.state.education;
    education.splice(i,1);
    this.setState({education});
  }

  updateEducation = (i, e) => {
    let education = this.state.education;
    education[i][e.target.name] = e.target.value;
    this.setState({education});
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <div className="header">CV CREATOR</div>
        <div className="main">
          <div className="input-section">
            <div className="personal-information">
              <p>Personal information</p>
              <form>
                <input type="text" name="firstName" placeholder="First Name" value = { this.state.personalInformation.firstName } onChange = { this.updatePersonalInformation } />
                <input type="text" name="lastName" placeholder="Last Name" value = { this.state.personalInformation.lastName } onChange = { this.updatePersonalInformation } />
                <input type="text" name="title" placeholder="Title" value = { this.state.personalInformation.title } onChange = { this.updatePersonalInformation } />
                <input type="text" name="adress" placeholder="Adress" value = { this.state.personalDetails.adress } onChange = { this.updatePersonalDetails } />
                <input type="text" name="phoneNumber" placeholder="Phone Number" value = { this.state.personalDetails.phoneNumber } onChange = { this.updatePersonalDetails } />
                <input type="text" name="email" placeholder="Email" value = { this.state.personalDetails.email } onChange = { this.updatePersonalDetails } />
                <input type="text" name="description" placeholder="Description" value = { this.state.description } onChange = { ((e) => {this.setState({description: e.target.value})}) } id="description-input" />
              </form>
              </div>
            <div className="experience-input">
              <p>Experience</p>
              <form>
                {this.state.experience.map((element, index) => (
                    <div className="experience-input-form" key={index}>
                      <input type="text" name="position" placeholder="Position" value = { element.position || '' } onChange = { (e) => {this.updateExperience(index, e)} } />
                      <input type="text" name="company" placeholder="Company" value = { element.company || '' } onChange = { (e) => {this.updateExperience(index, e)} } />
                      <input type="text" name="city" placeholder="City" value = { element.city || '' } onChange = { (e) => {this.updateExperience(index, e)} } />
                      <input type="text" name="from" placeholder="From" value = { element.from || '' } onChange = { (e) => {this.updateExperience(index, e)} } />
                      <input type="text" name="to" placeholder="To" value = { element.to || '' } onChange = { (e) => {this.updateExperience(index, e)} } />
                      <button className="button delete" type="button" onClick={() => this.removeExperienceFields()}>Remove</button>
                    </div>
                ))}
                <button className="button add" type="button" onClick={() => this.addExperienceFields()}>Add</button>
              </form>
            </div>
            <div className="education-input">
              <p>Education</p>
              <form>
                {this.state.education.map((element, index) => (
                  <div className="education-input-form" key={index}>
                    <input type="text" name="university" placeholder="University" value = { element.university || '' } onChange = { (e) => {this.updateEducation(index, e)} } />
                    <input type="text" name="city" placeholder="City" value = { element.city || '' } onChange = { (e) => {this.updateEducation(index, e)} } />
                    <input type="text" name="degree" placeholder="Degree" value = { element.degree || '' } onChange = { (e) => {this.updateEducation(index, e)} } />
                    <input type="text" name="subject" placeholder="Subject" value = { element.subject || '' } onChange = { (e) => {this.updateEducation(index, e)} } />
                    <input type="text" name="from" placeholder="From" value = { element.from || '' } onChange = { (e) => {this.updateEducation(index, e)} } />
                    <input type="text" name="to" placeholder="To" value = { element.to || '' } onChange = { (e) => {this.updateEducation(index, e)} } />
                    <button className="button delete" type="button" onClick={() => this.removeEducationFields()}>Remove</button>
                  </div>
                ))}
                  <button className="button add" type="button" onClick={() => this.addEducationFields()}>Add</button>
              </form>
            </div>
          </div>
          <div className="cv">
            <PersonalInformation {...this.state.personalInformation}/>
            <div className="cv-main">
              <Description input = {this.state.description}/>
              <Experience experiences = {this.state.experience}/>
              <Education educationList = {this.state.education}/>
            </div>
            <PersonalDetails {...this.state.personalDetails}/>
          </div>
        </div>
      </div>
    )
  }

}

export default App;

