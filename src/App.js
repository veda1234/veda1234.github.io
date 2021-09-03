import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';
import {
  HashRouter,
  Route,
  Link
} from "react-router-dom";
import './App.css';

import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import WorkEx from './pages/WorkEx'
import PubConPage from './pages/PublicationsConferences'
import EduPage from './pages/EduPage'
import resumePdf from './assets/Documents/Resume_Vedaanti_Baliga.pdf'
import LorPdf from './assets/Documents/AllLetters.pdf'


// Why do we have a state here? Because we want other pages to use functions, not classes. Classes can sometimes mess up things. Try to 
// keep state in one place
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title : 'Vedaanti Baliga',
      headerLinks : [
        {title : 'Home', path: '/'},
        {title : 'Contact me', path: '/contact'}
      ],
      cardLinks : [
        {title : 'About', path: '/about'},
        {title: 'Work Ex', path: '/workex'},
        {title: 'Publications and Conferences', path: '/pubcon'},
        {title: 'Education', path: '/edu'}
      ],
      home:{
        title : 'Hi, I am Vedaanti Baliga',
        subTitle : 'Full stack developer & Data scientist',
        text : 'Still exploring the world of computers'
      },
      about:{
        title: 'About me'
      },
      contact:{
        title : 'Contact me here'
      },
      workex:{
        title : 'Projects and work experiences'
      },
      pubcon:{
        title : 'Publications and Conferences'
      },
      edu:{
        title : 'Education'
      },
    }
  }
  getInitialState () {
    return {
      navExpanded: false
    }
  }

  setNavExpanded(expanded) {
    this.setState({ navExpanded: expanded });
  }

  closeNav() {
    this.setState({ navExpanded: false });
  }
  render(){
    return (
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Container className='p-0' fluid={true}>
          <Navbar collapseOnSelect className='border-bottom' bg='transparent' expand='lg'>
            {/* <Navbar.Brand>Vedaanti Baliga</Navbar.Brand> */}
            <Navbar.Toggle className='border-0' aria-controls='navbar-toggle'/>
            <Navbar.Collapse id='navbar-toggle'>
              <Nav className='ml-auto'>
                <Link className='nav-link' to='/'>Home</Link>
                <Link className='nav-link' to='/about'>About</Link>
                <Link className='nav-link' to='/workex'>Experience</Link>
                <a className='nav-link' href={resumePdf} target='_blank' rel='noopener noreferrer'>Resume</a>
                <a className='nav-link' href={LorPdf} target='_blank' rel='noopener noreferrer'>Achievements</a>
                <Link className='nav-link' to='/pubcon'>Publications</Link>
                <Link className='nav-link' to='/edu'>Education</Link>
                <Link className='nav-link' to='/contact'>Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          {/* Why are we using exact? Basically exact takes just '/', if we put exact in other paths, it will route to '/' only */}
          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text}/>}/>
          <Route path="/about" render={() => <AboutPage title={this.state.about.title}/>}/>
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title}/>}/>
          <Route path= "/workex" render={() => <WorkEx title={this.state.workex.title}/>}/>
          <Route path= "/pubcon" render={() => <PubConPage title={this.state.pubcon.title}/>}/>
          <Route path= "/edu" render={() => <EduPage title={this.state.edu.title}/>}/>
          <Footer/>
        </Container>
      </HashRouter>
    );
  }
  
}
export default App;
