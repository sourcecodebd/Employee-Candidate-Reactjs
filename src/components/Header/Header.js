import React from 'react';
import logo from '../../logo.png';
import './Header.css';
import { pressOnBar } from './NavBar';

const Header = () => {
    const HeadingStyle = {
        fontWeight: 'bold',
        marginRight: '10px',
        fontSize: '25px',
        cursor: 'pointer',
    }
    return (
        <div className="header">
            <nav>
                <div className="navbar">
                    <img title="Soft-Tech Limited" src={logo} alt="Soft-Tech Official Logo" className="logo" /><span className="heading" title="Soft-Tech Limited" style={HeadingStyle}><a href="/">SOFT-TECH</a></span>
                    <a href="#home">Home</a>
                    <a href="#apply">Apply</a>
                    <a href="#confirmation">Confirmation</a>
                </div>
                <div className="menubar">
                    <div onClick={pressOnBar} className="mobile-nav">
                        <a href="/">Home</a>
                        <a href="#apply">Apply</a>
                        <a href="#confirmation">Confirmation</a>
                    </div>
                    {/* mobile menubar */}
                    <div className="toggle-bar-margin">
                        <div onClick={pressOnBar} id="toggle-bar">
                            <i className="fas fa-bars fa-2x"></i>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="heading-container">
                <div className="heading-text">
                    <h2>The best software teams ship early and often.</h2>
                    <p>Soft-Tech Limited is built for every member of your software team to plan,
                        track, and release great software.</p>
                </div>
                <div className="heading-image">
                    <img src="./brand-heading.png" alt="" />
                </div>
            </div>
            <div className="budget">Total Budget: $1M</div>
        </div>
    );
};

export default Header;