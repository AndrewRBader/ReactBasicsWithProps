import React from 'react';
import ReactDOM from 'react-dom/client';
import Hello from './App';
import './styles/index.css';

const person = {
    // can put a bunch of different data types here
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    // data is defined here ie key:value pairs
    <Hello name = {"Andrew"} age = {33} location ={"Queens, NY"}/>
    // JSX custom components
);
