import React from 'react';
import { Slide, User1, User2, User3, User4, User5, User6 } from '../utils/allImg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Testimonial.css'
const Testimonial = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false, 
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
    };
    return (
        <div className='testimonial-sec'>
            <div className="bg-img">
                <div className="test-overlay text-center">

                    <h1 className="text-center test-heading">Vores <span className="orange">Kunder siger</span></h1>
                    <p className="test-des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis fugiat et.</p>
                    <img className='text-center' src={Slide} alt="" />
                    {/* <div className="testimonial-block">
                        <div className="user-img"><img src={User1} alt="" /></div>
                    </div> */}
                   <div className="container-width">
                        <Slider {...settings}>
                           
                                <div className="slider-card">
                                <div className="testimonial-block">
                                    <div className="user-img"><img src={User1} alt="" /></div>
                                    <div className="content">
                                        <h3 className="red">
                                            Alisa Robertson
                                        </h3>
                                        <p className="orange">Happy  Client</p>
                                        <p className="gray top-m">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, enim fuga totam, ipsum hic dicta praesentium doloribus amet ut quidem nam veniam quam nostrum odit, mollitia qui cum. Quibusdam, voluptatem!</p>
                                    </div>
                                </div>
                                </div>
                                <div className="slider-card">
                                <div className="testimonial-block">
                                    <div className="user-img"><img src={User2} alt="" /></div>
                                    <div className="content">
                                        <h3 className="red">
                                            Alisa Robertson
                                        </h3>
                                        <p className="orange">Happy  Client</p>
                                        <p className="gray top-m">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, enim fuga totam, ipsum hic dicta praesentium doloribus amet ut quidem nam veniam quam nostrum odit, mollitia qui cum. Quibusdam, voluptatem!</p>
                                    </div>
                                </div>
                                </div>
                              <div className="slider-card">
                                <div className="testimonial-block">
                                    <div className="user-img"><img src={User3} alt="" /></div>
                                    <div className="content">
                                        <h3 className="red">
                                            Alisa Robertson
                                        </h3>
                                        <p className="orange">Happy  Client</p>
                                        <p className="gray top-m">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, enim fuga totam, ipsum hic dicta praesentium doloribus amet ut quidem nam veniam quam nostrum odit, mollitia qui cum. Quibusdam, voluptatem!</p>
                                    </div>
                                </div>
                              </div>
                               <div className="slider-card">
                                <div className="testimonial-block">
                                    <div className="user-img"><img src={User4} alt="" /></div>
                                    <div className="content">
                                        <h3 className="red">
                                            Alisa Robertson
                                        </h3>
                                        <p className="orange">Happy  Client</p>
                                        <p className="gray top-m">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, enim fuga totam, ipsum hic dicta praesentium doloribus amet ut quidem nam veniam quam nostrum odit, mollitia qui cum. Quibusdam, voluptatem!</p>
                                    </div>
                                </div>
                               </div>
                              <div className="slider-card">
                                <div className="testimonial-block">
                                    <div className="user-img"><img src={User5} alt="" /></div>
                                    <div className="content">
                                        <h3 className="red">
                                            Alisa Robertson
                                        </h3>
                                        <p className="orange">Happy  Client</p>
                                        <p className="gray top-m">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, enim fuga totam, ipsum hic dicta praesentium doloribus amet ut quidem nam veniam quam nostrum odit, mollitia qui cum. Quibusdam, voluptatem!</p>
                                    </div>
                                </div>
                              </div>
                               <div className="slider-card">
                                <div className="testimonial-block">
                                    <div className="user-img"><img src={User6} alt="" /></div>
                                    <div className="content">
                                        <h3 className="red">
                                            Alisa Robertson
                                        </h3>
                                        <p className="orange">Happy  Client</p>
                                        <p className="gray top-m">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, enim fuga totam, ipsum hic dicta praesentium doloribus amet ut quidem nam veniam quam nostrum odit, mollitia qui cum. Quibusdam, voluptatem!</p>
                                    </div>
                                </div>
                               </div>
                           
                           

                        </Slider>
                   </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;
