import React from 'react';

const PersonalInformation = (props) => {
    return (
        <ul>
            <li>{ props.firstName }</li>
            <li>{ props.lastName }</li>
        </ul>
    )
}

export default PersonalInformation;