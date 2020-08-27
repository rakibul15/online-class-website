import React from 'react';
import './Header.css'
import logo from '../../images/logo-coral.svg'




const Header = () => {
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/"><img src={logo} alt="" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                        <a className="nav-item nav-link active" href="/home">Home</a>
                        <a className="nav-item nav-link" href="/Features">Features</a>
                        <a className="nav-item nav-link" href="/Pricing">Pricing</a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;