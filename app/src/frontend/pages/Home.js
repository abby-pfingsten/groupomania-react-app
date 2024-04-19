import "../styles/sass/_home.scss"
import Header from "./Header"

function Home() {
  //fetch some data and put it into a state variable
  return (
    <>
      <Header />
      <div className="home">
        <h1>Welcome, Name of User</h1>
        <button className="home__button">
          Create a post
        </button>
      </div>
    </>
  )
}

export default Home
