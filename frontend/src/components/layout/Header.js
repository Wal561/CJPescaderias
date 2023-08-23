import React from "react";
import '../../styles/components/layout/Header.css'

const Header = (props) =>  {
    return (
        <header>
            <div className="holder">
                <img className="logocap" src="images/images/logo1.png" width="120" alt="Pescadería Capitan Jack" />
                <h1>Capitan JACK Pescaderías</h1>
                <h3>Rafaela-Santa Fe</h3>
                
                
            </div>
        </header>
    );
}

export default Header;