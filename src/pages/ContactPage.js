import React from 'react';

import HeroPage from '../components/Hero';
import AllContent from '../components/AllContent'
import linkedin from '../assets/images/linkedin.png'
import gmail from '../assets/images/gmail.png'
import git from '../assets/images/git.png'

function ContactPage(props){
    window.scrollTo(0, 0);
    return(
        <div>
        <HeroPage subTitle="Let's connect"/>
        <AllContent>
            <p><img src={linkedin} alt='linkedin icon' width='20' height='20'/>&nbsp;LinkedIn : <a href='https://www.linkedin.com/in/vedaanti-baliga/' target='_blank' rel='noopener noreferrer'>https://www.linkedin.com/in/vedaanti-baliga/</a></p>
            <p><img src={gmail} alt='mail icon' width='20' height='20'/>&nbsp;Mail :  <a href='mailto:vedaantibaliga@gmail.com'>vedaantibaliga@gmail.com</a></p>
            <p><img src={git} alt='github icon' width='20' height='20'/>&nbsp;GitHub : <a href='https://github.com/veda1234' target='_blank' rel='noopener noreferrer'>https://github.com/veda1234</a></p>
        </AllContent>
        </div>
    );
}

export default ContactPage