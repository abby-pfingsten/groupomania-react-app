import { Outlet, Link } from "react-router-dom"
import "../styles/Nav.scss"
import textLogo from "../images/icon-left-font-monochrome-black.svg"
import iconLogo from "../images/icon.svg"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faX } from "@fortawesome/free-solid-svg-icons"

function Header({ isMobile }) {
  const [click, setClick] = useState(false)

  /* Font Awesome */
  const faBarsElement = <FontAwesomeIcon icon={faBars} />
  const faXElement = <FontAwesomeIcon icon={faX} />

  // // set click to opposite
  const handleClick = () => {
    setClick(!click)
  }

  const closeMobileMenu = () => {
    setClick(false)
  }

  return (
    <>
      <nav>
        <div className={"nav-layout"}>
          <Link to="/">
            <img
              className="nav-layout__logo"
              src={isMobile ? iconLogo : textLogo}
              alt="Groupomania Logo"
            ></img>
          </Link>
          <div className="nav_menu" onClick={handleClick}>
            {/* <Link to="/profile"> */}
            {click ? faXElement : faBarsElement}
            {/* </Link> */}
          </div>
          <ul className={click ? "nav_menu__open" : "nav_menu__closed"}>
            <li className="nav_menu_links">
              <Link to="/" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav_menu_links">
              <Link to="/" onClick={closeMobileMenu}>
                Create a Post
              </Link>
            </li>
            <li className="nav_menu_links">
              <Link to="/profile" onClick={closeMobileMenu}>
                Account
              </Link>
            </li>
            <li className="nav_menu_links">
              <Link to="/" onClick={closeMobileMenu}>
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default Header
