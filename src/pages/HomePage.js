import React from 'react';
import HeroPage from '../components/Hero';

function HomePage(props){
    return(
        <HeroPage title={props.title} subTitle={props.subTitle} text={props.text}></HeroPage>
    );
}

export default HomePage