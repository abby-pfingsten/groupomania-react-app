import { Link } from "react-router-dom"
import textLogo from "../images/icon-left-font-monochrome-black.svg"

function AccountHeader() {
  return (
    <>
      <header className="signup-header">
        <img
          src={textLogo}
          alt="Groupomania Logo"
          className="signup-header__logo"
        ></img>
      </header>{" "}
      <div>
        <Link to="/git stsignup">merr</Link>
      </div>
    </>
  )
}
export default AccountHeader
