import "../styles/sass/_home.scss"
import Header from "./Header"
import userPosts from "../models/posts"

function Home() {
  //fetch some data and put it into a state variable
  return (
    <>
      <Header />
      <div className="home">
        <h1>Welcome, Name of User</h1>
        <button className="home__button">Create a post</button>
      </div>
      <div className="posts">
        {console.log(userPosts)}
        <ul>
          {userPosts.map((post, index) => (
          <li key={`${post.title}-${index}`}>{post.title}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Home
