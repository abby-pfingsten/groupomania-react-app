import Header from "./Header"
import "../styles/Account.scss"

const Account = () => {
  // grab the name of the user
  let userObject = localStorage.getItem("userInfo")
  let userName = JSON.parse(userObject)[["name"]]

  const handleDeleteAccount = () => {
    // Implement delete account logic here
    alert("Account deletion logic goes here.")
  }
  // return (
  //   <div>
  //     <Header />
  //     {userName}
  //   </div>
  // )

  return (
    <>
      <Header/>
      <div className="account-page">
        <div className="account-page__container">
          <h1>Account Details</h1>
          <div className="account-page__info">
            <p>
              <strong>Name:</strong> {userName}
            </p>
            <p>
              <strong>Email:</strong> johndoe@example.com
            </p>
            <p>
              <strong>Member since:</strong> January 2021
            </p>
          </div>
          <button
            className="account-page__delete-button"
            onClick={handleDeleteAccount}
          >
            Delete Account
          </button>
        </div>
      </div>
    </>
  )
}

export default Account
