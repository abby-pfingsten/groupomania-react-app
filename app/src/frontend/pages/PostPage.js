import "../styles/Home.scss"
import Header from "./Header"
import axios from "axios"
import "../styles/Posts.scss"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons"
import { useState, useEffect } from "react"
import { Button } from "@mui/base"
import Modal from "../components/Modal"

function PostPage({ isMobile }) {
  const userInfo = localStorage.getItem("userInfo")
  const token = JSON.parse(userInfo)[["token"]]

  const postId = window.location.pathname.slice(1)

  useEffect(() => {
    function getOnePost() {
      axios
        .get("http://localhost:3000/api/auth/" + postId, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log("Successfully grabbed one post")
          console.log(response.data)
          //   setUserPosts(response.data)
        })
        .catch((error) => console.log(error))
    }
    getOnePost()
  }, [token, postId])

  return (
    <>
      <Header isMobile={isMobile} />
      hello world
    </>
  )
}
export default PostPage
