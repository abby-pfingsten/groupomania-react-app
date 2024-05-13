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
  // grab the token from local storage
  const userInfo = localStorage.getItem("userInfo")
  const token = JSON.parse(userInfo)[["token"]]

  // grab the post ID from the URl
  const postId = window.location.pathname.slice(1)

  // create a state variable to grab the new
  // single post information
  const [singleUserPost, setSingleUserPost] = useState([])

  // function to get the file extension
  function getFileExtension(filename) {
    if (filename) {
      const extension = filename.split(".").pop()
      setMediaType(extension)
    }
  }
  const [mediaType, setMediaType] = useState("")

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
          setSingleUserPost(response.data)

          getFileExtension(response.data.media)
          console.log(mediaType)
        })
        .catch((error) => console.log(error))
    }
    getOnePost()
  }, [token, postId])

  return (
    <>
      <Header isMobile={isMobile} />
      <div className="posts-div">
        <section className="posts">
          <h2 className="posts__title">{singleUserPost.title}</h2>
                  <p className="posts__body">{singleUserPost.body}</p>
                  
          <div className="posts__media">{singleUserPost.media}</div>
          <div className="posts__media">{singleUserPost.createdAt}</div>
        </section>
      </div>
    </>
  )
}
export default PostPage
