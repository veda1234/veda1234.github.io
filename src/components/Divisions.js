import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import VedaantiPortfolioPic from '../assets/images/Vedaanti-Portfolio-Pic.jpeg';
import CAST from '../assets/images/CAST-Website.png';
// import Pikkal from '../assets/images/Pikkal.png';
import Cards from '../components/Cards'


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
                    title : 'My Projects/Work experiences',
                    subTitle : 'Collection of the work that I have done till date and my resume',
                    imgSrc : CAST,
                    link : '/contact',
                    selected : false
                },
                {
                    id : 2,
                    title : 'Letter of recommendations',
                    subTitle : 'Letters and certificates that I have achieved upon project completion',
                    imgSrc : CAST,
                    link : 'https://google.com',
                    selected : false
                },
                {
                    id : 3,
                    title : 'Letter of recommendations',
                    subTitle : 'Letters and certificates that I have achieved upon project completion',
                    imgSrc : CAST,
                    link : 'https://google.com',
                    selected : false
                },
                {
                    id : 4,
                    title : 'Letter of recommendations',
                    subTitle : 'Letters and certificates that I have achieved upon project completion',
                    imgSrc : CAST,
                    link : 'https://google.com',
                    selected : false
                },
                {
                    id : 5,
                    title : 'Letter of recommendations',
                    subTitle : 'Letters and certificates that I have achieved upon project completion',
                    imgSrc : CAST,
                    link : 'https://google.com',
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