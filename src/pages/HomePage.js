import React from 'react';
import Divisions from '../components/Divisions';
import HeroPage from '../components/Hero';

function HomePage(props){
    return(
        <div>
        <HeroPage title={props.title} subTitle={props.subTitle} text={props.text}/>
        <Divisions/>
        </div>
    );
}

export default HomePage;