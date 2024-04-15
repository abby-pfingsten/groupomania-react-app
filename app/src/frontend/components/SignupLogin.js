function SignupLogin({ type }) {
  return (
    <div>
      <form className="signup-form">
        <label>
          Name:
          <input type="text"></input>
        </label>
        <label>
          Email:
          <input type="text"></input>
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
