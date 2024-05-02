import React from "react"
import { useState } from "react"
import axios from "axios"

import "../styles/Modal.scss"
import { IoMdClose } from "react-icons/io"
import { TextField } from "@mui/material"
import { FormControl } from "@mui/base"

// Source:
// https://blog.openreplay.com/creating-easy-custom-modals-with-react/

const Modal = ({ isModalOpen, onClose }) => {
  function handlePostSubmission(e, onClose) {
    e.preventDefault()
    // TODO ----
    // HAVE IT NOT SUBMIT IF THE TITLE IS NOT PRESENT
    axios
      .post(
        "http://localhost:3000/api/auth/post",
        {
          title,
          body,
          media,
          UserId,
          // do i have to find the userID here?
        },
        {
          //Adding token to the request
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log("worked")

        // close the modal after a post has been submitted
        onClose()
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const [title, setPostTitle] = useState({})
  const [body, setPostBody] = useState({})
  const [media, setPostMedia] = useState({})
  const [UserId, setPostUserId] = useState(2)

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
          <FormControl className="modal-form">
            <TextField
              method="post"
              required
              id="standard-required"
              label="Title"
              variant="standard"
              onChange={(e) => setPostTitle(e.target.value)}
            />
            <TextField
              id="outlined-multiline-static"
              label="Post"
              multiline
              rows={10}
              onChange={(e) => setPostBody(e.target.value)}
            />

            <input
              accept="image/*"
              //   className={classes.input}
              //   style={{ display: "none" }}
              id="raised-button-file"
              multiple
              type="file"
              onChange={(e) => setPostMedia("e.target.value")}
            />
            {/* <label htmlFor="raised-button-file">
              <Button
                variant="raised"
                component="span"
                // className={classes.button}
              >
                Upload
              </Button>
            </label> */}
            <div className="modal-button text-end">
              <button onClick={(e) => handlePostSubmission(e, onClose)}>
                {"Post"}
              </button>
            </div>
          </FormControl>
        </main>
      </article>
    </section>
  )
}

export default Modal
