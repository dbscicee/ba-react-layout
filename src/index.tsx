import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Bala from './components/user/Bala';
import App from './components/user/App';
import Header from "./components/core/header/Header";
import Footer from "./components/core/footer/Footer";
import reportWebVitals from './reportWebVitals';

//without jsx
/*const mybox = React.createElement('header1',{},"hello world");
ReactDOM.render(
    myox,
    document.getElementById('root'));
    )*/

//with jsx
/*const mybox = <h1>Hello world </h1>
ReactDOM.render(
    myox,
    document.getElementById('root'));
)*/

//with jsx
/*const mybox = <div>
<h1>Hello world </h1>
<p> test</p>
</div>
ReactDOM.render(
    myox,
    document.getElementById('root'));
)*/

ReactDOM.render(
    <React.StrictMode>
        <Header/>
        <App/>
        <Bala/>
        <App/>
        <Footer/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
