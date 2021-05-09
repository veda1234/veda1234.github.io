import React from 'react';
import {animated, useSpring} from 'react-spring';
import {
    Route,
    Link
  } from "react-router-dom";

import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';

function CardInformation(props){
    const style = useSpring({opacity:1, from: {opacity:0}});

    return(
        <animated.div style={style} className='v-card-info'>
            <p className='v-card-title'>{props.title}</p>
            <p className="v-card-sub-title">{props.subTitle}</p>
            <Link to={props.link}>View</Link>
            <Route path={props.link} render={() => <AboutPage title={this.state.about.title}/>}/>
            <Route path={props.link} render={() => <ContactPage title={this.state.contact.title}/>}/>
            {/* <a href="./pages/AboutPage" target='_blank' rel='noopener noreferrer'>View</a> */}
        </animated.div>
       
    );

}

export default CardInformation;