import React from 'react';
import './Blog.css'
import { Blog1, Blog2, Blog3, C3 } from '../utils/allImg';
const Blog = () => {
    return (
        <div className='blog-sec'>
            <div className="container-width text-center">

                <h1 className="text-center team-head">Sidste <span className="orange">nyt</span></h1>
                <p className='gray-line'>Lorem ipsum dolor sit amet consectetur adipisicing elit Architecto.</p>
                <div className="curve new">
                    <img src={C3} alt="" />
                </div>
                <div className="blog-blocks">
                    <div className="indiv-blog">
                        <img src={Blog1} alt="" />
                        <div className="blog-content">
                            <h3>Ny Learning</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione sapiente, impedit necessitatibus sit quibusdam aliquid, qui libero autem quo explicabo tempora sint vel adipisci soluta aliquam illo, reprehenderit odit quia?</p>

                        </div>
                     </div>
                    <div className="indiv-blog">
                        <img src={Blog2} alt="" />
                        <div className="blog-content">
                            <h3>Test dit forbrug</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione sapiente, impedit necessitatibus sit quibusdam aliquid, qui libero autem quo explicabo tempora sint vel adipisci soluta aliquam illo, reprehenderit odit quia?</p>

                        </div>
                     </div>
                    <div className="indiv-blog">
                        <img src={Blog3} alt="" />
                        <div className="blog-content">
                            <h3>fa tjekket din varmepumpe</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione sapiente, impedit necessitatibus sit quibusdam aliquid, qui libero autem quo explicabo tempora sint vel adipisci soluta aliquam illo, reprehenderit odit quia?</p>

                        </div>
                     </div>


                </div>
                <br />
                <br />
                <button className="orange-btn">Flere nyheder...</button>
                </div>
        </div>
    );
}

export default Blog;
