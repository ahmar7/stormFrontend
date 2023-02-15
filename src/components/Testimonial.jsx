import React from 'react';
import { Slide } from '../utils/allImg';
import './Testimonial.css'
const Testimonial = () => {
    return (
        <div className='testimonial-sec'> 
            <div className="bg-img">
                <div className="test-overlay text-center">

                    <h1 className="text-center test-heading">Vores <span className="orange">Kunder siger</span></h1>
<p className="test-des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis fugiat et.</p>
                    <img className='text-center' src={Slide} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Testimonial;
