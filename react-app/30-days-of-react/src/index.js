import React from "react";
import ReactDOM from "react-dom";
import katfoto from './images/katfoto.jpg'


const katfototje = (
  <div >
    <img src={katfoto} alt="kat foto" width="100px" className="katfototje"></img>
  </div>
)

const welcome = 'Welcome to je vader of react'
const title = 'getting fucked by react'
const subtitle = 'javascript library'
const author ={
  firstname: "Maajid",
  lastname: "Saidy"
}
const date = "July 8th, 2022"

const header = (
  <header>
    <div className="header-wrapper">
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Instructor: {author.firstname} {author.lastname}
      </p>
      <small>Date: {date}</small>
    </div>
  </header>
);

const numOne = 3
const numTwo = 2

const result = (
  <p>
    {numOne} + {numTwo} = {numOne+numTwo}
  </p>
)

const yearBorn = 2000
const currentYear = new Date().getFullYear()
const age = currentYear - yearBorn
const personAge = (
  <p>
    {' '}
    {author.firstname} {author.lastname} is {age} jaar oud
  </p>
)


const formulier = (
  <div className="formulier">
    <h1>SUBSCRIBE</h1>
    <p>sign up with your email address to receive news and updates</p>
    <input placeholder="first name"></input>
    <input placeholder="Last name"></input>
    <input placeholder="Email"></input>
    <br></br>
    <button>Subscribe</button>
  </div>
)

const techs = ['HTML', 'CSS', 'JS']
const techsFormatted = techs.map((tech) => <li key="tech">{tech}</li>)
const main = (
  <main>
    <p>prerequisite to get started {' '}</p>
    <strong>
      <em>react.js</em>
    </strong>
    :
    <ul>
     {techsFormatted}
     {result}
     {personAge}
     {katfototje}
     {formulier}
    </ul>
  </main>
);

const copyright = "copyright 2022"
const footer = (
  <footer>
    <p>{copyright}</p>
  </footer>
);

const app = (
  <div>
    {header}
    {main}
    {footer}
  </div>
);
const rootElement = document.getElementById("root");

ReactDOM.render(app, rootElement);
