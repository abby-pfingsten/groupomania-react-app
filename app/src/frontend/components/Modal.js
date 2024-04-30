import React from "react"
import "../styles/Modal.scss"
import { IoMdClose } from "react-icons/io"
import { TextField } from "@mui/material"
import { FormControl } from "@mui/base"

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
          <FormControl className="modal-form">
            <TextField
              method="post"
              required
              id="standard-required"
              label="Title"
              variant="standard"
            />
            <TextField
              id="outlined-multiline-static"
              label="Post"
              multiline
              rows={10}
            />

            <input
              accept="image/*"
              //   className={classes.input}
              //   style={{ display: "none" }}
              id="raised-button-file"
              multiple
              type="file"
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
              <button>{"Post"}</button>
            </div>
          </FormControl>
        </main>
      </article>
    </section>
  )
}

export default Modal
