import React from 'react';

const Description = (props) => {
    
    return (
        <div className="description">
            <h4>Description</h4>
            <p>{ props.input }</p>
        </div>
    )
}

export default Description;