import React from 'react';

const Overview = (props) => {
    const { firstName, lastName } = props;

    return (
        <ul>
            <li>{ firstName }</li>
            <li>{ lastName }</li>
        </ul>
    )
}

export default Overview;