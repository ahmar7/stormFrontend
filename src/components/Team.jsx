import React from 'react';
import { C3, CurveIco, Slide, Team1, Team2, Team3, Team4 } from '../utils/allImg';
import './Team.css'
const Team = () => {
    return (
        <div className='team-sec'>
            <div className="container-width text-center">

                <h1 className="text-center team-head">Vores <span className="orange">Team</span></h1>
                <p className='gray-line'>Lorem ipsum dolor sit amet consectetur adipisicing elit Architecto.</p>
                <div className="curve new">
                    <img src={C3} alt="" />
                </div>
                <div className="team-img">
                    <div className="t-img">
                        <img src={Team1} alt="" />
                    </div>
                    <div className="t-img">
                        <img src={Team2} alt="" />
                    </div>
                    <div className="t-img">
                        <img src={Team3} alt="" />
                    </div>
                    <div className="t-img">
                        <img src={Team4} alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Team;
