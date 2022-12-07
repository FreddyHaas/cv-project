import React from 'react';

const Experience = (props) => {
    
    const { experiences } = props;

    return (
        <div className="experience">
            <h4>Experience</h4>
            {experiences.map((experience) => {
                return (
                    <div className="content">
                        <div className="date">
                            {experience.from} - {experience.to}
                        </div>
                        <div className="job-information">
                            <p>{experience.position}</p>
                            <p>{experience.company}, {experience.city}</p>
                        </div>
                    </div>
                )
            }
            )}
        </div>
    )
}

export default Experience;