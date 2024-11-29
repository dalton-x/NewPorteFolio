
import './Style.css'


function DevWeb() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row m-3">
          <div className="col-lg-6 mt-2">
            <div className="card h-100 shadow-lg">
              <div className="card-header text-center text-uppercase">
                Mise en forme d&apos;un site de menus de restaurants
              </div>
              <div className="card-body">
                <h5 className="card-title text-center">Les animations et Sass</h5>
                <ul className="card-text p-2">
                  <li>
                    En partant de maquette fournit par un client, j&apos;ai dû réaliser le site web avec un cahier des charges définit.
                  </li>
                  <li>
                    La création d&apos;animations et de mise en forme des menus fournit en images pour les rendre au format. <i className="fab fa-html5 text-danger" title="HTML5"></i> et <i className="fab fa-css3-alt text-info" title="CSS3"></i>.
                  </li>
                </ul>
              </div>
              <div className="card-footer d-grid gap-2">
                <a target="_blank" rel="noopener" href="https://projet-3.dev-web.fr/" className="btn btn-primary btn-block">Voir le site</a>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-2">
            <div className="card h-100 shadow-lg">
              <div className="card-header text-center text-uppercase">
                Reprise d&apos;un site pour le mettre aux normes actuelles
              </div>
              <div className="card-body">
                <h5 className="card-title text-center">L&apos;optimisation et le référencement</h5>
                <ul className="card-text p-2">
                  <li>
                    Le client a un site web n&apos;étant pas très bien référencé dans les moteurs de recherche.
                  </li>
                  <li>
                    Je me devais de remettre le site web aux normes actuelles et surtout d&apos;enlever toutes les mauvaises pratiques de référencement.
                  </li>
                </ul>
              </div>
              <div className="card-footer d-grid gap-2">
                <a data-bs-toggle="modal" data-bs-target="#modal" className="btn btn-primary btn-block">Voir les rapports</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row m-3">
          <div className="col-lg-6 mt-2">
            <div className="card h-100 shadow-lg">
              <div className="card-header text-center text-uppercase">
                Utilisation d&apos;une API serveur
              </div>
              <div className="card-body">
                <h5 className="card-title text-center">Développement du front-end</h5>
                <ul className="card-text p-2">
                  <li>
                    Le client m&apos;a fourni une API pour se connecter a son serveur de son site e-commerce.
                  </li>
                  <li>
                    J&apos;ai dû faire toute l&apos;interface client en respectant le CDC et le respect de son interface client-serveur.
                  </li>
                  <li>
                    Utilisation de <i className="fab fa-html5 text-danger" title="HTML5"></i> , <i className="fab fa-css3-alt text-info" title="CSS3"></i> et <i className="fab fa-js-square text-warning"></i>
                  </li>
                </ul>
              </div>
              <div className="card-footer d-grid gap-2">
                <a target="_blank" rel="noopener" href="https://projet-5.dev-web.fr/" className="btn btn-primary btn-block">Voir le site</a>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-2">
            <div className="card h-100 shadow-lg">
              <div className="card-header text-center text-uppercase">
                Création du serveur avec un front déjà existant
              </div>
              <div className="card-body">
                <h5 className="card-title text-center">Développement du back-end</h5>
                <ul className="card-text p-2">
                    <li>
                      Le client m&apos;a demandé de faire le serveur de son application de gestion de sauces piquantes.
                    </li>
                    <li>
                      Je devais reprendre son API et faire le traitement des données :
                      <ul>
                        <li>
                          Utilisateurs : inscription/Connexion.
                        </li>
                        <li>
                        Traitement de l&apos;ajout / suppression des sauces piquantes.
                        </li>
                        <li>
                        Gestion des <i className="fas fa-thumbs-up text-success" title="like"></i> & <i className="fas fa-thumbs-down text-danger" title="unlike"></i> des sauces par les utilisateurs.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Utilisation de <i className="fab fa-node text-success" title="nodeJS"></i> & de MongoDB
                    </li>
                </ul>
              </div>
              <div className="card-footer d-grid gap-2">
                <a target="_blank" rel="noopener" href="https://projet-6.dev-web.fr/" className="btn btn-primary btn-block">Voir le site</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row m-3">
          <div className="col-lg-6 mt-2 offset-lg-3">
            <div className="card h-100 shadow-lg">
              <div className="card-header text-center text-uppercase">
                Création d&apos;un réseau social
              </div>
              <div className="card-body">
                <h5 className="card-title text-center">Groupomania</h5>
                <ul className="card-text p-2">
                  <li>
                    Le client m&apos;a contacté pour lui faire un réseau social pour son entreprise en plein développement.
                  </li>
                  <li>
                    Avec un CDC rigoureux et l&apos;utilisation des logos de l&apos;entreprise.
                  </li>
                  <li>
                    L&apos;utilisation du framework <i className="fab fa-angular text-danger"></i> pour le front et de <i className="fab fa-node text-success" title="nodeJS"></i> avec MYSQL et sequelize pour la gestion des données serveur.
                  </li>
                </ul>
              </div>
              <div className="card-footer d-grid gap-2">
                <a target="_blank" rel="noopener" href="https://projet-7.dev-web.fr/" className="btn btn-primary btn-block">Voir le site</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal principal  */}
      <div className="modal fade" id="modal" aria-hidden="true" aria-labelledby="modalLabel">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalLabel">Voir les rapports SEO</h5>
              <button type="button" className="btn-close text-danger" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <ul>
                <li>Optimisation du code</li>
                <li>Optimisation des images en format web actuel</li>
                <li>Correction des erreurs de code et de script <i className="fab fa-js-square text-warning"></i></li>
              </ul>
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary" data-bs-target="#modalSEOOriginal" data-bs-toggle="modal" data-bs-dismiss="modal">SEO original</button>
              <button className="btn btn-primary" data-bs-target="#modalSEOOptimise" data-bs-toggle="modal" data-bs-dismiss="modal">SEO optimisé</button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal original  */}
      <div className="modal fade" id="modalSEOOriginal" aria-hidden="true" aria-labelledby="modalSEOOriginalLabel">
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalSEOOriginalLabel">Rapport SEO de la version originale du site</h5>
              <button className="btn-close text-danger" data-bs-toggle="modal" data-bs-target="#modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <iframe title="Rapport SEO Original" width="1100" height="700" src="./projets/devWeb/html/rapport_seo_original.html"></iframe>
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal">Fermer</button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal optimisé  */}
      <div className="modal fade" id="modalSEOOptimise" aria-hidden="true" aria-labelledby="modalSEOOptimiseLabel">
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalSEOOptimiseLabel">Rapport SEO de la version optimisée du site</h5>
              <button className="btn-close text-danger" data-bs-toggle="modal" data-bs-target="#modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <iframe title="Rapport SEO Optimisé" width="1100" height="700" src="./projets/devWeb/html/rapport_seo_optimise.html"></iframe>
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal">Fermer</button>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}


export default DevWeb