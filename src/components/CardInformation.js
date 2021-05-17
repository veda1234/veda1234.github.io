import React from 'react';
import {animated, useSpring} from 'react-spring';
import {
    Route,
    Link
  } from "react-router-dom";

import AboutPage from '../pages/AboutPage';
import WorkEx from '../pages/WorkEx'
import PubConPage from '../pages/PublicationsConferences'
import resumePdf from '../assets/Documents/Resume_Vedaanti_Baliga.pdf'
import LorPdf from '../assets/Documents/AllLetters.pdf'


function CardInformation(props){
    const style = useSpring({opacity:1, from: {opacity:0}});
    if (props.link === resumePdf || props.link === LorPdf){
    return(
            <animated.div style={style} className='v-card-info'>
                <p className='v-card-title'>{props.title}</p>
                <p className="v-card-sub-title">{props.subTitle}</p>
                <a href={props.link} target='_blank' rel='noopener noreferrer'>View</a>
            </animated.div>
        
        );
    }
    else{
        return(
            <animated.div style={style} className='v-card-info'>
                <p className='v-card-title'>{props.title}</p>
                <p className="v-card-sub-title">{props.subTitle}</p>
                <Link to={props.link}>View</Link>
                <Route path={props.link} render={() => <AboutPage title={props.title}/>}/>
                <Route path={props.link} render={() => <WorkEx title={props.title}/>}/>
                <Route path={props.link} render={() => <PubConPage title={props.title}/>}/>
            </animated.div>
        
        );
    }
}

export default CardInformation;