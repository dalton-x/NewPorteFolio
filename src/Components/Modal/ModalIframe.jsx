
import './Styles.css'


function ModalIframe({id, title, lien, titreIframe}) {
  return (
    <div className="modal fade" id={`modal${id}`} aria-labelledby={`modal${id}Label`}>
      <div className="modal-dialog modal-xl modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id={`modal${id}Label`}>{title}</h1>
            <button type="button" className="btn-close text-danger" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <iframe title={titreIframe} width="1100" height="600" src={lien}></iframe>
          </div>
          <div className="modal-footer">
            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#modal${id}`}>Fermer</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalIframe