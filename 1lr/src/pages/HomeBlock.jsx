import React from 'react';
import MainBlock from "./MainBlock";
import AboutBlock from "./AboutBlock";
import Services from "./Services";
import ContactsBlock from "./ContactsBlock";

const HomeBlock = () => {
    return (
        <div>
            <MainBlock/>
            <AboutBlock/>
            <Services/>
            <ContactsBlock/>
        </div>
    );
};

export default HomeBlock;