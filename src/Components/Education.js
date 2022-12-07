import React from 'react';

const Education = (props) => {
    
    const { educationList } = props;

    return (
        <div className="education">
            <h4>Experience</h4>
            {educationList.map((education) => {
                return (
                    <div className="content">
                        <div className="date">
                            {education.from} - {education.to}
                        </div>
                        <div className="education-information">
                            <p>{education.university}, {education.city}</p>
                            <p>Degree: {education.degree}</p>
                            <p>Subject: {education.subject}</p>
                        </div>
                    </div>
                )
            }
            )}
        </div>
    )
}

export default Education;