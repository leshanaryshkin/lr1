import React, {useEffect} from 'react';
import {Link} from "react-router-dom";

const HeaderOnOtherPages = () => {
    return (
        <div>
            <div className="header-info-other-pages">
                <div className="header container">
                    <div className="logo">
                        <img src='/images/logo_white.png' alt=""/>
                    </div>
                    <nav className="header_links">
                        <Link to="/"  className="types-links">о компании</Link>
                        <Link to="/"  className="types-links">услуги</Link>
                        <Link to="/"  className="types-links">контакты</Link>
                        <Link to="/career"  className="types-links">Карьера</Link>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default HeaderOnOtherPages;