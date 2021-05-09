import React from 'react';
import CardInformation from '../components/CardInformation'

function Cards(props){
    return(
        <div className='d-inline-block v-card' onClick={(e=>props.click(props.item))}>
            <img className='v-card-image' src={props.item.imgSrc} alt={props.item.imgSrc} />
            {props.item.selected && <CardInformation title={props.item.title} subTitle={props.item.subTitle} link={props.item.link}/>}
        </div>
    );

}

export default Cards;