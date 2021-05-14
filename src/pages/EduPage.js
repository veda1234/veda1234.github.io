import React from 'react';

import HeroPage from '../components/Hero';
import AllContent from '../components/AllContent'

function EduPage(props){
    return(
        <div>
        <HeroPage title={props.title}/>
            <AllContent>
            </AllContent>
        </div>
    );
}

export default EduPage