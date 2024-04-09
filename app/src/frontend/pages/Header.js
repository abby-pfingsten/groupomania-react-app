import { Outlet, Link } from 'react-router-dom'
import '../styles/sass/Header.scss'
import logo from '../images/icon-left-font-monochrome-black.svg'
import { useState } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Header() {
  const urlParams = new URLSearchParams(window.location.search)

  // this is to capture the state change of what
  // is being typed into the search box
  const [searchText, setSearchText] = useState(urlParams.get('search') ?? '')

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

  return (
    <>
      <nav>
        <ul className="navigation-layout">
          <li>
            <Link to="/">
              <img src={logo} alt="Groupomania Logo"></img>
            </Link>
          </li>
          <li className="navigation-layout__search">
            {' '}
            <input
              type="text"
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
            />
            <button type="submit" onClick={onChangeSearchText}>
              Search{' '}
            </button>
          </li>
          <li className="navigation-layout__profile">
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
}

export default Header
