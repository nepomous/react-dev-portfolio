import React from 'react';
import logo from './logo.svg';
import Header from './Header';
import Footer from './Footer';
import Lead from './Lead';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'


const About = () => {
  return ( 
    <div></div>
  )}

const Experience = () => {
  return ( 
    <div></div>
  )}

const Education = () => {
  return ( 
    <div></div>
  )}

const Projects = () => {
  return ( 
    <div></div>
  )}

const Skills = () => {
  return ( 
    <div></div>
  )}

const Contact = () => {
  return ( 
    <div></div>
  )}


function App() {
  return (
    <div className="App">
      <Header />
      <Lead />
      <Footer />
    </div>
  );
}

export default App;
