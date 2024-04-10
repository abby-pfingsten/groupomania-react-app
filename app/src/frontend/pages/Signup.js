import textLogo from "../images/icon-left-font-monochrome-black.svg"
import "../styles/sass/_signup.scss"

function Signup() {
  return (
    <>
      <header className="signup-header">
        <img
          src={textLogo}
          alt="Groupomania Logo"
          className="signup-header__logo"
        ></img>
      </header>
      <div className="signup-form">
        <form className="signup-form">
          <label>
            Email:
            <input type="text" label="Username"></input>
          </label>
          <label>
            Password:
            <input type="text"></input>
          </label>
        </form>
      </div>
    </>
  )
}

export default Signup
