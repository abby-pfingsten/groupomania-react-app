import "../styles/sass/Home.scss"
import Header from "./Header"
import userPosts from "../models/posts"
import "../styles/sass/Posts.scss"
import { Link } from "react-router-dom"
import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons"


function Home({mobileHeader}) {
  const faCirclePlusElement = <FontAwesomeIcon icon={faCirclePlus} />

  return (
    <>
      <Header mobileHeader={mobileHeader}/>
      <div className="home">
        <h1>Welcome, Name of User</h1>
        <button className="home__button">{mobileHeader ? faCirclePlusElement : 'Create A Post'}</button>
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
