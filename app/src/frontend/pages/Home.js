import "../styles/sass/_home.scss"
import Header from "./Header"
import userPosts from "../models/posts"
import "../styles/sass/_posts.scss"

function Home() {
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

            <br></br>
          </section>
        ))}
      </div>
      {/* </ul> */}
    </>
  )
}

export default Home
