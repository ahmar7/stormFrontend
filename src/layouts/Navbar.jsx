import React,{useState} from 'react';
import { IconToggle, LocationIco, Logo } from '../utils/allImg';
import './Navbar.css'
const Navbar = () => {
  const [navToggle, setnavToggle] = useState(true);
  let toggleNav=()=>{
    if(navToggle==false){
      setnavToggle(true)
    }else{
      setnavToggle(false)
    }
  }
  return (
    <div className='main-navbar'>
      <div className="container-width">
        <div className="upper-nav">
          <div className="logo-area">
            <img src={Logo} alt="" />
          </div>
          <div className="highlight-area">
            <ul className="highlight-ul">
              <li><img src={LocationIco} alt="" />
                <span>Strompern 1, 8500 Grenaa</span>
              </li>
              <li><img src={LocationIco} alt="" />
                <span>Mon - Son 9.00 - 18:00</span>
              </li>
              <li><img src={LocationIco} alt="" />
                <span>[45] 01 02 03 05</span>
              </li>
            </ul>
          </div>
        </div>
        <div className={navToggle ? "below-nav " : "below-nav no-radius"}>
          <div className="mobile-bar" onClick={toggleNav}><img src={IconToggle} alt="" /></div>
          <div className={navToggle ? "nav-links" :"show-it nav-links"}>
            <ul className='nav-ui'>
              <li className='active'>FORSIDE</li>
              <li>OM OS</li>
              <li >SERVICE</li>
              <li >FAQ</li>
              <li >NYHEDER</li>
              <li >KONTACKT OS</li>
            </ul>
          </div>
          <div className="nav-search">
            <input type="text" placeholder='Sog' />
            <span className="search-ico"><i class="fas fa-search"></i></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
