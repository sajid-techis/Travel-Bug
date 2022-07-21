import React, {useState} from "react";
import {Link} from 'react-router-dom'
import MenuIcon from "../../assets/img/menu-icon.svg";
import  logo  from '../../assets/img/logo.svg'

import { useEffect } from "react";


const Header = () => {
  const [isActive, setIsActive] = useState();

  const handleClick = () => {
    setIsActive(current => !current);
  };
  const [temp,setTemp]= useState()
  window.onresize = function(e) {
    setTemp(window.innerWidth)
  };

  useEffect(()=> {
    temp < 540 ? setIsActive(false) : setIsActive(true)
  }, [temp])


  return (
    <>
      <header>
        <nav>
          <div class="logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div
            class="right-nav"
            style={{
              display: isActive ? "flex" : "none",
            }}
          >
            <Link to="/">HOME</Link>
            {temp < 540 ? <br /> : null}
            <a href="#wonders">WONDERS IN USA</a>
            {temp < 540 ? <br /> : null}
            <a href="#attractions">TOURIST ATTRACTION</a>
            {temp < 540 ? <br /> : null}
            <Link to="/favourites">FAVOURITES</Link>
            {temp < 540 ? <br /> : null}
          </div>
          <div className="mb-menu">
            <img src={MenuIcon} alt="menu" onClick={handleClick} />
            <ul></ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
