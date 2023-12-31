import React from 'react';
import './SlideCarrousel.css';

const SlideCarrousel = ({ imageUrls }) => {
    return (

            
                <div className="conteinerImages">
                    {imageUrls.map((imageUrl, index) => (
            <div className="conteinerPic">
        <img key={index} src={imageUrl.url} alt={`Image ${index}`} />
        <div className='textCard'>
        <h3>{imageUrl.name} </h3>
        </div>
        </div>
))}
                </div>
        
    );
};


export default SlideCarrousel;
