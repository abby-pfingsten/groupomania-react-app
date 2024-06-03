// import textLogo from "../images/icon-left-font-monochrome-black.svg"
import "../styles/AccountHeader.scss"
import AccountHeader from "./AccountHeader"
import SignupLogin from "../components/SignupLogin"

function Signup({ isMobile, accountActive, setAccountActive }) {
  return (
    <>
      <AccountHeader />
      <SignupLogin
        type="Signup"
        accountActive={accountActive}
        setAccountActive={setAccountActive}
      />
    </>
  )
}

export default Signup
