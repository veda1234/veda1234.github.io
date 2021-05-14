import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import VedaantiPortfolioPic from '../assets/images/Vedaanti-Portfolio-Pic.jpeg';
import CAST from '../assets/images/CAST-Website.png';
import Cards from '../components/Cards'
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
                    subTitle : 'My journey to become a Computer Engineer',
                    imgSrc : VedaantiPortfolioPic,
                    link : '/about',
                    selected : false
                },
                {
                    id : 1,
                    title : 'My Projects & Work experiences',
                    subTitle : 'Collection of the work that I have done till date and my resume',
                    imgSrc : CAST,
                    link : '/workex',
                    selected : false
                },
                {
                    id : 2,
                    title : 'Resume',
                    subTitle : 'My updated resume',
                    imgSrc : CAST,
                    link : resumePdf,
                    selected : false
                },
                {
                    id : 3,
                    title : 'My Achievements',
                    subTitle : 'Letters of recommendation and certificates that I have achieved upon project completion',
                    imgSrc : CAST,
                    link : LorPdf,
                    selected : false
                },
                {
                    id : 4,
                    title : 'Conferences and Publications',
                    subTitle : 'Projects submitted and accepted in conferences and publications',
                    imgSrc : CAST,
                    link : '/pubcon',
                    selected : false
                },
                {
                    id : 5,
                    title : 'Education',
                    subTitle : 'My school, undergraduate and masters',
                    imgSrc : CAST,
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