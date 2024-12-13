

import { useEffect, useState } from 'react'
import './Styles.css'


function DarkMode() {
  

  return (
    <header>
      <div id="toggle" onClick={() => darkMode === false ? setDarkMode(true) : setDarkMode(false)} >
        <div className="toggle-inner"/>
      </div>
    </header>
  )
}




function Header() {

  const [ darkMode, setDarkMode ] = useState(false)

  useEffect(() => {
    const body = document.body
    const toggle = document.querySelector('.toggle-inner')

    if( darkMode === true ) {
      body.classList.add('dark-mode')
      toggle.classList.add('toggle-active')
    } else {
      body.classList.remove('dark-mode')
      toggle.classList.remove('toggle-active')
    }
  }, [darkMode])

  return(
    <div className="container">
      <div className="row align-items-center">
        <div className="col-1 text-center">
          <a href="/" className="">
            <img src={darkMode === false ? '/logo_black.png' : '/logo_white.png'} className="img-fluid" alt="Logo dev-web.fr"></img>
          </a>
        </div>

        <ul className="nav col-10 justify-content-center text-center text-small">
          <li>
            <a href="#formation" className="link nav-link py-3" >
              <i className="fas fa-book-open fa-3x text-danger"></i>
            </a>
            <span className="text-dark">
              Formation
            </span>
          </li>
          <li>
            <a href="#parcours" className="link nav-link py-3">
              <i className="fas fa-route fa-3x text-danger"></i>
            </a>
            <span className="text-dark">
              Parcours
            </span>
          </li>
          <li>
            <a href="#projets" className="link nav-link py-3">
              <i className="fas fa-tasks fa-3x text-danger"></i>
            </a>
            <span className="text-dark">
              Projets
            </span>
          </li>
          <li>
            <a href="#contact" className="link nav-link py-3">
              <i className="fas fa-envelope fa-3x text-danger"></i>
            </a>
            <span className="text-dark">
              Contact
            </span>
          </li>
        </ul>

        <div className="col-1">
          <div id="dark-mode">
            <div id="toggle" onClick={() => darkMode === false ? setDarkMode(true) : setDarkMode(false)} >
              <div className="toggle-inner"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



export default Header