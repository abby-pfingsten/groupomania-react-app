import { Link } from "react-router-dom"
import textLogo from "../images/icon-left-font-monochrome-black.svg"

function AccountHeader() {
  return (
    <>
      <header className="header">
        <img
          src={textLogo}
          alt="Groupomania Logo"
          className="header__logo"
        ></img>
        <div className="header__links">
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </div>
      </header>{" "}
    </>
  )
}
export default AccountHeader
