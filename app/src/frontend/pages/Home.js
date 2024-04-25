import "../styles/sass/Home.scss"
import Header from "./Header"
import userPosts from "../models/posts"
import "../styles/sass/Posts.scss"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons"
import { Dialog as Modal } from "@headlessui/react"
import { useState } from "react"

function Home({ mobileHeader }) {
  const faCirclePlusElement = <FontAwesomeIcon icon={faCirclePlus} />
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Header mobileHeader={mobileHeader} />
      <div className="home">
        <h1>Welcome, Name of User</h1>
        <button className="home__button" onClick={() => setIsOpen(true)}>
          {mobileHeader ? faCirclePlusElement : "Create A Post"}
        </button>
      </div>
      <div className="posts-div">
        {userPosts.map((post, index) => (
          <Link key={`${post.title}-${index}`} className="posts-link">
            <section className="posts">
              <div className="posts__title">{post.title}</div>
              <div className="posts__body">{post.body}</div>
              <div className="posts__media">{post.media}</div>
            </section>
          </Link>
        ))}
      </div>
      <Modal open={isOpen} onClose={() => setIsOpen(false)} className="modal">
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
      </Modal>
    </>
  )
}

export default Home
