import React from "react";
import './Header.css';
import NetflixBrandLogo from '../../img/NetflixBrandLogo.png';
import PerfilNetflix from '../../img/PerfilNetflix.png';

export default ({black}) => {
    return (
        <header className={black ? 'blackHeader' : ""}>
            <div className="header--logo">
                <a href="/">
                    <img src={NetflixBrandLogo} alt="logomarca netflix" />                  
                </a>
            </div>
            <div className="header--perfil">
                <a href="/">
                    <img src={PerfilNetflix} alt="Perfil netflix" />
                </a>
            </div>
        </header>
    )
}