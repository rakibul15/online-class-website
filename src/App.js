import React from 'react';
import logo from './logo.svg';
import './App.css';
import Course from './Components/Courses/Course';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="course">
      <Header></Header>
      <Course></Course>
    </div>
  );
}

export default App;
