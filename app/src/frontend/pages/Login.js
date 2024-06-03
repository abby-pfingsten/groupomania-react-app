import SignupLogin from "../components/SignupLogin"
import AccountHeader from "./AccountHeader"
import "../styles/AccountHeader.scss"

function Login({ isMobile, accountActive, setAccountActive }) {
  return (
    <>
      <AccountHeader />
      <SignupLogin
        type="Login"
        accountActive={accountActive}
        setAccountActive={setAccountActive}
      />
    </>
  )
}

export default Login
