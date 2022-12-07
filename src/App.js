import React, { useState } from 'react';
import PersonalInformation from './Components/PersonalInformation.js'
import PersonalDetails from './Components/PersonalDetails.js'
import Description from './Components/Description.js'
import Experience from './Components/Experience.js'
import Education from './Components/Education.js';
import './styles.css'



const App = () => {

  let stateObject = {
    personalInformation: {firstName: '', lastName: '', title:''},
    personalDetails: {adress: '', phoneNumber: '', email: ''},
    description: '',
    experience:[{position: '', company: '', city:'', from:'', to:''}],
    education:[{university: '', city:'', degree:'', subject:'', from:'', to:''}]
  }

  const [state, setState] = useState(stateObject);

  const updatePersonalInformation = (e) => {
    let personalInformationTemp = state.personalInformation;
    personalInformationTemp[e.target.name] = e.target.value;
    setState({...state, personalInformation: personalInformationTemp});
  }

  const updatePersonalDetails = (e) => {
    let personalDetailsTemp = state.personalDetails;
    personalDetailsTemp[e.target.name] = e.target.value;
    setState({...state, personalDetails: personalDetailsTemp});
  }

  const updateExperience = (i, e) => {
    let experienceTemp = state.experience;
    experienceTemp[i][e.target.name] = e.target.value;
    setState({...state, experience: experienceTemp});
  }

  const removeExperienceFields = (i) => {
    let experienceTemp = state.experience;
    experienceTemp.splice(i,1);
    setState({...state, experience: experienceTemp});
  }

  const addExperienceFields = () => {
    setState({
      ...state, experience: [...state.experience, {position: '', company: '', city:'', from:'', to:''}]
    })
  }

  const addEducationFields = () => {
    setState({
      ...state, education: [...state.education, {university: '', city:'', degree:'', subject:'', from:'', to:''}]
    })
  }

  const removeEducationFields = (i) => {
    let educationTemp = state.education;
    educationTemp.splice(i,1);
    setState({...state, education: educationTemp});
  }

  const updateEducation = (i, e) => {
    let educationTemp = state.education;
    educationTemp[i][e.target.name] = e.target.value;
    setState({...state, education: educationTemp});
  }


  return (
      <div>
        <div className="header">CV CREATOR</div>
        <div className="main">
          <div className="input-section">
            <div className="personal-information">
              <p>Personal information</p>
              <form>
                <input type="text" name="firstName" placeholder="First Name" value = { state.personalInformation.firstName } onChange = { updatePersonalInformation } />
                <input type="text" name="lastName" placeholder="Last Name" value = { state.personalInformation.lastName } onChange = { updatePersonalInformation } />
                <input type="text" name="title" placeholder="Title" value = { state.personalInformation.title } onChange = { updatePersonalInformation } />
                <input type="text" name="adress" placeholder="Adress" value = { state.personalDetails.adress } onChange = { updatePersonalDetails } />
                <input type="text" name="phoneNumber" placeholder="Phone Number" value = { state.personalDetails.phoneNumber } onChange = { updatePersonalDetails } />
                <input type="text" name="email" placeholder="Email" value = { state.personalDetails.email } onChange = { updatePersonalDetails } />
                <input type="text" name="description" placeholder="Description" value = { state.description } onChange = { ((e) => setState({...state, description: e.target.value})) } id="description-input" />
              </form>
              </div>
            <div className="experience-input">
              <p>Experience</p>
              <form>
                {state.experience.map((element, index) => (
                    <div className="experience-input-form" key={index}>
                      <input type="text" name="position" placeholder="Position" value = { element.position || '' } onChange = { (e) => {updateExperience(index, e)} } />
                      <input type="text" name="company" placeholder="Company" value = { element.company || '' } onChange = { (e) => {updateExperience(index, e)} } />
                      <input type="text" name="city" placeholder="City" value = { element.city || '' } onChange = { (e) => {updateExperience(index, e)} } />
                      <input type="text" name="from" placeholder="From" value = { element.from || '' } onChange = { (e) => {updateExperience(index, e)} } />
                      <input type="text" name="to" placeholder="To" value = { element.to || '' } onChange = { (e) => {updateExperience(index, e)} } />
                      <button className="button delete" type="button" onClick={() => removeExperienceFields(index)}>Remove</button>
                    </div>
                ))}
                <button className="button add" type="button" onClick={addExperienceFields}>Add</button>
              </form>
            </div>
            <div className="education-input">
              <p>Education</p>
              <form>
                {state.education.map((element, index) => (
                  <div className="education-input-form" key={index}>
                    <input type="text" name="university" placeholder="University" value = { element.university || '' } onChange = { (e) => {updateEducation(index, e)} } />
                    <input type="text" name="city" placeholder="City" value = { element.city || '' } onChange = { (e) => {updateEducation(index, e)} } />
                    <input type="text" name="degree" placeholder="Degree" value = { element.degree || '' } onChange = { (e) => {updateEducation(index, e)} } />
                    <input type="text" name="subject" placeholder="Subject" value = { element.subject || '' } onChange = { (e) => {updateEducation(index, e)} } />
                    <input type="text" name="from" placeholder="From" value = { element.from || '' } onChange = { ((e) => {updateEducation(index, e)}) } />
                    <input type="text" name="to" placeholder="To" value = { element.to || '' } onChange = { (e) => {updateEducation(index, e)} } />
                    <button className="button delete" type="button" onClick={() => removeEducationFields(index)}>Remove</button>
                  </div>
                ))}
                  <button className="button add" type="button" onClick={addEducationFields}>Add</button>
              </form>
            </div>
          </div>
          <div className="cv">
            <PersonalInformation {...state.personalInformation}/>
            <div className="cv-main">
              <Description input = {state.description}/>
              <Experience experiences = {state.experience}/>
              <Education educationList = {state.education}/>
            </div>
            <PersonalDetails {...state.personalDetails}/>
          </div>
        </div>
      </div>
    )
}

export default App;

