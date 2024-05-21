import { Outlet, Link } from "react-router-dom"
import "../styles/Header.scss"
import textLogo from "../images/icon-left-font-monochrome-black.svg"
import iconLogo from "../images/icon.svg"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faX } from "@fortawesome/free-solid-svg-icons"

function Header({ isMobile, isModalOpen, setIsModalOpen }) {
  const [menuOpen, setMenuOpen] = useState(false)

  /* Font Awesome */
  const faBarsElement = <FontAwesomeIcon icon={faBars} />
  const faXElement = <FontAwesomeIcon icon={faX} />

  // // set menuOpen to opposite
  const handleClick = () => {
    setMenuOpen(!menuOpen)
  }
  const closeMobileMenu = () => {
    setMenuOpen(false)
  }

  // handle logout
  const handleLogout = () => {
    localStorage.clear()
  }

  return (
    <>
      <nav>
        <div className={"nav-layout"}>
          <Link to="/">
            <img
              className={`nav-layout__logo ${
                menuOpen && isMobile ? "hidden" : ""
              }`}
              src={isMobile ? iconLogo : textLogo}
              alt="Groupomania Logo"
            ></img>
          </Link>
          <div
            className={`nav_menu ${menuOpen ? "white-color" : ""}`}
            onClick={handleClick}
          >
            {menuOpen ? faXElement : faBarsElement}
          </div>
        </div>

        {menuOpen ? (
          <>
            <ul className="nav_menu__items menu open">
              <li className="nav_menu__links">
                <Link to="/" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav_menu__links">
                <Link to="/" onClick={closeMobileMenu}>
                  Create a Post
                </Link>
              </li>
              <li className="nav_menu__links">
                <Link to="/profile" onClick={closeMobileMenu}>
                  Account
                </Link>
              </li>
              <li className="nav_menu__links">
                <Link to="/auth/login" onClick={handleLogout}>
                  Logout
                </Link>
              </li>
            </ul>
          </>
        ) : (
          <></>
        )}
      </nav>
      <Outlet />
    </>
  )
}

export default Header
