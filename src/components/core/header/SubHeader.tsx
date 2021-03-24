import React from 'react';
import './SubHeader.scss';


let todayDate = () =>{
    return new Date().toLocaleString();
};

function SubHeader(){
        return (
            <div className="SubHeader">
                <p> {todayDate()} </p>
            </div>
        );
}

export default SubHeader;