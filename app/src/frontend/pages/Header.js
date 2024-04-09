import { Outlet, Link } from 'react-router-dom'
import '../styles/sass/Header.scss'
import logo from '../images/icon-left-font-monochrome-black.svg'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons'

function Header() {
  /* Constants */
  const urlParams = new URLSearchParams(window.location.search)
  const [searchText, setSearchText] = useState(urlParams.get('search') ?? '')
  const [click, setClick] = useState(false)
  const [searchBar, setSearchBar] = useState(true)

  /* Font Awesome */
  const faBarsElement = <FontAwesomeIcon icon={faBars} />
  const faXElement = <FontAwesomeIcon icon={faX} />

  /* Functions */
  // this is to capture the actual text and update
  // the url
  const onChangeSearchText = () => {
    if (searchText.length !== 0) {
      urlParams.set('search', searchText)

      window.location.search = urlParams
    } else {
      window.location.search = ''
    }
  }
  // set click to opposite
  const handleClick = () => {
    setClick(!click)
  }

  const showSearchBar = () => {
    if (window.innerWidth <= 960) {
      setSearchBar(false)
    } else {
      setSearchBar(true)
    }
  }

  useEffect(() => {
    showSearchBar()
  }, [])

  window.addEventListener('resize', showSearchBar)

  return (
    <>
      <nav>
        <ul className="nav-layout">
          <li>
            <Link to="/">
              <img src={logo} alt="Groupomania Logo"></img>
            </Link>
          </li>
          <li
            className={searchBar ? 'nav-layout__search' : 'nav-layout__searchm'}
          >
            {' '}
            <input
              placeholder="Search Groupomania..."
              type="text"
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
            />
            <button type="submit" onClick={onChangeSearchText}>
              Search{' '}
            </button>
          </li>
          <li className="nav-layout__profile" onClick={handleClick}>
            <Link to="/profile">{click ? faXElement : faBarsElement} </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
}

export default Header
