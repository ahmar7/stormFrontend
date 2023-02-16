import React from 'react';
import { CurveIco, SeriveImg, Service1, Service2, Service3, Service4 } from '../utils/allImg';
import './Services.css'
const Services = () => {
    return (
        <div className='services-sec'>
            <div className="container-width">
                <h1 className=''>Vores <span className="orange">services</span></h1>
                <p className='gray-line'>Lorem ipsum dolor sit amet consectetur adipisicing elit Architecto cumque</p>
                <div className="curve">
                    <img src={CurveIco} alt="" />
                </div>
                <div className="service-flex">
                    <div className="service-blocks">
                       <div className="indiv-service  ">
                            <div className="service-ico"><img src={Service1} alt="" /></div>
                            <div className="service-desc">
                                <h3>Strom</h3>
                                <p>Lorem ipsum dolor sit amet cons, adipisicing elit. Necessitatibus in expedita laudantium. </p>
                            </div>
                       </div>
                       <div className="indiv-service left-mar">
                            <div className="service-ico"><img src={Service2} alt="" /></div>
                            <div className="service-desc">
                                <h3>Sikkerhed</h3>
                                <p>Lorem ipsum dolor sit amet cons, adipisicing elit. Necessitatibus in expedita laudantium. </p>
                            </div>
                       </div>
                        <div className="indiv-service  top-mar">
                            <div className="service-ico"><img src={Service3} alt="" /></div>
                            <div className="service-desc">
                                <h3>Air conditioning</h3>
                                <p>Lorem ipsum dolor sit amet cons, adipisicing elit. Necessitatibus in expedita laudantium. </p>
                            </div>
                       </div>
                        <div className="indiv-service top-mar  left-mar">
                            <div className="service-ico"><img src={Service4} alt="" /></div>
                            <div className="service-desc">
                                <h3>Varme</h3>
                                <p>Lorem ipsum dolor sit amet cons, adipisicing elit. Necessitatibus in expedita laudantium. </p>
                            </div>
                       </div>
                    </div>
                    <div className="service-img">
                        <img src={SeriveImg} alt="" />
                    </div>
                </div>
                <div className="book-form">
                  <div className="heading">
                        <h3>
                            <span className="orange">Book</span> <br />
                            service nu
                        </h3>
                  </div>
                  <div className="form">
                    <input className='firsr-child' type="text " placeholder='Dit navan' />
                    <input type="email "  placeholder='Dit Email' />
                    <input type="num " placeholder='Telefone nr.' />
                    <button className="orange-btn">Send</button>
                  </div>
                </div>
            </div>


        </div>
    );
}

export default Services;
