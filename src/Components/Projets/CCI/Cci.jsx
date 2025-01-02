
import './Style.css'
import dataCard from "./projets.json";
import { Card } from "../../Card/Card";


function Cci() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row m-3 justify-content-center">
            {dataCard.map((card, index) => (
              <Card key={'card_' + index} card={card} />
            ))}
        </div>
      </div>
    </section>
  );
}

export default Cci