import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


function SignupLogin({ type }) {

      const navigate = useNavigate()

  function handleSubmit(e) {
    // Prevent the default submit and page reload
    e.preventDefault()
    // Handle validations
    axios
      .post("http://localhost:3001/api/auth/login", { name, email, password })
      .then((response) => {
        console.log(response)
        // Handle response
      })
  }
  const [name, setName] = useState({})
  const [email, setEmail] = useState({})
  const [password, setPassword] = useState({})

  return (
    <div>
      <form className="signup-form" method="post" onSubmit={handleSubmit}>
        {/* how do i conditionally render this for signup */}
        <label>Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={(e) => setName(e.target.value)}
        ></input>
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
        <button type="submit" onClick={() => navigate("/")}>
          {type}
        </button>
      </form>
    </div>
    // <div>
    //   <form action="" id="login" method="post" onSubmit={handleSubmit}>
    //     <h1>Login</h1>
    //     <p className="item">
    //       <label> Name </label>
    //       <input
    //         // type="password"
    //         // name="password"
    //         id="name"
    //         value={name}
    //         onChange={(e) => setName(e.target.value)}
    //       />
    //     </p>
    //     <p className="item">
    //       <label> Email </label>
    //       <input
    //         type="email"
    //         name="email"
    //         id="email"
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //       />
    //     </p>
    //     <p className="item">
    //       <label > Password </label>
    //       <input
    //         type="password"
    //         name="password"
    //         id="password"
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //       />
    //     </p>
    //     <p className="item">
    //       <input type="submit" value="Login" />
    //     </p>
    //   </form>
    // </div>
  )
}
export default SignupLogin
