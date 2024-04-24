// import textLogo from "../images/icon-left-font-monochrome-black.svg"
import "../styles/sass/Signup.scss"
import AccountHeader from "./AccountHeader"
import SignupLogin from "../components/SignupLogin"

function Signup() {
  return (
    <>
      <AccountHeader />
      <SignupLogin type="Signup" />
    </>
  )
}

export default Signup
