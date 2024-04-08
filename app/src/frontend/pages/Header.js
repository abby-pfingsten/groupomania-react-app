import { Outlet, Link } from 'react-router-dom'
import '../styles/Header.scss'
import logo from '../images/icon-left-font.png'
import { useState } from 'react'

function Header() {
  const searchParams = new URL(document.URL)

  const urlParams = new URLSearchParams(window.location.search)

  const [searchText, setSearchText] = useState(urlParams.get('search') ?? '')

  // const urlParams = new URLSearchParams(window.location.search)

  // urlParams.set('order', 'date')

  // window.location.search = urlParams

  const onChangeSearchText = () => {
    if (searchText.length !== 0) {
      urlParams.set('search', searchText)

      window.location.search = urlParams
    } else {
      window.location.search = ''
    }
  }

  console.log(searchParams)

  return (
    <>
      <nav>
        <ul className="navigation-layout">
          <li>
            <Link to="/">
              <img src={logo} alt="Groupomania Logo"></img>
            </Link>
          </li>
          <li>
            {' '}
            <input
              type="text"
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
            />
            <button type="submit" onClick={onChangeSearchText}>
              Click Me{' '}
            </button>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
}

export default Header
