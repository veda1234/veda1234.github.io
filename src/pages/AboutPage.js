import React from 'react';

import HeroPage from '../components/Hero';
import AllContent from '../components/AllContent'

function AboutPage(props){
    window.scrollTo(0, 0);
    return(
        <div>
        <HeroPage title={props.title}/>
            <AllContent>
            <p>Hi, my name is Vedaanti Baliga. I am a full stack developer and I have an enthusiasm for Data Science. I am currently pursuing my 
            Master of Science in Applied Data Science from the <a href='https://www.usc.edu/' target='_blank' rel='noopener noreferrer'>University of 
            Southern California</a></p>
            <p>I am skilled in languages 
            like Python, Java, C++, C. I have worked with Flask, Django, .NET, React.js, MySQL, Redis, Docker, Git and have done 
            deployment work as well.</p>
            <p>I also have interest in the stock market, wherein I have done basic algorithmic trading strategies - creating technical 
            indicators(VWAP, EMA etc), stop losses, backtesting etc with Python.
            </p>
            <p>I would love to be a part of a team/project/company where I can contribute, showcase my consistency and abilities. I love learning
            new things and I am quite flexible when it comes to working with new technologies.
            </p>
            </AllContent>
        </div>
    );
}

export default AboutPage