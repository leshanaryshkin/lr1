import React from 'react';
import {Link} from "react-router-dom";
import {useEffect} from "react";

const Header = () => {
    useEffect(() => {
        const scrollToElement = (id) => {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({behavior: 'smooth'});
            }
        };

        const handleScroll = (event) => {
            event.preventDefault();
            const divId = event.currentTarget.getAttribute('href').substring(1);
            scrollToElement(divId);
        };

        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach((link) => {
            link.addEventListener('click', handleScroll);
        });

        return () => {
            links.forEach((link) => {
                link.removeEventListener('click', handleScroll);
            });
        };
    }, []);
    return (
        <div className="header-info">
            <div className="header container">
                <div className="logo">
                    <img src='/images/logo_white.png' alt=""/>
                </div>
                <nav className="header_links">

                    <a href="#about-us" className="types-links">о компании</a>
                    <a href="#services" className="types-links">услуги</a>
                    <a href="#contacts" className="types-links">контакты</a>
                    <Link to="/career" className="types-links">Карьера</Link>
                </nav>
            </div>
        </div>
    );
};

export default Header;