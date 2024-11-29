import Presentation from "../../Components/Presentation/Presentation"
import Projets from "../../Components/Projets/Projets"
import './Style.css'

function Home() {
  return (
    <div id="app-content">
      <Presentation/>
      <Projets/>
    </div>
  )
}

export default Home