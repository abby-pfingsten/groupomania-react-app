import "../styles/Home.scss"
import Header from "./Header"
import axios from "axios"
import "../styles/Posts.scss"
import { useState, useEffect } from "react"
import { faLinesLeaning } from "@fortawesome/free-solid-svg-icons"

function PostPage({ isMobile }) {
  // grab the token from local storage
  const userInfo = localStorage.getItem("userInfo")
  const token = JSON.parse(userInfo)[["token"]]
  const userId = JSON.parse(userInfo)[["userId"]]

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
  const [hasUserRead, setHasUsersRead] = useState(false)

  useEffect(() => {
    function getOnePost() {
      axios
        .get("http://localhost:3000/api/posts/" + postId, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log("Successfully grabbed one post")
          setSingleUserPost(response.data)
          console.log(typeof response.data.usersRead)
          console.log(response.data.usersRead)

          let exists = Object.values(response.data.usersRead).includes(userId)

          console.log(exists)
          if (exists) {
            setHasUsersRead(true)
            console.log("in if")
          } else {
            console.log("other if")
          }

          getFileExtension(response.data.media)
        })
        .catch((error) => console.log(error))
    }
    getOnePost()
  }, [token, postId])

  // formatting the date
  const postDate = new Date(singleUserPost.createdAt).toUTCString()

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
                  <div className="posts__audio">
                    <audio controls>
                      <source src={singleUserPost.media} type="audio/mp3" />
                    </audio>
                  </div>
                )
              case "mp4":
                return (
                  <div className="posts__video">
                    <video controls>
                      <source src={singleUserPost.media} type="video/mp4" />
                    </video>
                  </div>
                )
              case "jpg" || "png":
                return (
                  <div>
                    <img
                      className="posts__image"
                      src={singleUserPost.media}
                      alt="Users post"
                      // width="500"
                      // height="600"
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
