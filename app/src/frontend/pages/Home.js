import "../styles/sass/_home.scss"
import Header from "./Header"

function Home() {
  //fetch some data and put it into a state variable
  return (
    <>
      <div className="home">
        <Header />

        <h1>Home Page</h1>
        {/* {faEnvelope} */}
      </div>
    </>
  )
}

export default Home
