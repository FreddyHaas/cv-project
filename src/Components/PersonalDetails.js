import React from 'react';
import image from '../img/empty_avatar.jpg'

const PersonalDetails = (props) => {
    
    const { adress, phoneNumber, email } = props;

    return (
        <div className="cv-right-section">
            <img src={image} alt="applicant"/>
            <div className="personal-details">
                <h4>Personal Details</h4>
                <div className="content">
                    <p>Adress</p>
                    <p>{adress}</p>
                </div>
                <div className="content">
                    <p>Phone Number</p>
                    <p>{phoneNumber}</p>
                </div>
                <div className="content">
                    <p>Email</p>
                    <p>{email}</p>
                </div>
            </div>
        </div>
    )
}

export default PersonalDetails;