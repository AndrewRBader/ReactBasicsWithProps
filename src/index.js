import React from 'react';
import ReactDOM from 'react-dom/client';
import Hello from './App';
import './styles/index.css';

const person = {
    // can put a bunch of different data types here
    name: "Andrew",
    age: 33,
    location: "Queens, NY",
    lovesHisLife: true,
    skills: ["coding","guitar","fitness"],

}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    // JSX custom components
    <Hello 
        name = {person.name} 
        age = {person.age} 
        location ={person.location}
        lifeStatus = {person.lovesHisLife}
        skills = {person.skills}
    />
);
