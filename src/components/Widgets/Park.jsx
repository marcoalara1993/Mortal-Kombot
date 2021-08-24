import React from 'react';
import Park from '../../images/Japan-Park.jpg'
import './Park.css'

const Parque = (props) => {    
    return <div >
        <img 
            className="img-park"
            src={Park} 
            alt="Parque Japones"
        />
    </div>
}

export default Parque;