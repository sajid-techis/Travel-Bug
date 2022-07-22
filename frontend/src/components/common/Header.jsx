import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.svg";
import MenuIcon from "../../assets/img/menu-icon.svg";

import { useEffect } from "react";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [temp, setTemp] = useState();

  const handleClick = (e) => {
    e.stopPropagation();

    setIsActive(!isActive);
  };

  useEffect(() => {
    window.onresize = function (e) {
      setTemp(window.innerWidth);
    };
  }, []);

  useEffect(() => {}, []);

  return (
    <>
      <header>
        <nav>
          <div class="logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>

          {temp < 540 ? (
            <div
              className="right-nav"
              onClick={(e) => {
                e.stopPropagation();
                setIsActive(false);
              }}
              style={{ display: "flex" }}
            >
              {isActive && (
                <>
                  <Link to="/">HOME</Link>
                  <a href="#wonders">WONDERS IN USA</a>
                  <a href="#attractions">TOURIST ATTRACTION</a>
                  <Link to="/favourites">FAVOURITES</Link>
                </>
              )}
            </div>
          ) : (
            <div className="right-nav" style={{}}>
              <Link to="/">HOME</Link>
              <a href="#wonders">WONDERS IN USA</a>
              <a href="#attractions">TOURIST ATTRACTION</a>
              <Link to="/favourites">FAVOURITES</Link>
            </div>
          )}
          <div className="mb-menu">
            {isActive ? (
              <div
                onClick={() => setIsActive(false)}
                style={{ cursor: "pointer" }}
              >
                X
              </div>
            ) : (
              <img src={MenuIcon} alt="menu" onClick={(e) => handleClick(e)} />
            )}
            <ul></ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
