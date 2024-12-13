
export const Card = ({ card }) => {  
  return (
    <div className="col-lg-6 mt-md-3">
      <div className="card">
        <div className="card-header">
          <h5>{card.header}</h5>
        </div>
        <div className="card-body">
          <h6>{card.body.title}</h6>
          <ul>
            {card.body.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="card-footer d-grid gap-2">
          <a target="_blank" href={card.footer.link.url} className="btn btn-primary">
            {card.footer.link.text}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;