import { Outlet, Link } from 'react-router-dom'
import '../styles/Layout.scss'
import logo from '../images/icon-left-font.png'

function Layout() {
  return (
    <>
      <nav>
        <ul className="navigation-layout">
          <li>
            <Link to="/">
              <img src={logo} alt="Groupomania Logo"></img>
            </Link>
          </li>
          {/* <li>
            <Link to="/blogs">Blogs</Link>
          </li> */}
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
}

export default Layout
