import React from "react"
import "../styles/sass/Modal.scss"
import { IoMdClose } from "react-icons/io"

// Source:
// https://blog.openreplay.com/creating-easy-custom-modals-with-react/

const Modal = ({ isModalOpen, onClose }) => {
  if (isModalOpen !== true) {
    return null
  }
  return (
    <section className="modal">
      <article className="modal-content p-lg-4">
        <div className="exit-icon text-end">
          <IoMdClose onClick={onClose} />
        </div>
        <main className="modal-mainContents">
          <h5 className="modal-title">What would you like to share...</h5>
          <hr />
          <form className="modalText" method="post">
            <input
              type="text"
              name="post-title"
              label="sad"
              id="post-title"
            ></input>
            {/* <label>Content</label> */}
            <input type="text" name="post-title" id="post-title"></input>
          </form>
          <div className="modal-button text-end">
            <button>{"Post"}</button>
          </div>
        </main>
      </article>
    </section>
  )
}

export default Modal
