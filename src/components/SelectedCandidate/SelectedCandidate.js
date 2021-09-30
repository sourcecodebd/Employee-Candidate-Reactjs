import React from 'react';
import SelectionInfo from '../SelectionInfo/SelectionInfo';

const SelectedCandidate = (props) => {
    const { selected } = props;

    const selectedReducer = (prev, curr) => prev + curr.expected_salary;
    const totalSalary = selected.reduce(selectedReducer, 0);

    const backgroundStyle = {
        backgroundImage: 'linear-gradient(rgba(0.5, 0.5, 0.5, 0.5), rgba(0.2, 0.2, 0.2, 0.2)), url(./social.jpg)'
    }

    return (
        <div className="card card-selected" style={backgroundStyle}>
            <h2><i className="fas fa-user-check"></i> Candidate Selected: {selected.length}</h2>
            <h2>Total Salary: ${totalSalary}</h2>
            {
                selected.map(select => <SelectionInfo info={select} key={select._id} />)
            }
        </div>
    );
};

export default SelectedCandidate;