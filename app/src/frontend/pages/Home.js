import "../styles/sass/_home.scss"
import Header from "./Header"
import userPosts from "../models/posts"
import "../styles/sass/_posts.scss"
import { Link } from "react-router-dom"
import React, { useState, useEffect } from "react"


function Home() {


   const [matches, setMatches] = useState(
     window.matchMedia("(min-width: 768px)").matches
   )

   useEffect(() => {
     window
       .matchMedia("(min-width: 768px)")
       .addEventListener("change", (e) => setMatches(e.matches))
   }, [])
  //fetch some data and put it into a state variable
  return (
    <>
      <Header />
      <div className="home">
        <h1>Welcome, Name of User</h1>
        <button className="home__button">Create a post</button>
      </div>
      <div className="posts-div">
        {userPosts.map((post, index) => (
          <Link className="posts-link">
            <section className="posts">
              <div key={`${post.title}-${index}`} className="posts__title">
                {post.title}
              </div>
              <div key={`${post.body}-${index}`} className="posts__body">
                {post.body}
              </div>
              <div key={`${post.media}-${index}`} className="posts__media">
                {post.media}
              </div>
            </section>
          </Link>
        ))}
      </div>
      {/* </ul> */}
    </>
  )
}

export default Home
