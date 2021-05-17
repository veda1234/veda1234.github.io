import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Cards from '../components/Cards'

import VedaantiPortfolioPic from '../assets/images/Vedaanti-Portfolio-Pic.jpeg';
import EducationIcon from '../assets/images/education.svg'
import AchievementIcon from '../assets/images/achievements.svg'
import WorkExIcon from '../assets/images/workex.svg'
import ResumeIcon from '../assets/images/resume.svg'
import PubconIcon from '../assets/images/publications.svg'

import resumePdf from '../assets/Documents/Resume_Vedaanti_Baliga.pdf'
import LorPdf from '../assets/Documents/AllLetters.pdf'


class Divisions extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items : [
                {
                    id : 0,
                    title : 'About me',
                    imgSrc : VedaantiPortfolioPic,
                    link : '/about',
                    selected : false
                },
                {
                    id : 1,
                    title : 'Projects & Work experiences',
                    subTitle : 'Summary of all my projects and work experiences',
                    imgSrc : WorkExIcon,
                    link : '/workex',
                    selected : false
                },
                {
                    id : 2,
                    title : 'Resume',
                    subTitle : 'My updated resume',
                    imgSrc : ResumeIcon,
                    link : resumePdf,
                    selected : false
                },
                {
                    id : 3,
                    title : 'Achievements',
                    subTitle : 'Letters of recommendation and certificates that I have achieved upon project completion',
                    imgSrc : AchievementIcon,
                    link : LorPdf,
                    selected : false
                },
                {
                    id : 4,
                    title : 'Conferences and Publications',
                    subTitle : 'Projects submitted and accepted in conferences and publications',
                    imgSrc : PubconIcon,
                    link : '/pubcon',
                    selected : false
                },
                {
                    id : 5,
                    title : 'Education',
                    subTitle : 'My school, undergraduate, masters, volunteering work, GRE and TOEFL scores',
                    imgSrc : EducationIcon,
                    link : '/edu',
                    selected : false
                }
            ]

        }
    }
    handleCardClick = (id,card) =>{
        let items = [...this.state.items];
        items[id].selected = items[id].selected ? false : true
        items.forEach(item=>{
            if (item.id !== id){
                item.selected = false;
            } 
        });
        this.setState({
            items
        });
    }
    makeItems = (items)=>{
        return items.map(item=>{
            return <Cards item={item} click={(e=> this.handleCardClick(item.id,e))} key={item.id}/>
        }
            )
    }
    render(){
        return(
            <Container fluid={true}>
                <Row md={4} className='justify-content-around'>
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Divisions;