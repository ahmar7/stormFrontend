import React from 'react';
import { Logo } from '../utils/allImg';
import './footer.css'
const Footer = () => {
  return (
    <div className='footer-sec'>
      <div className="container-width footer-content">
        <div className="flex-footer">
          <div className="indiv-footer">
            <img className='footer-logo' src={Logo} alt="" />
            <p className='footer-desc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, reiciendis id magni recusandae ut deserunt corrupti rem, </p>
          </div>
          <div className="indiv-footer center-flex">
            <h3 className='footer-head'>Link</h3>
            <ul className="footer-ul">
              <li className="footer-link no-mar">
                <span>{">"} </span> FAQ
              </li>
              <li className="footer-link">
                <span>{">"} </span> Om os
              </li>
              <li className="footer-link">
                <span>{">"} </span> Kontact os
              </li>
              <li className="footer-link">
                <span>{">"} </span> Services
              </li>
            </ul>
          </div>
          <div className="indiv-footer">
            <h3 className='footer-head'>Kontact os</h3>
            <p className='footer-desc'><span className='bold'>Address: </span> Strompern 1, 8500 Grenaa</p>
            <p className='footer-desc'><span className='bold'>Telefon: </span> [45] 01 02 03 05</p>
            <p className='footer-desc'><span className='bold'>Email: </span> info@strom.dk</p>
          </div>
          <div className="indiv-footer">
            <h3 className='footer-head'>Nyhedsbrev</h3>
            <p className='footer-desc'> Lorem ipsum sit amed thed</p>
            <div className="footer-form">

              <input type="email" placeholder='Din Email' />
              <button className="orange-btn">Tilmeled</button>
            </div>
          </div>
        </div>
      </div>
        <hr className='hr' />
        <div className="copy-flex container-width">
          <p className='right-res'><span className="orange">Strom </span> 2017 All Right Resevered</p>
          <ul className="social-ul">
            <li>
            <a href="" className='s-link'> <i class="fa-brands fa-facebook"></i></a>
            </li>
            <li>
            <a href="" className='s-link'> <i class="fa-brands fa-twitter"></i></a>
            </li>
            <li>
            <a href="" className='s-link'> <i class="fa-brands fa-linkedin"></i></a>
            </li>
            <li>
            <a href="" className='s-link'> <i class="fa-brands fa-instagram"></i></a>
            </li>
          </ul>
        </div>
    </div>
  );
}

export default Footer;
