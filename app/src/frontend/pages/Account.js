import Header from "./Header"
import "../styles/Account.scss"
import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Account = ({ isMobile }) => {
  const navigate = useNavigate()

  // grab the name of the user
  let userObject = localStorage.getItem("userInfo")
  let userName = JSON.parse(userObject)[["name"]]
  let userId = JSON.parse(userObject)[["userId"]]
  let token = JSON.parse(userObject)[["token"]]

  const handleDeleteAccount = () => {
    function softDeleteUser() {
      axios
        .post("http://localhost:3000/api/auth/" + userId, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log("Successfully soft deleted user")
        })
        .catch((error) => console.log(error))
    }
    // when we soft-delete the user we also want to
    // navigate back to the signup page and clear
    // the local storage
    softDeleteUser()
    localStorage.clear()
    navigate("/auth/signup")
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
