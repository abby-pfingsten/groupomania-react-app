// import textLogo from "../images/icon-left-font-monochrome-black.svg"
import "../styles/sass/_signup.scss"
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
