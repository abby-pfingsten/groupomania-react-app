import { Outlet, Link } from "react-router-dom"
import "../styles/sass/_header.scss"
import textLogo from "../images/icon-left-font-monochrome-black.svg"
import iconLogo from "../images/icon.svg"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faX } from "@fortawesome/free-solid-svg-icons"
// import { icon } from '@fortawesome/fontawesome-svg-core'

function Header() {
  /* Constants */
  const urlParams = new URLSearchParams(window.location.search)
  const [searchText, setSearchText] = useState(urlParams.get("search") ?? "")
  const [click, setClick] = useState(false)
  const [mobileHeader, setMobileHeader] = useState(false)

  /* Font Awesome */
  const faBarsElement = <FontAwesomeIcon icon={faBars} />
  const faXElement = <FontAwesomeIcon icon={faX} />

  /* Functions */
  // this is to capture the actual text and update
  // the url
  const onChangeSearchText = () => {
    if (searchText.length !== 0) {
      urlParams.set("search", searchText)

      window.location.search = urlParams
    } else {
      window.location.search = ""
    }
  }
  // set click to opposite
  const handleClick = () => {
    setClick(!click)
  }

  const showMobileHeader = () => {
    if (window.innerWidth <= 960) {
      setMobileHeader(true)
    } else {
      setMobileHeader(false)
    }
  }

  window.addEventListener("resize", showMobileHeader)

  return (
    <>
      <nav >
        <div
          className={
            mobileHeader ? "nav-layout nav-layout__mobile" : "nav-layout"
          }
        >
          <Link to="/" className="nav-layout__logo">
            <img
              src={mobileHeader ? iconLogo : textLogo}
              alt="Groupomania Logo"
            ></img>
          </Link>

          <div
            className={
              mobileHeader ? "nav-layout__search-mobile" : "nav-layout__search"
            }
          >
            {" "}
            {/* <input
              placeholder="Search Groupomania..."
              type="text"
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
            />
            <button type="submit" onClick={onChangeSearchText}>
              Search{" "}
            </button> */}
          </div>
          <div className="nav-layout__menu" onClick={handleClick}>
            <Link to="/profile">{click ? faXElement : faBarsElement} </Link>
          </div>
          {/* 
          <ul
            className={
              mobileHeader ? "nav-layout nav-layout__mobile" : "nav-layout"
            }
          > */}

          {/* <li className="nav-layout__profile" onClick={handleClick}>
              <Link to="/profile">{click ? faXElement : faBarsElement} </Link>
            </li> */}
          {/* </ul> */}
        </div>
      </nav>

      <Outlet />
    </>
  )
}

export default Header
