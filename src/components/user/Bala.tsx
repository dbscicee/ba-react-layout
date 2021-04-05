import React from 'react';
import './Bala.scss';

function Bala(){

    return(
        <div className="Bala">
            <p> Section banner multiple </p>
            <div className = "gftext">
                <label>Select a Image file : </label>
                <br />
                <input type="file" multiple />
                <br />
                <button className = "button" >
                    Upload
                </button>
            </div>

        </div>
    );
}

export default Bala;