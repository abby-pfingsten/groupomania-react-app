// import textLogo from "../images/icon-left-font-monochrome-black.svg"
import "../styles/sass/_signup.scss"
import AccountHeader from "./AccountHeader"
import SignupLogin from "../components/SignupLogin"

function Signup() {
  return (
    <>
      {/* <header className="signup-header">
        <img
          src={textLogo}
          alt="Groupomania Logo"
          className="signup-header__logo"
        ></img>
      </header> */}
      <AccountHeader />
      <SignupLogin />
    </>
  )
}

export default Signup
