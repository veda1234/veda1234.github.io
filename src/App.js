import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import './App.css';

import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'

// Why do we have a state here? Because we want other pages to use functions, not classes. Classes can sometimes mess up things. Try to 
// keep state in one place
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title : 'Vedaanti Baliga',
      headerLinks : [
        {title : 'Home', path: '/'},
        {title : 'About', path: '/about'},
        {title : 'Contact me', path: '/contact'}
      ],
      home:{
        title : 'Hi, I am Vedaanti Baliga',
        subTitle : 'A full stack developer',
        text : 'Still exploring the world of computers'
      },
      about:{
        title: 'About me'
      },
      contact:{
        title : 'Contact me here'
      }
    }
  }
  render(){
    return (
      <Router>
        <Container className='p-0' fluid={true}>
          <Navbar className='border-bottom' bg='transparent' expand='lg'>
            <Navbar.Brand>Vedaanti Baliga</Navbar.Brand>
            <Navbar.Toggle className='border-0' aria-controls='navbar-toggle'/>
            <Navbar.Collapse id='navbar-toggle'>
              <Nav className='ml-auto'>
                <Link className='nav-link' to='/'>Home</Link>
                <Link className='nav-link' to='/about'>About</Link>
                <Link className='nav-link' to='/contact'>Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          {/* Why are we using exact? Basically exact takes just '/', if we put exact in other paths, it will route to '/' only */}
          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text}/>}/>
          <Route path="/about" render={() => <AboutPage title={this.state.about.title}/>}/>
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title}/>}/>
          <Footer/>
        </Container>
      </Router>
    );
  }
  
}
export default App;
