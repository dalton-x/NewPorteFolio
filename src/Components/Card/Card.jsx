
export const Card = ({ card }) => {  
  return (
    <div className="col-lg-6 mt-md-3">
      <div className="card h-100">
        <div className="card-header">
          <h5>{card.header}</h5>
        </div>
        <div className="card-body">
          <h6>{card.body.title}</h6>
            <ul>
              {card.body.items.map((item, index) => (
                <li key={'item_'+index} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
        </div>
        <div className="card-footer d-grid gap-2">
          {
            (card.footer.link != undefined)
            ?
              <a target="_blank" href={card.footer.link.url} className="btn btn-primary">
                {card.footer.link.text}
              </a>
            :  
              <div className="row">
                {card.footer.btn.map((btn, index) => (
                  <div key={'btn_'+index} className="col-6 d-grid gap-2">
                    <button className="btn btn-primary" data-bs-target={btn.target} data-bs-toggle="modal">{btn.text}</button>
                  </div>
                ))}
              </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Card;