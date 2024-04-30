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
          <div className="nav-layout__menu" onClick={handleClick}>
            <Link to="/profile">{click ? faXElement : faBarsElement} </Link>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default Header
