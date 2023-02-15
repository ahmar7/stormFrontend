import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './Carousel.css'
const ImgCarousel = () => {

    const divStyle = {

        backgroundSize: 'cover',
        height: '85vh'
    }
    const btnStyle = {
        display: 'block',

    }
    
    const slideImages = [
        {
            url: "https://a-dotdevelopers.web.app/images/slider/1.jpg",
            caption: 'Slide 2',
            subtitle: "Lorem Ipsum sit ade",
            btn: "Nave"
            
        },
        {
            url: 'https://a-dotdevelopers.web.app/images/slider/2.jpg',
            caption: 'Hurting Service',
            subtitle: "Nor du ske dur",
            btn: "Kontackt us"


        },
        {
            url: 'https://a-dotdevelopers.web.app/images/slider/3.jpg',
            caption: 'Slide 3',
            subtitle: "Sit amedis ben",

            btn: "lorem ipsum"
        },
    ];

    return (
        <div>
            <div className="slide-container">
                <Slide>
                    {slideImages.map((slideImage, index) => (
                        <div key={index}>
                            <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>

                                <div className="overlay-slider" >
                                    <h1  >{slideImage.caption}</h1>
                                    <p className="subtitle">{slideImage.subtitle}</p>
                                    <button className='orange-btn' style={btnStyle}>{slideImage.btn}</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slide>
            </div>


        </div>
    );
}

export default ImgCarousel;
