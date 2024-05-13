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
    
    // formatting the date
    const postDate = new Date(singleUserPost.createdAt).toUTCString()
    console.log(postDate)

  return (
    <>
      <Header isMobile={isMobile} />
      <div className="posts-div">
        <section className="posts">
          <h2 className="posts__title">{singleUserPost.title}</h2>
          <p className="posts__body">{singleUserPost.body}</p>
          {(() => {
            switch (mediaType) {
              case "mp3":
                return (
                  <div className="posts__media">
                    <audio controls>
                      <source src={singleUserPost.media} type="audio/mp3" />
                    </audio>
                  </div>
                )

              case "mp4":
                return (
                  <div className="posts__media">
                    <video width="320" height="240" controls>
                      <source src={singleUserPost.media} type="video/mp4" />
                    </video>
                  </div>
                )
              case "jpg":
                return (
                  <div className="posts__media">
                    <img
                      src={singleUserPost.media}
                      alt="Users post"
                      width="500"
                      height="600"
                    />
                  </div>
                )

              case "png":
                return (
                  <div className="posts__media">
                    <img
                      src={singleUserPost.media}
                      alt="Users post"
                      width="500"
                      height="600"
                    />
                  </div>
                )
              default:
                return null
            }
          })()}
          <div className="posts__date">{postDate}</div>
        </section>
      </div>
    </>
  )
}
export default PostPage
