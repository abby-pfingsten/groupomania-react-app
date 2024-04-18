import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function SignupLogin({ type }) {
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()

    if (type === "Login") {
      axios
        .post("http://localhost:3001/api/auth/login", { email, password })
        .then((response) => {
          // console.log()
          const token = response[["data"]]
          console.log(token)
          localStorage.setItem("userToken", JSON.stringify(token))

          navigate("/")
        })
        .catch((error) => {
          console.log(error)
          // for logging in, we want to send a message telling
          // the user that their email or password is wrong
          setLoginError(true)
        })
    } else {
      axios
        .post("http://localhost:3001/api/auth/signup", {
          name,
          email,
          password,
        })
        .then((response) => {
          navigate("/")
        })
        .catch((error) => {
          console.log(error)
          // in the signup method, we would only have an error
          // if the email was duplicated, so we want to show a message
          setEmailError(true)
        })
    }
  }
  const [name, setName] = useState({})
  const [email, setEmail] = useState({})
  const [password, setPassword] = useState({})
  const [emailError, setEmailError] = useState(false)
  const [loginError, setLoginError] = useState(false)

  return (
    <div>
      <form className="signup-form" method="post" onSubmit={handleSubmit}>
        {type === "Signup" ? (
          <>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={(e) => setName(e.target.value)}
            ></input>
          </>
        ) : (
          <> </>
        )}
        <label>Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <label>Password:</label>
        <input
          type="password"
          name="pasword"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        {emailError ? (
          <>
            <div>An account already exists with this email </div>
          </>
        ) : (
          <></>
        )}
        {loginError ? (
          <>
            <div>Your email or password is incorrect</div>
          </>
        ) : (
          <></>
        )}
        <button type="submit">{type}</button>
      </form>
    </div>
  )
}
export default SignupLogin
