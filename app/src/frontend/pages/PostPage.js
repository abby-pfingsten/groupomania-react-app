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
  return (
    <>
      <Header isMobile={isMobile} />
      hello world
    </>
  )
}
export default PostPage
