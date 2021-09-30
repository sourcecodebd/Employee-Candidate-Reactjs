import React from 'react';

const Expertise = (props) => {
    const { languages } = props.expertise || {};
    return (
        <div>
            <li>{languages}</li>
        </div>
    );
};

export default Expertise;