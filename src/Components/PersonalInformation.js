import React from 'react';

const PersonalInformation = (props) => {
    
    const { firstName, lastName, title } = props;

    return (
        <div className="cv-header">
            <p>{firstName} {lastName}</p>
            <p>{title}</p>
        </div>
    )
}

export default PersonalInformation;