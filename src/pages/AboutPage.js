import React from 'react';

import HeroPage from '../components/Hero';
import AllContent from '../components/AllContent'

function AboutPage(props){
    return(
        <div>
        <HeroPage title={props.title}/>
            <AllContent>
            <p>This is me</p>
            </AllContent>
        </div>
    );
}

export default AboutPage