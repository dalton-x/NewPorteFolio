


function Header() {
  return(
    <div className="container">
      <div className="row align-items-center">
        <div className="col-1 text-center">
          <a href="/" className="">
            <img src="/logo_black.png" className="img-fluid" alt="Logo dev-web.fr"></img>
          </a>
        </div>

        <ul className="nav col-11 justify-content-center text-center text-small">
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
      </div>
    </div>
  )
}



export default Header