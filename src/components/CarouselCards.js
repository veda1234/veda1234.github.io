import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

import MainPage from '../assets/images/CAST/MainPage.png'
import AllPlots from '../assets/images/CAST/AllPlots.png'
import DataBase from '../assets/images/CAST/DataBase.png'
import Computations from '../assets/images/CAST/Computations.png'
import Credits from '../assets/images/CAST/Credits.png'
import Scatterplot from '../assets/images/CAST/Scatterplot.png'
import Toolboxes from '../assets/images/CAST/Toolboxes.png'
import SingleComputation from '../assets/images/CAST/SingleComputation.png'

export default function CarouselCards(){
    return(
  <Carousel>
  <Carousel.Item>
    <img className="d-block w-100" src={MainPage} alt="MainPage slide"/>
  </Carousel.Item>
  <Carousel.Item>
    <img className="d-block w-100" src={Toolboxes} alt="Toolboxes slide"/>
  </Carousel.Item>
  <Carousel.Item>
    <img className="d-block w-100" src={AllPlots} alt="AllPlots slide"/>
  </Carousel.Item>
  <Carousel.Item>
    <img className="d-block w-100" src={DataBase} alt="DataBase slide"/>
  </Carousel.Item>
  <Carousel.Item>
    <img className="d-block w-100" src={SingleComputation} alt="SingleComputation slide"/>
  </Carousel.Item>
  <Carousel.Item>
    <img className="d-block w-100" src={Scatterplot} alt="Scatterplot slide"/>
  </Carousel.Item>
  <Carousel.Item>
    <img className="d-block w-100" src={Credits} alt="Credits slide"/>
  </Carousel.Item>
  <Carousel.Item>
    <img className="d-block w-100" src={Computations} alt="Computations slide"/>
  </Carousel.Item>
</Carousel>);

}