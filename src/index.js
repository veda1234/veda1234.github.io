import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import ScrollToTop from './components/ScrollToTop';

// This is the main page, basically this gets executed
ReactDOM.render(
  <React.StrictMode>
    <App />
    <ScrollToTop/>
  </React.StrictMode>,
  document.getElementById('root')
);

// This is JSX, basically a combination of HTML and JavaScript. Why is it merged? So that you don't have to place markup in one place and 
// logic in another, you can simply place both together

//Example one
// ReactDOM.render(
//   <h1>Hiii</h1>,
//   document.getElementById('root')
// );

//Example two
// Here again, we are using JavaScript with html. class(what we use in html) is renamed as className in JSX, similarly tabindex is tabIndex
// const name ={
//   first : 'Vedaanti',
//   last : 'Baliga'
// }
// function sendName(name){
//     return(
//       <h1>Hey {name.first} {name.last}</h1>
//     );
//   }
// ReactDOM.render(
//   sendName(name),
//   document.getElementById('root')
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();