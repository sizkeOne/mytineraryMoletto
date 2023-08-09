import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Carrousel.css'


import SlideCarrousel from '../CarrouselSlide/SlideCarrousel';

const images = [
  [
{"url": "./public/City1.jpg", "name":"Paris" },
{"url": "./public/City2.jpg", "name":"Venecia" },
{"url": "./public/City3.jpg", "name":"Rio de Janeiro" },
{"url": "./public/City4.jpg", "name":"Roma" }
  ],
  [{"url": "./public/City5.jpg", "name":"Mendoza" },
  {"url": "./public/City13.jpg", "name":"Londres" },
  {"url": "./public/City7.jpg", "name":"Rio Negro" },
  {"url": "./public/City8.jpg", "name":"Misiones" }
    ],
    [{"url": "./public/City9.jpg", "name":"Ushuaia" },
    {"url": "./public/City10.jpg", "name":"Grecia" },
    {"url": "./public/City11.jpg", "name":"Medellin" },
    {"url": "./public/City12.jpg", "name":"Lima" }
      ]
]

const Carrousel = () => {
  return (
    <div className='CarrouselPics'>
      <div className="textoCarrousel">
        <h1>POPULAR MY TINERARYS</h1>
        </div>
    <Carousel>
      <Carousel.Item>
   
           <SlideCarrousel imageUrls={images[0]}/>
            
      </Carousel.Item>

      <Carousel.Item>
   
   <SlideCarrousel imageUrls={images[1]}/>
    
</Carousel.Item>
<Carousel.Item>
   
   <SlideCarrousel imageUrls={images[2]}/>
    
</Carousel.Item>


    </Carousel>
    </div>
  );
}
export default Carrousel;