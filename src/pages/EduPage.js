import React from 'react';
import {
    Route,
    Link
  } from "react-router-dom";

import HeroPage from '../components/Hero';
import AllContent from '../components/AllContent'
import WorkEx from '../pages/WorkEx'


function EduPage(props){
    window.scrollTo(0, 0);
    return(
        <div>
        <HeroPage title={props.title}/>
        <HeroPage subTitle='Higher Education - Physics, Chemistry, Maths and Computer Science'/>
            <AllContent>
                <p>School scores:</p>
                <ul>
                    <b><li>10th standard - 9.6 CGPA</li></b>
                    <b><li>12th standard - 88.2%</li></b>
                </ul>
                <p>I completed my schooling(from primary to higher education) from <a href='http://springdales.com/' target='_blank' rel='noopener noreferrer'>Sprindales School, Dhaula Kuan</a>. During this time 
                I learned visual basic, HTML, C++ and SQL in Computer science. I also made a crud ATM application as part of my major project in school. 
                </p>
            </AllContent>
        <HeroPage subTitle='Undergraduate - Bachelors in Technology, Information Technology'/>
        <AllContent>
            <p>College score:</p>
                <ul>
                    <b><li>Btech CGPA - 8.95</li></b>
                </ul>
                <p>I completed my undergraduate studies at <a href='https://jaipur.manipal.edu/' target='_blank' rel='noopener noreferrer'>Manipal University Jaipur, Rajasthan</a>. I started my journey in college by 
                participating in an all-girls coding competition which was one of the most memorable days. It was a very unique 
                competition wherein we had to solve a lot of questions which lead us to a treasure hunt. In my 5th semester, I made a 
                project in IoT where I developed a prototype for Smart Crop Management System (SCMS) using Raspberry Pi by working with 
                Arduino, humidity, and rain sensors along with two of my teammates. Our project was one of the best <b>IoT</b> projects in the 
                semester and was submitted as a <a href='https://startupscope.org/Technical_Session.pdf' target='_blank' rel='noopener noreferrer'>start-up scope</a> idea.
                </p>
                <p>During the 6th semester, I made a project wherein I worked on researching and learning about the <b>Vehicular Ad Hoc 
                Network(VANET)</b>. I learned the basics of NS3, NetAnim, Wireshark and developed a comparison study on routing. It was a 
                very challenging project for me as it involved advanced concepts that were difficult to comprehend. I and my teammates 
                received an A+ for the project.</p>
                <p>During the 7th semester, I was selected as a part of a <b>Dell Technologies Ltd.</b> hackathon that went on for 3 days. The 
                theme for the hackathon was ‘Machine Learning’ and we had to choose from the given topics. We chose to develop a predictive 
                algorithm to do market forecasting for products of Dell. The framework that we chose for this project was Flask 
                (this is where I was first introduced to this framework) which helped us immensely in integrating all the aspects of the 
                project. We had chosen were laptops as the product and aimed to predict the sales of a new technology-based laptop. 
                After a lot of research, we used an innovative potential model for assigning scores to the new technology that the laptop 
                would have. The algorithm was a success and got good reviews from the Dell engineers who had come to assess us.</p>
                <p>During my last semester, I did an internship with the <b>Indian Institute of Technology, Delhi(IITD)</b> on making a website 
                for the pre-assessment of groundwater contamination, more details can be found in the <Link to='/workex' target='_blank' rel='noopener noreferrer'>My Projects &amp; Work experiences </Link><Route path='/workex' render={() => <WorkEx title={props.title}/>}/>section. I submitted a detailed report and gave a presentation for the same as 
                part of my final semester assessment. My teachers were extremely impressed by the uniqueness and usefulness of the project 
                and I gave me a 10 GPA for the semester.</p>
            </AllContent>
            <HeroPage subTitle='Masters - MS in Applied Data Science'/>
            <AllContent>I would be going for my master’s to the <a href='https://www.usc.edu/' target='_blank' rel='noopener noreferrer'>University of Southern California</a>, in Fall '21.</AllContent>
            <HeroPage subTitle='Test Scores'/>
            <AllContent>
                <p>GRE Score : 311</p>
                <p>TOEFL Score : 104</p>
            </AllContent>
            <HeroPage subTitle='Volunteer work'/>
            <AllContent>
            I completed 2 years of community service during the last 2 years of my schooling. I went to places like Tamana Special School 
            and volunteered there. During my undergraduate I volunteered at the <a href='http://www.nabdelhi.in/' target='_blank' rel='noopener noreferrer'>National Association for the Blind(NAB)</a> where I used to 
            interact and help differently abled children. I also contributed to the Sugamya Pustakalaya, which is an online talking book 
            library that aims to provide free books to differently abled persons around the globe.
            </AllContent>
        </div>
    );
}

export default EduPage