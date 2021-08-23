import React from 'react';
import Park from '../../images/Japan-Park.jpg'
import './SecondQuestion.css'

const SecondQuestion = (props) => {    
    return <div >
        <img 
            className="img-park"
            src={Park} 
            alt="Parque Japones"
        />
    </div>
}

export default SecondQuestion;