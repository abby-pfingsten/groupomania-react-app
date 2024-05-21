import Header from "./Header"
import "../styles/Account.scss"
import axios from "axios"
import { useState, useEffect } from "react"
// import { useSearchParams } from "react-router-dom"

const Account = ({ isMobile }) => {
  // grab the name of the user
  let userObject = localStorage.getItem("userInfo")
  let userName = JSON.parse(userObject)[["name"]]
  let userId = JSON.parse(userObject)[["userId"]]
  let token = JSON.parse(userObject)[["token"]]

  const handleDeleteAccount = () => {
    // Implement delete account logic here
    alert("Account deletion logic goes here.")
  }

  const [userEmail, setUserEmail] = useState("")
  const [userCreation, setUserCreation] = useState("")

  useEffect(() => {
    function getOneUser() {
      axios
        .get("http://localhost:3000/api/auth/" + userId, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log("Successfully grabbed user information")

          setUserEmail(response.data.email)
          setUserCreation(response.data.createdAt)
        })
        .catch((error) => console.log(error))
    }
    getOneUser()
  }, [token, userId])

  const accountDate = new Date(userCreation).toUTCString()

  return (
    <>
      <Header isMobile={isMobile} />
      <div className="account-page">
        <div className="account-page__container">
          <h1>Account Details</h1>
          <div className="account-page__info">
            <p>
              <strong>Name:</strong> {userName}
            </p>
            <p>
              <strong>Email:</strong> {userEmail}
            </p>
            <p>
              <strong>Member since:</strong> {accountDate}
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
