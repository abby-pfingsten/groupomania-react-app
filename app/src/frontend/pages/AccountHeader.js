import { Link } from "react-router-dom"
import textLogo from "../images/icon-left-font-monochrome-black.svg"
// import styled from "styled-components"



// const StyledLink = styled(Link)`
//   padding: 15px;
//   color: #8186a0;
//   text-decoration: none;
//   font-size: 18px;
// `

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
          <Link to="/auth/signup">Signup</Link>
          <Link to="/auth/login">Login</Link>
        </div>
      </header>{" "}
    </>
  )
}
export default AccountHeader
