import React from "react";
import './Header.css';  // estilizacao do header

const Header = () => {
    return (
        <header className="header-conteiner">
            <div className="header-top-nuvem"/>
            <div className="header-content">
                <img src="logo_1.png" alt="Logo Daitsuki" className="logo"/>
            </div>
        </header>
    );
};

export default Header;