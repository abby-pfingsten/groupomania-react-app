import SignupLogin from "../components/SignupLogin"
import AccountHeader from "./AccountHeader"
import "../styles/AccountHeader.scss"


function Login({isMobile}) {
  return (
    <>
      <AccountHeader  />
      <SignupLogin type="Login" />
    </>
  )
}

export default Login
