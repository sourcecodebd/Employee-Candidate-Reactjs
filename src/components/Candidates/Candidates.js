import React, { useEffect, useState } from 'react';
import Candidate from '../Candidate/Candidate';
import SelectedCandidate from '../SelectedCandidate/SelectedCandidate';
import './Candidates.css';

const Candidates = () => {
    const [candidates, setCandidates] = useState([]);
    const [selected, setSelected] = useState([]);

    useEffect(() => {
        const URL = `https://raw.githubusercontent.com/sourcecodebd/employee-candiate-json-data-by-nafi/main/web-developer.json`;
        fetch(URL).then(res => res.json()).then(data => setCandidates(data)).catch(err => console.log(err));
    }, [])

    const selectedHandler = (added) => {
        const newArray = [...selected];
        const exists = selected.find(existed => existed._id === added._id);
        if (!exists) {
            newArray.push(added);
        }
        setSelected(newArray);
    }

    return (
        <div>
            <div className="candidate-container container">
                <div className="order-1">
                    <div className="candidates-header">Employee Candidates</div>
                    <div className="candidates">
                        {candidates.map
                            (candidate =>
                                <Candidate
                                    candidate={candidate}
                                    selectedHandler={selectedHandler}
                                    key={candidate.email}
                                />
                            )
                        }
                    </div>
                </div>
                <div className="selected-candidates order-0">
                    <SelectedCandidate selected={selected} />
                </div>
            </div>
        </div >
    );
};

export default Candidates;