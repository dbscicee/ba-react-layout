import React from 'react';
import './Header.scss';
import SubHeader from './SubHeader';

function Header(){
        return(
            <div className="Header">
            <h1>Header section</h1>
            <SubHeader/>
            <p className="txt"> </p>
            </div>
        );
}
export default Header;