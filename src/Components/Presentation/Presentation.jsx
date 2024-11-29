
import "./Styles.css";

function Presentation () {


  return (
    <section id="intro" className="mb-5">
      <div className="container">
        <div className="left-content animated-element slide-left in-view">
          <div className="textIntro">
            <div className="row">
              <div className="col-lg-12">
                <img src="./bonjour.svg" alt="Bonjour et bienvenue"></img>
                <img className="photo-profil rounded-circle" src="./photo_profil.png" alt="profil"></img>
                <p className="pres">Je m’appelle <br></br><span>Thomas Girard</span></p>
                <p className="pres">Je suis <br></br><span>développeur Web</span></p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="card mt-5 bg-light">
                  <div className="card-header text-center">
                    <strong>
                      A propos de moi
                    </strong>
                  </div>
                  <div className="card-body height">
                    <p>
                      Fort d&apos;une expérience de 15 ans dans le secteur du bâtiment, j&apos;ai entrepris en 2020 une reconversion professionnelle dans le développement web, transformant ainsi ma passion de toujours pour l&apos;informatique en véritable projet professionnel.
                    </p>
                    <p>
                      Passionné par le fonctionnement des applications, j&apos;ai commencé ma reconversion professionnelle en suivant la formation &apos;Développeur Web&apos; d&apos;OpenClassrooms en 2020.
                      <div>
                        J&apos;ai ensuite poursuivi mon apprentissage avec une formation PHP à la CCI du Cher en 2021,
                        puis une formation d&apos;Intégrateur Web chez OpenClassrooms en 2023-2024.
                      </div>
                    </p>
                    <p>
                      Depuis, je consolide mes compétences à travers divers projets personnels, détaillés ci-dessous, qui illustrent mon parcours d&apos;apprentissage et mon engagement dans ce nouveau domaine.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="card mt-lg-5 mt-md-2 bg-light">
                  <div className="card-header text-center">
                    <strong>
                      Mes languages de programmation
                    </strong>
                  </div>
                  <div className="card-body height text-center">
                    <span className="h5 text-center">Angular 11 CLI</span>
                    <div className="progress mb-2" role="progressbar" aria-label="Default striped example" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                      <div className="progress-bar progress-bar-striped bg-success" style={{ width: '70%' }}></div>
                    </div>
                    <span className="h5 text-center">React 17</span>
                    <div className="progress mb-2" role="progressbar" aria-label="Default striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                      <div className="progress-bar progress-bar-striped bg-success" style={{ width: '75%' }}></div>
                    </div>
                    <span className="h5 text-center">HTML5 / CSS3 / Sass</span>
                    <div className="progress mb-2" role="progressbar" aria-label="Default striped example" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                      <div className="progress-bar progress-bar-striped bg-danger" style={{ width: '85%' }}></div>
                    </div>
                    <span className="h5 text-center">JavaScript</span>
                    <div className="progress mb-2" role="progressbar" aria-label="Default striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                      <div className="progress-bar progress-bar-striped bg-warning" style={{ width: '75%' }}></div>
                    </div>
                    <span className="h5 text-center">Php7</span>
                    <div className="progress mb-2" role="progressbar" aria-label="Default striped example" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                      <div className="progress-bar progress-bar-striped" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6 col-md-12">
                <div className="card mt-2 bg-light">
                  <div className="card-header text-center">
                    <strong>
                      Mes frameworks de travail
                    </strong>
                  </div>
                  <div className="card-body text-center">
                    <span className="h5 text-center">Bootstrap</span>
                    <div className="progress" role="progressbar" aria-label="Default striped example" aria-valuenow="94" aria-valuemin="0" aria-valuemax="100">
                      <div className="progress-bar progress-bar-striped bg-success" style={{ width: '94%' }}></div>
                    </div>
                    <span className="h5 text-center">Twig</span>
                    <div className="progress" role="progressbar" aria-label="Default striped example" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100">
                      <div className="progress-bar progress-bar-striped" style={{ width: '35%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


export default Presentation