import React from 'react';
import Expertise from '../Expertise/Expertise';

const Candidate = (props) => {
    const { _id, candidate, expertise, experience, expected_salary, previous_company, bio, registered, email, phone, picture } = props.candidate;

    const backgroundStyle = {
        backgroundImage: 'linear-gradient(rgba(0.5, 0.5, 0.5, 0.5), rgba(0.2, 0.2, 0.2, 0.2))'
    }
    return (
        <div className="card card-candidates" style={backgroundStyle}>
            <img src={picture.large} alt={candidate} />
            <div className="card-candidates-body">
                <div className="class-candidates-body-content">
                    <div className="button-container">
                        <button
                            onClick={() => props.selectedHandler(props.candidate)} className="btn-custom"><i className="fas fa-user-plus"></i> Select
                        </button>
                    </div>
                    <div className="candidate-info">
                        <div className="scroll padding-5px">
                            <div className="social-links">
                                <a href={picture.large}><i className="fab fa-facebook fa-2x"></i></a>
                                <a href={picture.large}><i className="fab fa-linkedin fa-2x"></i></a>
                                <a href={picture.large}><i className="fab fa-github fa-2x"></i></a>
                            </div>
                            <p>Id: {_id}</p>
                            <p>Candidate: {candidate}</p>
                            <p>Registered on: {registered}</p>
                            <p>Expected salary: ${expected_salary}</p>
                            <p>Expertise:</p>
                            {
                                expertise.map(expert => <Expertise expertise={expert} key={expert.id} />)
                            }
                            <p>{experience} years experienced</p>
                            <p>Previous Company: {previous_company}</p>
                            <p style={{ textAlign: 'justify' }}>Bio: {bio ? bio : 'No Bio Exists'}</p>
                            <p>Email: {email}</p>
                            <p>Phone: {phone}</p>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Candidate;