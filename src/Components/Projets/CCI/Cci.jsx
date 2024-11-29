function Cci() {
  return (
    
    <section className="py-5">
      <div className="container">
        <div className="row m-3 justify-content-center">
          <div className="col-lg-6 mt-2">
            <div className="card h-100 shadow-lg">
              <div className="card-header text-center text-uppercase">
                évaluation du début de formation
              </div>
              <div className="card-body">
                <h5 className="card-title text-center">Création d&apos;un curriculum vitae</h5>
                <ul className="card-text p-2">
                  <li>
                    Nous devions créer un Cv en <i className="fab fa-html5 text-danger" title="HTML5"></i> et <i className="fab fa-css3-alt text-info" title="CSS3"></i> sans bibliotheque externe
                  </li>
                </ul>
              </div>
              <div className="card-footer d-grid gap-2">
                <a target="_blank" rel="noopener" href="./projets/Cci/cv.html" className="btn btn-primary btn-block">Voir le CV</a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-2">
            <div className="card h-100 shadow-lg">
              <div className="card-header text-center text-uppercase">
                Développement d&apos;une maquette
              </div>
              <div className="card-body">
                <h5 className="card-title text-center">Création d&apos;un site Web via une maquette</h5>
                <ul className="card-text p-2">
                  <li>
                    Faire un site web One page depuis une maquette .psd
                  </li>
                  <li>
                    Travailler avec <i className="fa-brands fa-github" title="Github"></i> en binome (Gestion des pulls, Commit et Merge request)
                  </li>
                  <li>
                    Déployer son site via <i className="fa-brands fa-github-alt" title="Github page"></i>
                  </li>
                </ul>
              </div>
              <div className="card-footer row ">
                <div className="col-6 d-grid gap-2">
                  <a target="_blank" rel="noopener" href="./projets/Cci/maquette_brunch_full_webSite.png" className="btn btn-primary btn-block">Voir la maquette</a>
                </div>
                <div className="col-6 d-grid gap-2">
                  <a target="_blank" rel="noopener" href="https://dalton-x.github.io/brunch_full_website/" className="btn btn-primary btn-block">Voir le site</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cci