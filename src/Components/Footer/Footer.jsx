import './Styles.css'
function Footer() {
  return(
    <footer className="footer bg-dark text-light text-center py-4">
      <div className="container">
          <p>&copy; {new Date().getFullYear()} Girard Thomas. Tous droits réservés.</p>
          <div className="social-icons">
              <a href="https://www.linkedin.com/in/thomas-g-789bb71a8/" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
                <i className="fa-brands fa-linkedin-in fa-2x"></i>
              </a>
              <a href="https://profile.indeed.com/p/pa61pcl" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
                <i className="fa-brands fa-invision fa-2x"></i>
              </a>
              <a href="https://github.com/dalton-x/" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
                <i className="fa-brands fa-github-alt fa-2x"></i>
              </a>
              <a href="https://x.com/Xdalton_X" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
                <i className="fa-brands fa-x-twitter fa-2x"></i>
              </a>
          </div>
      </div>
    </footer>
  )
}

export default Footer