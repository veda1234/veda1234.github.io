import React from 'react';
import {
    Route,
    Link
  } from "react-router-dom";

import HeroPage from '../components/Hero';
import AllContent from '../components/AllContent';
import CarouselCards from '../components/CarouselCards';
import PubConPage from './PublicationsConferences';
import LorPdf from '../assets/Documents/AllLetters.pdf'
import PikkalLor from '../assets/Documents/LOR_Vedaanti_Baliga.pdf'
import QbLor from '../assets/Documents/QuantBinaryLOR.pdf'
import SDSCertificate from '../assets/Documents/Samsung_IITD.pdf'
import SDSLOR from '../assets/Documents/Letter of Referral - Samsung SDS.pdf'
import SDSReport from '../assets/Documents/INTERNSHIP REPORT Samsung.pdf'

function WorkEx(props){
    window.scrollTo(0, 0);
    return(
        <div>
        <HeroPage title={props.title}/>
        <HeroPage subTitle='Research Experience'/>
        <br></br>
        <a href='https://github.com/CAST-IIT/CAST' target='_blank' rel='noopener noreferrer'><HeroPage subTitle='CAST - Contamination Assessment and Site management Tool'/></a>
            <AllContent>
                <CarouselCards/>
                <p className="p-0 d-flex justify-content-center" md={3}><b>Online version of CAST</b></p>
            <p><i>What is CAST ?</i></p>
            <p>CAST is a browser-based application made for the assessment of contaminated sites, it is open source and has an easy-to-use interface (which is not offered by any other software to date). To know more about this software in detail
            you can see the  <a href='https://prabhasyadav.github.io/CASTbook/intro.html' target='_blank' rel='noopener noreferrer'>online guide</a>(in development for the publication in revision). 
            </p>
            <p><i>What was my role in developing this software?</i></p>
            <p>I was the Technical lead for this project. I conceptualized and decided on all technical aspects of the project. 
            I did the full-stack development(v0.2, made 4 out of 6 toolboxes) for this project using the python-based microframework <a href='https://flask.palletsprojects.com/en/1.1.x/' target='_blank' rel='noopener noreferrer'>Flask</a>. 
            The <a href='http://www.cast.iitd.ac.in' target='_blank' rel='noopener noreferrer'>Online deployment (currently in development for phase 2 &amp; publication, desktop version) </a> 
            and <a href='https://github.com/CAST-IIT/CAST' target='_blank' rel='noopener noreferrer'>Offline version v0.2</a>(Github repo, with installation instructions) is now available.
            </p>
            <p>I developed :</p>
            <ul>
            <li>Offline versions : v0.1 and v0.2</li>
            <li>Online version : v0.1 on <a href='https://baadal.iitd.ac.in/baadal' target='_blank' rel='noopener noreferrer'>Baadal</a></li>
            </ul>
            <p><i>What all did I learn while developing this project?</i></p>
            <ul>
                <li>HTML5, CSS, Bootstrap</li>
                <li>JavaScript</li>
                <li>Structuring and cleaning data</li>
                <li>Data Visualisation: Matplotlib, Plotly, Seaborn</li>
                <li>MySQL and SQLAlchemy</li>
                <li>Flask</li>
                <li>Deploying on online servers</li>
                <li>Nginx and Gunicorn</li>
                <li>Deciding on the best suitable frameworks and libraries for a certain project</li>
                <li>Developing a project from scratch</li>
                <li>Conceptualizing  and understanding ideas to convert them into software (in this case groundwater contamination)</li>
                <li>Creating professional presentations to showcase a project</li>
                <li>Writing for a conference and a publication</li>
                <li>Patience</li>
            </ul>
            <p><i>My journey with CAST</i></p>
            <p>During the final semester of my bachelor's, I was offered an internship at the <b>Indian Institute of Technology</b>, Delhi where 
            professors had collaborated with <b>Technische Universität Dresden</b>, Germany to develop a thesis on groundwater contamination in 
            India and Europe. I then made this project a part of my bachelor thesis where I scored full marks. Following the success of the software, I was offered a 
            position at IIT Delhi as a <b>Senior Project Assistant(Technical)</b> for the completion of the same project.</p>
            <p>I learned full-stack for professional development and tried to develop a project that could encompass all the concepts that were given.
            I gave various presentations to professors at IITD as well as over video calls, internationally to professors at Technische Universität Dresden and later at the <b>University of Texas, Austin</b>(they
            are now in collaboration with this project as well) and improved the software taking each view into consideration. This helped me in improving
            my communication skills as well. A lot of edits and improvements later, we started to publicize the project. Over time, I learned how to prepare posters, abstracts, and manuscripts for CAST.</p>
            <p>I deployed CAST using Gunicorn and Nginx.</p>
            <p>After a year, CAST got accepted in a <Link to='/pubcon' target='_blank' rel='noopener noreferrer'>conference and is now currently in revision for publication</Link><Route path= "/pubcon" render={() => <PubConPage title={this.state.pubcon.title}/>}/>, <b>where I am one of the authors</b>. I even received <a href={LorPdf} target='_blank' rel='noopener noreferrer'> certificates and letters of recommendation for this project.</a>
            </p>
            </AllContent>
            <HeroPage subTitle='Startup Experiences'/>
            <a href='https://www.pikkal.com/about' target='_blank' rel='noopener noreferrer'><HeroPage subTitle='Pikkal &amp; Co.'/></a>
            <AllContent>
                <p><i>What was my role at Pikkal &amp; Co.?</i></p>
                <p>I worked as an intern (remotely) at the company and as a <b>lead</b> for the <b>AI chatbot</b> team. Our aim was to create a chatbot(MVP) 
                that could communicate with Pikkal's clients whenever they wished to. I had team lead meetings every week, where I had to 
                showcase the current product and the future timeline for it. From learning about chatbots to integration in slack to storing
                data temporarily with Redis and a lot many steps, we reached phase 1. Our MVP was ready and was being used in testing. </p>
                <p>After phase one with the chatbot, I was shifted to another project i.e. production for <b>voice dynamics</b>, a platform that was supposed to give 
                the company's clients a page for analytics and visualisations for their podcasts. I then helped the team to build 
                meaningful visualisations from the scripts of various podcasts. In order to do this, we first had to extract the topics 
                (topic generation) from the given scripts by using NLP and then finally take the statistics and results to make 
                suitable visualisations.</p>
                <p><i>What did I learn at Pikkal?</i></p>
                <ul>
                    <li>Building chatbots</li>
                    <li><a href='https://api.slack.com/' target='_blank' rel='noopener noreferrer'>Integrating chatbots to Slack(Slack Python SDK, Events API)</a></li>
                    <li>Docker</li>
                    <li>Gitlab</li>
                    <li>Virtual Box</li>
                    <li>Windows Subsystem for Linux</li>
                    <li>Redis</li>
                    <li>Vagrant</li>
                    <li>Charts.js</li>
                    <li>Basics of NLP</li>
                    <li>Leadership skills</li>
                    <li>Production level work</li>
                </ul>
                <p><i>My journey at Pikkal &amp; Co.</i></p>
                <p>Based in Singapore, the company consisted of people from all over the world. As a result, there was a language barrier as well,
                    so everyone had to be extremely patient and explain their doubts or ideas in a concise manner.
                    In the beginning, it was a bit hectic for me as it was my first time in a startup so whenever the timelines used to come, I used to be shocked. 
                    How can any product be made in such a short time? It is then when I learned the concept of MVP (Minimum Viable Product) which helped me in understanding the timelines. 
                    While the company was extremely strict about the timelines, the place promoted an incredible learning environment and resulted
                    in me learning a lot of things in a short time.
                </p>
                <p>I also learned how to effectively utilize criticism as well, to listen more carefully, and not constantly defend myself. In conclusion, 
                    I learned a lot in the process as well as contributed to two products that are today being used by the company currently. I also got a  <a href={PikkalLor} target='_blank' rel='noopener noreferrer'>letter of recommendation from the Founder and CEO.</a>
                </p>
            </AllContent>
            <a href='https://www.linkedin.com/company/quant-binary/about/' target='_blank' rel='noopener noreferrer'><HeroPage subTitle='QuantBinary'/></a>
            <AllContent>
            <p><i>What was my role at QuantBinary?</i></p>
            <p>I was hired in QuantBinary as an intern initially and was later <b>promoted to Machine Learning Engineer</b>. I was appointed as the <b>lead </b>
            for the very first team in the nascent startup. My responsibilities were to manage a system for organization and collaboration 
            of tasks (I created the management system in Airtable) regularly, hold regular stand-up calls, manage/help/guide the team, and 
            assign everyone tasks. I was mainly responsible for developing statistical and mathematical quantitative algorithmic trading 
            investment strategies, deploying, backtesting and testing them, then finally making their reports. I also did content generation for the 
            company’s Instagram page. This involved designing technical graphs, content writing, and research on various stocks.
            </p>
            <p><i>What did I learn at QuantBinary?</i></p>
                <ul>
                    <li>Basics of stock market</li>
                    <li>Fundamental and technical indicators</li>
                    <li>Statistical and mathematical fundamentals in finance</li>
                    <li>Developing algorithmic trading strategies in Python</li>
                    <li><a href='https://alpaca.markets/' target='_blank' rel='noopener noreferrer'>Alpaca API</a></li>
                    <li><a href='https://www.backtrader.com/' target='_blank' rel='noopener noreferrer'>Backtesting (using Backtrader)</a></li>
                    <li>Documentation</li>
                    <li>Content generation on social platforms</li>
                    <li>Deploying on PythonAnywhere</li>
                    <li>Creating a managment system (in this case Airtable)</li>
                    <li>Managing a team in a nascent startup</li>
                </ul>
            <p><i>My journey at QuantBinary</i></p>
            <p>Based in Silicon Valley, QuantBinary is a stealth-mode startup. My initial tasks were just to get myself familiar with the 
                stock market. Learning about the stock market made me realize that it is a whole new world that I had just started to 
                explore. As time went by I started to advance along the way by going from long-time investments to long-short trading to 
                volume-weighted average price indicators to finally making MVPs on Alpaca and backtesting them as well. Backtesting is a 
                concept that was new for me in the stock market and at the same time, it is not being used much at the moment. </p>
            <p>While the technical aspects were going well, the management portion of the job was relatively tougher for me. Solving 
            disagreements, clearing confusion, and motivating the teammates proved to be challenging. In conclusion, I learned how to 
            manage a team, the basics of the stock market and algorithmic trading, content generation, and quantitative trading stategies.
            I also got a  <a href={QbLor} target='_blank' rel='noopener noreferrer'>letter of recommendation from the Founder.</a>
            </p>
            </AllContent>
            <HeroPage subTitle='My first technical internship'/>
            <a href='https://www.samsungsds.com/en/index.html' target='_blank' rel='noopener noreferrer'><HeroPage subTitle='Samsung SDS'/></a>
            <AllContent>
            <p><i>What did I do in Samsung SDS?</i></p>
            <p>I was hired as a student trainee at Samsung during my third year in college(BTech in Information Technology). I worked with 
            the .NET team and started with testing their new live production site made for their service centers. I further started learning 
            .NET by developing a calculator (windows form) as a first step, an Employee Management system (windows form), and finally as a 
            finishing step, a Website for Employee Database Management.</p>
            <p><i>What did I learn at Samsung SDS?</i></p>
                <ul>
                    <li>Working on a professional level</li>
                    <li>ASP.NET </li>
                    <li>Creating simple interfaces</li>
                    <li>Basics of HTML, CSS and JavaScript</li>
                    <li>SQL</li>
                    <li>Testing a website in production</li>
                </ul>
                <p><i>My journey at Samsung SDS</i></p>
                <p>On my first day at Samsung SDS, I was a bit nervous as it was my first internship and I wanted to perform well. As soon as I 
                was assigned to the team, I was handed a big file of documentation which I was to go through. The documentation was extremely 
                detailed, with timelines, diagrams, and the SDLC for the project. It was a good experience to read it as it brought the concepts 
                that I studied in college to life. The live project that was going on at that time was a website for the Samsung service 
                centers. They were basically trying to generate tickets online for each customer that wanted service. While the objective 
                was simple, there were a lot of other components, like showing the closest available Samsung centers with this facility 
                (they created an interface for this), generating and canceling tickets as customers wanted, updating the database, and 
                assigning available timings. I was responsible for testing the website and reporting any bugs that came along. My second 
                task was to start learning .NET and then consequently make applications using it. I was initially stuck with the framework 
                as I had never done industrial-level production, but with a lot of help and guidance from the team lead, I picked up my 
                pace and made windows forms and web applications using .NET. </p>
                <p>This being my first internship was a very big stepping stone in my career as it gave me an opportunity to work amongst 
                skilled software engineers and learn a framework with their help. I received a  <a href={SDSCertificate} target='_blank' rel='noopener noreferrer'>certificate </a> 
                from the company and a  <a href={SDSLOR} target='_blank' rel='noopener noreferrer'>letter of 
                referral</a> from the team lead after the completion of my internship, I also submitted a  <a href={SDSReport} target='_blank' rel='noopener noreferrer'>
                report</a> for the work on .NET</p>
            </AllContent>
        </div>
    );
}

export default WorkEx;