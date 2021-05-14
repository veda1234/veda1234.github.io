import React from 'react';

import HeroPage from '../components/Hero';
import AllContent from '../components/AllContent'

function PubConPage(props){
    return(
        <div>
        <HeroPage title={props.title}/>
            <AllContent>
            <ol>
            <li><a href='https://github.com/CAST-IIT/CAST' target='_blank' rel='noopener noreferrer'>Yadav, P. K., Birla, S., Baliga, V., Liedl, R. Chahar, B. R., and Werth, C., Contamination Assessment and 
                Site-management Tool (CAST) - A browser-based tool for site assessment, Groundwater (in revision)</a></li>
                <li>Birla, S., Baliga, V., Yadav, P. K., Soni, V., Liedl, R., and Chahar, B. R., A browser-based user interface for the 
                estimation of steady state plume lengths. <a href='https://www.bayceer.uni-bayreuth.de/FH-DGGV-2020/en/prog/bayconf/beitrag_detail.php?id_obj=18101' target='_blank' rel='noopener noreferrer'>
                FHDGG- 2020 Conference.</a></li>
            </ol>
            </AllContent>
        </div>
    );
}

export default PubConPage