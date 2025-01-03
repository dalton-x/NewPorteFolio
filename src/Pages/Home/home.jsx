import Footer from "../../Components/Footer/Footer"
import Presentation from "../../Components/Presentation/Presentation"
import Projets from "../../Components/Projets/Projets"
import Timeline from "../../Components/Timeline/Timeline"
import './Style.css'

function Home() {
  return (
    <div id="app-content">
      <Presentation/>
      <Projets/>
      <Timeline/>
      <Footer/>
    </div>
  )
}

export default Home