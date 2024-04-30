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
  const [isModalOpen, setIsModalOpen] = useState(false)
  const closeModal = () => {
    setIsModalOpen(false)
  }

  // grab the name of the user
  let userObject = localStorage.getItem("userToken")
  let userName = JSON.parse(userObject)[["name"]]

  return (
    <>
      <Header isMobile={isMobile} />
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
      {/* <Modal open={isOpen} onClose={() => setIsOpen(false)} className="modal">
        <Modal.Panel>
          <Modal.Title>Deactivate account</Modal.Title>
          <Modal.Description>
            This will permanently deactivate your account
          </Modal.Description>

          <p>
            Are you sure you want to deactivate your account? All of your data
            will be permanently removed. This action cannot be undone.
          </p>

          <button onClick={() => setIsOpen(false)}>Deactivate</button>
          <button onClick={() => setIsOpen(false)}>Cancel</button>
        </Modal.Panel>
      </Modal> */}
    </>
  )
}

export default Home
