import "../styles/Home.scss"
import Header from "./Header"
import userPosts from "../models/posts"
import "../styles/Posts.scss"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
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
  let userObject = localStorage.getItem("userToken")
  let userName = JSON.parse(userObject)[["name"]]

  return (
    <>
      <Header isMobile={isMobile, token} />
      <div className="home">
        <h1>Welcome, {userName} </h1>
        {/* <button className="home__button" onClick={() => setIsModalOpen(true)}>
          {isMobile ? faCirclePlusElement : "Create A Post"}
        </button> */}
        <Button
          variant="outlined"
          className="home__button"
          onClick={() => setIsModalOpen(true)}
        >
          {isMobile ? faCirclePlusElement : "Create A Post"}
        </Button>
      </div>
      <div className="posts-div">
        {userPosts.map((post, index) => (
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
