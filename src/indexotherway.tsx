import React from 'react';
import ReactDOM from'react-dom';


class Metrics{
     compareModels(){
        let a = 5;
        let b= 10;
        let c = a+b;
        alert(c);
        //document.getElementById('root').innerHTML = String(a);
    }
}

let myMetrics = new Metrics();
myMetrics.compareModels();