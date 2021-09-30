import React from 'react';

const SelectionInfo = (props) => {
    const { candidate, picture } = props.info;

    return (
        <div className="card-selected-body">
            <img src={picture.thumbnail} height="100%" className="selected-image" alt={candidate} />
            <p style={{ paddingRight: '5px' }}>{candidate}</p>
        </div>
    );
};

export default SelectionInfo;