import "../styles/Home.scss"
import Header from "./Header"
import userPosts from "../models/posts"
import axios from "axios"
import "../styles/Posts.scss"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons"
import { useState, useEffect } from "react"
import { Button } from "@mui/base"
import Modal from "../components/Modal"

function Home({ isMobile }) {
  const faCirclePlusElement = <FontAwesomeIcon icon={faCirclePlus} />

  // determine if the modal is open or closed
  const [isModalOpen, setIsModalOpen] = useState(false)
  const closeModal = () => {
    setIsModalOpen(false)
  }

  // grab the name of the user
  let userObject = localStorage.getItem("userInfo")
  let userName = JSON.parse(userObject)[["name"]]

  // function getAllPosts() {
  //   axios.get("http://localhost:3000/api/auth/").then((response) => {
  //     console.log("Successfully grabbed all posts")
  //   })
  // }

  const userInfo = localStorage.getItem("userInfo")
  const token = JSON.parse(userInfo)[["token"]]

  const [userPosts2, setUserPosts] = useState([])
  useEffect(() => {
    // fetchData()
    function getAllPosts() {
      axios
        .get("http://localhost:3000/api/auth/getposts", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log("Successfully grabbed all posts")
          console.log(response.data)
          setUserPosts(response.data)
        })
        .catch((error) => console.log(error))
    }
    getAllPosts()
    // const userPosts = getAllPosts()
    //Runs on every render
  }, [token])

  // Define an asynchronous function 'fetchData'
  // const fetchData = async () => {
  //   // Send an HTTP GET request to the specified URL
  //   const response = await axios.get("http://localhost:3000/api/auth/getposts")

  //   // Log the response from the API to the console
  //   console.log("response", response)

  //   // Update the 'data' state with the data from the API response
  //   // setUserPosts(response.data)
  // }

  return (
    <>
      <Header isMobile={isMobile} />
      <div className="home">
        <h1>Welcome, {userName} </h1>
        <Button
          variant="outlined"
          className="home__button"
          onClick={() => setIsModalOpen(true)}
        >
          {isMobile ? faCirclePlusElement : "Create A Post"}
        </Button>
      </div>
      <div className="posts-div">
        {userPosts2.map((post, index) => (
          <Link key={`${post.title}-${index}`} className="posts-link">
            <section className="posts">
              <h2 className="posts__title">{post.title}</h2>
              <p className="posts__body">{post.body}</p>
              <div className="posts__media">{post.media}</div>
            </section>
          </Link>
        ))}
      </div>
      <section>
        <Modal isModalOpen={isModalOpen} onClose={closeModal} />
      </section>
      ;
    </>
  )
}

export default Home
