function SignupLogin({ type }) {
  return (
    <div>
      <form className="signup-form">
        <label>
          Email:
          <input type="text" label="Username"></input>
        </label>
        <label>
          Password:
          <input type="text"></input>
        </label>
        <button type="submit">{type}</button>
      </form>
    </div>
  )
}
export default SignupLogin
