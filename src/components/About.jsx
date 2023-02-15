import React from 'react';
import './About.css'
const About = () => {
    return (
        <>
            <div className='about-us'>
                <div className="container-width text-center">
                    <h1 className='text-center'>Lidt om <span className="orange">STORM</span></h1>
                    <p className='gray'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto cumque perspiciatis dolores eligendi id, facilis cum, doloribus earum asperiores inventore obcaecati quo maiores quae, illo consequuntur qui pariatur non hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam enim non laborum, expedita perspiciatis laudantium numquam, exercitationem illo, excepturi voluptas nobis officia pariatur autem vitae voluptates! Unde, ab reprehenderit! Amet!</p>
                    <button className="orange-btn text-center">Laes mere</button>
                </div>

              
            </div>
           <div className="dark-gray below-sec">
                <div className="container-width text-center">
                    <h1 className='text-center white'>Skal du bruge <span className="orange">hjaelp</span> fra <span className="orange">STORM?</span></h1>
                    <p className='gray white'>Lorem ipsum dolor sit amet consectetur</p>
                    <button className="orange-btn text-center">Kontact us</button>
                </div>
           </div>
        </>
    );
}

export default About;
