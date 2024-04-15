import SignupLogin from "../components/SignupLogin"
import AccountHeader from "./AccountHeader"

function Login() {
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

export default Login
